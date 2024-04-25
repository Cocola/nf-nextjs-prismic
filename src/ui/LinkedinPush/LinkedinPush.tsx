import { createClient } from "@/prismicio"
import { PrismicText } from "@prismicio/react"
import Link from "next/link"
interface LinkedinPushProps {
  lang: string
}
export default async function LinkedinPush({ lang }: LinkedinPushProps) {
  const client = createClient()
  const push = await client.getSingle("linkedin_push", { lang: lang })

  return (
    <section>
      <div
        className={
          "mx-auto w-full max-w-screen-xl p-4 md:p-8 md:pb-20 relative z-10"
        }
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-center">
          {push.data.title}
        </h2>
        <div className="flex justify-center">
          <Link
            href={"https://www.linkedin.com/in/nicolas-fiascaro/"}
            target="_blank"
            className="group relative inline-block p-2 px-9 font-semibold before:absolute before:-inset-0 before:bg-primary-light before:rounded text-zinc-800 before:transition-transform before:-z-10 focus:before:scale-105 hover:before:scale-105 focus:outline-offset-8 "
          >
            {push.data.label}
            <span className="absolute transition-transform opacity-0 right-0 top-1/2 -translate-y-1/2 -translate-x-6 group-hover:-translate-x-2 group-hover:opacity-100 group-focus:-translate-x-1 group-focus:opacity-100">
              <svg
                className="w-[1em] h-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
