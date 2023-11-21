import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"

import "./ui/globals.css"
import { dmsans } from "./ui/fonts"
import { Header } from "./ui/Header/Header"
import { Footer } from "./ui/Footer/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id="colorScheme-root">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>
      <body
        className={`${dmsans.className} antialiased min-h-screen bg-zinc-100  text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300`}
      >
        <div className="min-h-screen flex flex-col gap-3 justify-between bg-transparent dark:bg-[radial-gradient(#111_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
