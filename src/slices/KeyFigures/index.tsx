import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import clsx from "clsx"
import styles from "./index.module.css"
/**
 * Props for `KeyFigures`.
 */
export type KeyFiguresProps = SliceComponentProps<Content.KeyFiguresSlice>

/**
 * Component for "KeyFigures" Slices.
 */
const KeyFigures = ({ slice }: KeyFiguresProps): JSX.Element => {
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
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:grid-flow-row-dense">
          {slice.items.map((el, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "p-8 rounded-2xl dark:text-zinc-800",
                  el.accent ? "md:col-span-2 bg-primary-light" : "bg-zinc-200",
                  styles.animate
                )}
              >
                <h3 className="text-6xl md:text-9xl font-black">
                  {el.figure}{" "}
                  <span className="block text-lg md:text-2xl font-semibold">
                    {el.figure_title}
                  </span>
                </h3>
                <PrismicRichText field={el.figure_description} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyFigures
