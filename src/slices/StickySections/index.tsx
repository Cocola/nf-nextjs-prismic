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
        {slice.items.map((el, index) => {
          return (
            <div
              key={index}
              className={clsx("p-8 mb-8 rounded-2xl dark:text-zinc-800")}
            >
              <div className="grid grid-cols-2">
                <div>
                  <div className="min-h-screen grid place-content-center">
                    <h3 className="text-6xl md:text-9xl font-black w-full">
                      <span className="block text-lg md:text-4xl font-semibold">
                        {el.title}
                      </span>
                    </h3>
                  </div>
                  <div className="min-h-screen">
                    <PrismicRichText field={el.description} />
                  </div>
                </div>
                <PrismicImage
                  className="sticky top-0 min-h-screen aspect-auto"
                  field={el.image}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StickySections
