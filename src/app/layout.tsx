"use client"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"
import { AnimatePresence, Spring, motion } from "framer-motion"
import { usePathname } from "next/navigation"

import "./ui/globals.css"
import { dmsans } from "./ui/fonts"
import Header from "./ui/Header/Header"
import { Footer } from "./ui/Footer/Footer"

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 })
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en" id="colorScheme-root">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="favicon_light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="favicon_dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${dmsans.className} antialiased min-h-screen bg-zinc-100  text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300`}
      >
        <div className="min-h-screen flex flex-col gap-3 justify-between bg-transparent dark:bg-[radial-gradient(#111_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <Header />
          <main className="mt-24">
            <AnimatePresence onExitComplete={handleExitComplete}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
