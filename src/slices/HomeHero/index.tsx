import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

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
      className="px-6 py-2 md:py-4"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-zinc-800">
            <span className="relative z-10 before:transition-transform before:origin-left before:block before:absolute before:-left-2 before:-right-2 before:top-2 md:before:top-4 before:bottom-1 before:-z-10 before:bg-primary-light before:scale-x-0 before:scale-y-1 before:animate-underline before:will-change-transform">
              {slice.primary.title}
            </span>
          </h1>
          <div className="flex flex-col gap-3 justify-between transition-opacity">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
