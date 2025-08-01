import { createClient } from "@/prismicio"
import { Navigation } from "../Navigation/Navigation"
import { PrismicNextLink } from "@prismicio/next"

import { Logo } from "./Logo"
import { ModeToggleDynamic } from "../ModeToggle/ModeToggleDynamic"

const localeLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
}

interface HeaderProps {
  lang: string
  locales: {
    lang: string
    lang_name: string
    url: string
  }[]
}

export default async function Header({ locales, lang }: HeaderProps) {
  const client = createClient()
  const nav = await client.getSingle("navigation", { lang: lang })

  return (
    <header className="max-sm:mx-1 m-3 md:m-0 max-sm:p-1 p-2 pr-4 md:px-6 md:py-4 fixed max-md:bottom-0 md:top-0 left-0 right-0 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm z-20 max-md:rounded-full max-md:drop-shadow-xl">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex justify-between items-center min-h-12">
          <div className="max-md:hidden">
            <Logo />
          </div>
          <Navigation data={nav.data} />
          <div className="flex flex-wrap max-sm:gap-1 gap-3 md:gap-4 items-center">
            <ul className="flex flex-wrap gap-1 md:gap-3">
              {locales.map((locale) => (
                <li
                  key={locale.lang}
                  className="max-sm:text-sm first:font-semibold"
                >
                  <PrismicNextLink
                    href={locale.url}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                    className="md:py-2 px-1 block"
                  >
                    {localeLabels[locale.lang as keyof typeof localeLabels] ||
                      locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <ModeToggleDynamic />
          </div>
        </div>
      </div>
    </header>
  )
}
