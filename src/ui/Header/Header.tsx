import { createClient } from "@/prismicio"
import { Navigation } from "../Navigation/Navigation"
import { PrismicNextLink } from "@prismicio/next"

import dynamic from "next/dynamic"

const SetThemeButton = dynamic(() => import("../ModeToggle/ModeToggle"), {
  ssr: false,
  loading: () => <div className="w-9 h-9" />,
})

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
    <header className="m-3 md:m-0 px-3 md:px-6 py-2 md:py-4 fixed max-md:bottom-0 md:top-0 left-0 right-0 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm z-20 max-md:rounded-full max-md:drop-shadow-xl">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex justify-between items-center">
          <svg
            className={
              "h-12 w-12 md:h-16 md:w-16 fill-zinc-800 bg-primary-light rounded-full"
            }
            viewBox="0 0 280 280"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="logo__image"
              d="M216.249 84.3532C213.448 87.9325 209.647 90.1198 204.845 90.5175L196.643 91.5118C189.64 92.3072 184.039 95.4888 179.637 100.858C177.637 103.443 176.236 106.028 175.436 108.812L203.245 105.63C203.845 110.204 202.645 114.38 199.644 117.959C196.643 121.538 192.842 123.726 188.24 124.123L175.436 125.714C175.636 126.907 175.636 127.703 175.636 127.703L177.837 146.594C177.837 147.588 178.037 148.582 177.837 149.576C179.637 178.609 158.231 204.459 128.621 207.641C98.2119 211.22 70.8034 189.346 67.2023 159.121V158.525L60 94.8923C64.8015 94.2957 69.2029 95.4888 73.0041 98.4716C73.6043 98.8693 74.0044 99.267 74.4045 99.6647C81.6068 91.5118 90.6096 86.7394 101.613 85.3474C113.217 83.9555 123.42 86.9382 132.623 94.0969C141.826 101.255 147.027 110.601 148.428 122.135L153.229 163.297C148.428 163.894 144.026 162.502 140.225 159.519C136.424 156.536 134.223 152.559 133.623 147.787L130.822 123.925C130.022 117.164 127.021 111.596 121.619 107.221C116.218 102.846 110.216 100.858 103.414 101.653C96.6114 102.449 91.0097 105.63 86.8084 110.999C82.8071 116.169 81.0066 122.135 81.6068 128.498L84.8078 155.94C85.0078 156.337 85.0078 156.735 85.0078 156.934C87.4086 177.415 106.014 192.13 126.621 189.943C147.227 187.557 162.232 169.064 159.831 148.582V146.395L157.03 121.339C155.63 109.806 158.831 99.267 166.233 90.3187C173.836 81.1716 183.239 76.0014 195.042 74.6095L219.85 72.0244C220.45 76.598 219.25 80.7739 216.249 84.3532ZM105.614 115.97C102.213 116.368 99.8124 119.351 100.213 122.93L103.614 152.161C104.014 155.542 107.015 157.928 110.616 157.53C114.017 157.133 116.418 154.15 116.218 150.769L112.817 121.538C112.216 117.959 109.015 115.573 105.614 115.97V115.97Z"
            />
          </svg>
          <Navigation data={nav.data} />
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
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
                  >
                    {localeLabels[locale.lang as keyof typeof localeLabels] ||
                      locale.lang}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <SetThemeButton />
          </div>
        </div>
      </div>
    </header>
  )
}
