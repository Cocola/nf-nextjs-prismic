import { Content } from "@prismicio/client"
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react"
import clsx from "clsx"
import styles from "./index.module.css"

/**
 * Props for `StickySections`.
 */
export type StickySectionsProps =
  SliceComponentProps<Content.StickySectionsSlice>

/**
 * Component for "StickySections" Slices.
 */
const StickySections = ({ slice }: StickySectionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(styles.animate, "px-6 py-16 md:py-32 ")}
    >
      <div className={"mx-auto w-full max-w-screen-xl"}>
        <h2 className="text-2xl font-bold mb-7 last:mb-0">
          {slice.primary.title}
        </h2>
        <div className="max-md:relative max-md:w-full max-md:flex max-md:gap-6 max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto ">
          {slice.items.map((el, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "py-4 max-md:mr-16 max-md:snap-start max-md:shrink-0 "
                )}
              >
                <div className="max-md:flex md:grid md:grid-cols-2 gap-16 md:gap-32">
                  <div className="max-md:w-[60vw]">
                    <div className="md:min-h-screen flex flex-col justify-center ">
                      <div className="flex flex-col gap-4">
                        {el.icon_svg_path && (
                          <svg
                            viewBox="0 0 120 120"
                            height="120"
                            width={"120"}
                            fill="black"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current "
                          >
                            <path d={el.icon_svg_path} />
                          </svg>
                        )}
                        <h3 className="text-6xl md:text-9xl font-black w-full">
                          <span className="block text-lg md:text-4xl font-semibold">
                            {el.title}
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="md:min-h-[50DVH] text-xs md:text-lg">
                      <PrismicRichText field={el.description} />
                    </div>
                  </div>
                  <div className="md:min-h-screen">
                    <PrismicImage
                      className="rounded-xl max-md:w-[60vw] md:sticky top-16"
                      field={el.image}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StickySections
