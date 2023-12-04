"use client"
import { PrismicLink } from "@prismicio/react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { asLink } from "@prismicio/client"

export const Navigation = ({ data }: any) => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-8 transition-opacity opacity-80 hover:opacity-100">
        {data.slices.map((item: any) => {
          const url = asLink(item.primary.link) as string
          const currentCat = url === pathname

          return (
            <li
              key={JSON.stringify(item)}
              className={clsx(
                "text-xs md:text-base font-semibold block transition-opacity opacity-80 hover:opacity-100",
                currentCat && "underline underline-offset-8 opacity-100"
              )}
            >
              <PrismicLink field={item.primary.link} aria-current={currentCat}>
                {item.primary.name}
              </PrismicLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
