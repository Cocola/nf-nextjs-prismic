"use client"
import { PrismicLink } from "@prismicio/react"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export const Navigation = ({ data }) => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex gap-8">
        {data.slices.map((item) => {
          const url = item.primary.link.url
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
