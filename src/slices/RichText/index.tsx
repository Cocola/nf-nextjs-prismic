import type { Content } from "@prismicio/client"
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
  PrismicLink,
} from "@prismicio/react"
import styles from "./index.module.css"

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>
    }
  },
  heading1: ({ children }) => (
    <h1 className="text-2xl font-bold mb-7 last:mb-0">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-7 last:mb-0">{children}</h2>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
}

type RichTextProps = SliceComponentProps<Content.RichTextSlice>

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className="px-6 py-16 md:py-32">
      <div className={"mx-auto w-full max-w-xl"}>
        <div className={`${styles.animate}`}>
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
        </div>
      </div>
    </section>
  )
}
