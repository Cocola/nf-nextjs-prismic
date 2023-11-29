import { FilledLinkToMediaField } from "@prismicio/client"
import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `SimpleVideo`.
 */
export type SimpleVideoProps = SliceComponentProps<Content.SimpleVideoSlice>

/**
 * Component for "SimpleVideo" Slices.
 */
const SimpleVideo = ({ slice }: SimpleVideoProps): JSX.Element => {
  const mediaDatas = slice.primary.source as FilledLinkToMediaField
  const mediaType = `video/${mediaDatas.name.split(".").pop()}`

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-16 md:py-32"
    >
      <video
        autoPlay
        loop
        muted
        controls={false}
        className="relative w-full h-1/2 -translate-x-1/2 left-1/2 rounded-2xl max-w-screen-lg transition-transform scale-1 hover:scale-105 shadow-xl hover:shadow-2xl"
      >
        <source src={mediaDatas.url} type={mediaType} />
        <p>
          html5 video are not supported
          .
          <a href={mediaDatas.url} download>
            Download
          </a>
        </p>
      </video>
    </section>
  )
}

export default SimpleVideo
