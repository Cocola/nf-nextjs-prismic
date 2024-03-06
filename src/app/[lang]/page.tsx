import { Metadata } from "next"

import { SliceZone } from "@prismicio/react"
import * as prismic from "@prismicio/client"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { getLocales } from "@/lib/getLocales"
import Header from "@/ui/Header/Header"
import { commonMetas } from "@/lib/utils"

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string }
}): Promise<Metadata> {
  const client = createClient()
  const home = await client.getByUID("page", "home", { lang })

  return {
    ...commonMetas,
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
    verification: {
      google: "haedaDKFZrr9oEJ2ttT6TqVJsK3L5ZKAlGjqCwn0oTw",
    },
  }
}

export default async function Index({
  params: { lang },
}: {
  params: { lang: string }
}) {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient()
  const home = await client.getByUID("page", "home", { lang })
  const locales = await getLocales(home, client)

  return (
    <>
      <Header locales={locales} lang={lang} />
      <SliceZone slices={home.data.slices} components={components} />
    </>
  )
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType("page", {
    lang: "*",
    filters: [prismic.filter.at("my.page.uid", "home")],
  })

  return pages.map((page) => {
    return {
      lang: page.lang,
    }
  })
}
