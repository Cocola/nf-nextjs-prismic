import { Content } from "@prismicio/client"
import { PrismicImage, SliceComponentProps } from "@prismicio/react"
import clsx from "clsx"
import styles from "./index.module.css"

/**
 * Props for `ProjectHero`.
 */
export type ProjectHeroProps = SliceComponentProps<Content.ProjectHeroSlice>

/**
 * Component for "ProjectHero" Slices.
 */
const ProjectHero = ({ slice }: ProjectHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="overflow-x-hidden">
        <div
          className={clsx(
            styles.animate,
            "transition-transform will-change-transform flex gap-16"
          )}
        >
          <PrismicImage
            field={slice.primary.image}
            alt={""}
            className="overflow rounded-3xl md:max-h-[80dvh]"
            loading="eager"
          />
          <PrismicImage
            field={slice.primary.image}
            alt={""}
            className="overflow rounded-3xl md:max-h-[80dvh]"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
