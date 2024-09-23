"use client"
import { PrismicLink } from "@prismicio/react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { asLink } from "@prismicio/client"
import { BiHomeAlt } from "react-icons/bi"
import { FaRegHandPeace } from "react-icons/fa6"
import { HiOutlineLightBulb } from "react-icons/hi2"

export const Navigation = ({ data }: any) => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex gap-4 md:gap-8">
        {data.slices.map((item: any) => {
          const url = asLink(item.primary.link) as string
          const currentCat = url === pathname

          return (
            <li
              key={JSON.stringify(item)}
              className={clsx(
                "text-xs md:text-base font-semibold block transition-opacity hover:opacity-100",
                currentCat && "underline underline-offset-8 opacity-100",
                currentCat ? "opacity-100" : "opacity-80"
              )}
            >
              <PrismicLink field={item.primary.link} aria-current={currentCat}>
                <span className="md:hidden flex justify-center">
                  {item.primary.icon === "home" && <BiHomeAlt />}
                  {item.primary.icon === "about" && <FaRegHandPeace />}
                  {item.primary.icon === "projects" && <HiOutlineLightBulb />}
                </span>
                {item.primary.name}
              </PrismicLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
