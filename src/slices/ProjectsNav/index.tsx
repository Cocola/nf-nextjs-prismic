import { Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"
import clsx from "clsx"

const IconLeft = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.646882 5.64687C0.453132 5.84062 0.453132 6.15937 0.646882 6.35312L5.64688 11.3531C5.84063 11.5469 6.15938 11.5469 6.35313 11.3531C6.54688 11.1594 6.54688 10.8406 6.35313 10.6469L1.70626 6L6.35313 1.35312C6.54688 1.15937 6.54688 0.840625 6.35313 0.646875C6.15938 0.453125 5.84063 0.453125 5.64688 0.646875L0.646882 5.64687Z" />
  </svg>
)

const IconRight = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.35312 5.64687C6.54687 5.84062 6.54687 6.15937 6.35312 6.35312L1.35312 11.3531C1.15937 11.5469 0.840619 11.5469 0.646869 11.3531C0.453119 11.1594 0.453119 10.8406 0.646869 10.6469L5.29374 6L0.646869 1.35312C0.453119 1.15937 0.453119 0.840625 0.646869 0.646875C0.840619 0.453125 1.15937 0.453125 1.35312 0.646875L6.35312 5.64687Z" />
  </svg>
)
/**
 * Props for `ProjectsNav`.
 */
export type ProjectsNavProps = SliceComponentProps<Content.ProjectsNavSlice>

/**
 * Component for "ProjectsNav" Slices.
 */
const ProjectsNav = ({ slice }: ProjectsNavProps): JSX.Element => {
  const isPrev = slice.primary.previous_project_name
  const isNext = slice.primary.next_project_name
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="md:flex md:justify-between gap-10 ">
        {isPrev && (
          <div
            className={clsx(
              "p-8 transition-opacity opacity-80 hover:opacity-100",
              isNext ? "md:w-1/2" : "w-full"
            )}
          >
            <div className="font-light uppercase text-xs">
              {slice.primary.previous_label}
            </div>
            <PrismicNextLink
              field={slice.primary.previous_project_link}
              className="font-medium text-sm md:text-xl inline-flex justify-center items-center gap-3"
            >
              <IconLeft />
              {slice.primary.previous_project_name}
            </PrismicNextLink>
          </div>
        )}
        {isNext && (
          <div
            className={clsx(
              "p-8 transition-opacity opacity-80 hover:opacity-100 text-right",
              isPrev ? "md:w-1/2" : "w-full"
            )}
          >
            <div className="font-light uppercase text-xs">
              {slice.primary.next_label}
            </div>
            <PrismicNextLink
              field={slice.primary.next_project_link}
              className="font-medium text-sm md:text-xl inline-flex justify-center items-center gap-3"
            >
              {slice.primary.next_project_name}
              <IconRight />
            </PrismicNextLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsNav
