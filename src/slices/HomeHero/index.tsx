"use client"
import { KonamiCode } from "@/ui/KonamiCode"
import { Content } from "@prismicio/client"
import { PrismicLink, SliceComponentProps } from "@prismicio/react"
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
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black dark:text-zinc-100/90 text-zinc-800">
            <span className="relative z-10">
              {slice.primary.title}
              <motion.span
                className="origin-left block absolute left-0 bottom-0 md:bottom-2 h-1/4 -z-10 -rotate-1 bg-primary-light"
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
            <div className="pt-3">
              <PrismicLink
                field={slice.primary.project_link}
                className="group relative z-10 inline-block p-2 px-9 font-semibold before:absolute before:-inset-0 before:bg-primary-light before:rounded text-zinc-800 before:transition-transform before:-z-10 focus:before:scale-105 hover:before:scale-105 focus:outline-offset-8 "
              >
                {slice.primary.project_link_label}
                <span className="absolute transition-transform opacity-0 right-0 -translate-x-6 group-hover:-translate-x-2 group-hover:opacity-100 group-focus:-translate-x-1 group-focus:opacity-100">
                  →
                </span>
              </PrismicLink>
            </div>
          </motion.div>
          <KonamiCode />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
