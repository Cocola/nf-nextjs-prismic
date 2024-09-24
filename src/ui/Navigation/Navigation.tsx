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
      <ul className="flex md:gap-8">
        {data.slices.map((item: any) => {
          const url = asLink(item.primary.link) as string
          const currentCat = url === pathname

          return (
            <li
              key={JSON.stringify(item)}
              className={clsx(
                "text-xs md:text-base font-semibold block transition-opacity hover:opacity-100 max-md:p-3 max-md:min-w-[72px]",
                currentCat &&
                  "max-md:bg-white/80 dark:max-md:bg-white/10 max-md:rounded-full md:underline md:underline-offset-8 md:opacity-100",
                currentCat ? "opacity-100" : "opacity-80"
              )}
            >
              <PrismicLink
                field={item.primary.link}
                aria-current={currentCat}
                className="max-md:flex max-md:flex-col max-md:justify-center max-md:align-middle"
              >
                <span className="md:hidden flex justify-center">
                  {item.primary.icon === "home" && <BiHomeAlt />}
                  {item.primary.icon === "about" && <FaRegHandPeace />}
                  {item.primary.icon === "projects" && <HiOutlineLightBulb />}
                </span>
                <span className="max-md:flex max-md:justify-center">
                  {item.primary.name}
                </span>
              </PrismicLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
