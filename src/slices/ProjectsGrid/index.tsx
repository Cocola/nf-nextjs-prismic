"use client"
import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, SliceComponentProps } from "@prismicio/react"
import clsx from "clsx"
import { motion } from "framer-motion"

/**
 * Props for `ProjectsGrid`.
 */
export type ProjectsGridProps = SliceComponentProps<Content.ProjectsGridSlice>

/**
 * Component for "ProjectsGrid" Slices.
 */
const ProjectsGrid = ({ slice }: ProjectsGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={"p-2"}
    >
      <div className={"mx-auto w-full max-w-screen-xl"}>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:grid-flow-row-dense">
          {slice.items.map((el, index) => {
            const linkExist = el.project_link.link_type !== "Any"

            return (
              <motion.div
                key={index}
                transition={{ delay: index * 0.25 }}
                initial={{ opacity: 0, transform: "translateY(-10px)" }}
                animate={{ opacity: 1, transform: "translateY(0)" }}
                className={clsx(
                  el.accent ? "md:col-span-2 row-span-2" : "md:col-span-1"
                )}
              >
                {linkExist ? (
                  <div className={clsx("rounded-2xl dark:bg-zinc-800 h-full")}>
                    <PrismicLink
                      field={el.project_link}
                      className="block h-full rounded-lg overflow-hidden relative transition-transform translate-y-0 hover:-translate-y-1 shadow-xl "
                    >
                      <PrismicNextImage
                        field={el.project_thumb}
                        className="h-full"
                        alt=""
                      />
                      <h3
                        className={clsx(
                          "p-4 text-l font-black absolute inset-0 top-auto z-10 text-zinc-800 bg-zinc-50/50",
                          el.accent ? "md:p-8 md:text-3xl" : "md:text-xl"
                        )}
                      >
                        {el.project_title}
                      </h3>
                    </PrismicLink>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={"h-full flex flex-col justify-end"}
                  >
                    <h3 className="p-4 text-l md:text-xl font-bold text-right">
                      {el.project_title}
                    </h3>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
