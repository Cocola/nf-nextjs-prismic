import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  JSXMapSerializer,
  PrismicLink,
  PrismicRichText,
  SliceZone,
} from "@prismicio/react"
import * as prismic from "@prismicio/client"

import { createClient } from "@/prismicio"
import { components } from "@/slices"

const componentsT: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-16">
      {children}
    </h1>
  ),
}

type Params = { uid: string }

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client.getByUID("page", params.uid).catch(() => notFound())

  return (
    <>
      <div className="px-6 py-2 md:py-4">
        <div className="mx-auto w-full max-w-6xl">
          <PrismicLink href="/">Back</PrismicLink>
          <PrismicRichText field={page.data.title} components={componentsT} />
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    predicates: [prismic.filter.not("my.page.uid", "home")],
  })

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid }
  })
}
