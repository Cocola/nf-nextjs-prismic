import { Metadata } from "next"
import { notFound } from "next/navigation"

import { JSXMapSerializer, PrismicRichText, SliceZone } from "@prismicio/react"
import * as prismic from "@prismicio/client"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { getLocales } from "@/lib/getLocales"
import Header from "@/ui/Header/Header"
import { commonMetas } from "@/lib/utils"
import LinkedinPush from "@/ui/LinkedinPush/LinkedinPush"

const componentsT: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-16">
      {children}
    </h1>
  ),
}

type Params = { uid: string; lang: string }

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata(
  props: {
    params: Promise<Params>
  }
): Promise<Metadata> {
  const params = await props.params;
  const client = createClient()
  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound())

  return {
    ...commonMetas,
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

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;
  const client = createClient()
  const page = await client
    .getByUID("page", params.uid, { lang: params.lang })
    .catch(() => notFound())
  const locales = await getLocales(page, client)

  return (
    <>
      <Header locales={locales} lang={params.lang} />
      <div className="px-6 py-2 md:py-4">
        <div className="mx-auto w-full max-w-6xl">
          <PrismicRichText field={page.data.title} components={componentsT} />
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
      <LinkedinPush lang={params.lang} />
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.not("my.page.uid", "home")],
  })

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => ({ uid: page.uid, lang: page.lang }))
}
