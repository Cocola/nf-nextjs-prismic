import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrismicLink, SliceZone } from "@prismicio/react"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { getLocales } from "@/lib/getLocales"
import Header from "@/ui/Header/Header"
import { commonMetas } from "@/lib/utils"
import LinkedinPush from "@/ui/LinkedinPush/LinkedinPush"

type Params = { uid: string; lang: string }

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params
  const client = createClient()
  const page = await client
    .getByUID("project", params.uid, { lang: params.lang })
    .catch(() => notFound())
  const locales = await getLocales(page, client)

  return (
    <>
      <Header locales={locales} lang={params.lang} />
      <div className="px-6 py-2 md:py-4">
        <div className="mx-auto w-full max-w-6xl">
          <PrismicLink href="/projects">Back</PrismicLink>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-8 md:mb-16">
            {page.data.title}
          </h1>
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
      <LinkedinPush lang={params.lang} />
    </>
  )
}

export async function generateMetadata(props: {
  params: Promise<Params>
}): Promise<Metadata> {
  const params = await props.params
  const client = createClient()
  const page = await client
    .getByUID("project", params.uid, { lang: params.lang })
    .catch(() => notFound())

  return {
    ...commonMetas,
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("project", { lang: "*" })

  return pages.map((page) => ({ uid: page.uid, lang: page.lang }))
}
