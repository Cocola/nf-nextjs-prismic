"use client"
import { PrismicPreview } from "@prismicio/next"
import { repositoryName } from "@/prismicio"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

import "../ui/globals.css"
import { dmsans } from "../ui/fonts"
import { Footer } from "../ui/Footer/Footer"

const GA = "G-24PVJWPTQ5"
const siteId = 3814665
const hotjarVersion = 6

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
          href="https://images.prismic.io/nicolasfiascaro/3d2fe9b1-f0b5-48b2-9d2b-fbc2cec56105_favicon_light.png?auto=compress,format"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://images.prismic.io/nicolasfiascaro/50c70ab0-c986-4d04-aa9d-6ce1e046952c_favicon_dark.png?auto=compress,format"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${dmsans.className} antialiased min-h-screen bg-zinc-100  text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300`}
      >
        <div className="min-h-screen flex flex-col gap-3 justify-between bg-transparent dark:bg-[radial-gradient(#111_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="mt-24">
            <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
        <PrismicPreview repositoryName={repositoryName} />
        <SpeedInsights />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
            </Script>
            <Script id="hotjar" strategy="afterInteractive">
              {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${siteId},hjsv:${hotjarVersion}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
