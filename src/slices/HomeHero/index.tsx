"use client"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { motion } from "framer-motion"

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-2 md:py-4 min-h-[70dvh] flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-800">
            <span className="relative z-10">
              {slice.primary.title}
              <motion.span
                className="origin-left block absolute left-0 top-0 md:top-4 bottom-0 -z-10 bg-primary-light -rotate-1"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.25,
                }}
              />
            </span>
          </h1>
          <motion.div
            className="flex flex-col gap-3 justify-between"
            initial={{ opacity: 0, x: "-10px" }}
            animate={{ opacity: 1, x: "0px" }}
            transition={{ delay: 1 }}
          >
            <div>
              <div className="font-light uppercase tracking-widest">
                {slice.primary.current_position_date}
              </div>
              <h2 className="text-l md:text-4xl font-extrabold">
                {slice.primary.current_position_title}
              </h2>
              <h3 className="text-m md:text-2xl font-extrabold">
                {slice.primary.current_position_subtitle}
              </h3>
            </div>
            <div>
              <div className="font-light uppercase tracking-widest">
                {slice.primary.past_position_date}
              </div>
              <h2 className="text-m md:text-2xl font-bold">
                {slice.primary.past_position_title}
              </h2>
              <h3 className="text-s md:text-xl font-bold">
                {slice.primary.past_position_subtitle}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
