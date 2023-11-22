import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrismicLink, SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"

type Params = { uid: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient()
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound())

  return (
    <>
      <div className="px-6 py-2 md:py-4">
        <div className="mx-auto w-full max-w-6xl">
          <PrismicLink href="/">Back</PrismicLink>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-16">
            {page.data.title}
          </h1>
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("project")

  return pages.map((page) => {
    return { uid: page.uid }
  })
}
