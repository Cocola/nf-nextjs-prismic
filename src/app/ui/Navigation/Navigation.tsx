"use client"
import { PrismicLink } from "@prismicio/react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { asLink } from "@prismicio/client"

export const Navigation = ({ data }: any) => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex gap-8">
        {data.slices.map((item: any) => {
          // Fix TS Prismic link management. see: https://community.prismic.io/t/how-to-get-url-from-link-in-typescript-next-js-project/12270/4
          const url = asLink(item.primary.link) as string
          return (
            <li
              key={JSON.stringify(item)}
              className={clsx(
                "text-xs md:text-base",
                url === pathname && "underline underline-offset-4"
              )}
            >
              {url === pathname ? (
                item.primary.name
              ) : (
                <PrismicLink field={item.primary.link}>
                  {item.primary.name}
                </PrismicLink>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
