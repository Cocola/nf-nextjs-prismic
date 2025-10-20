import type { ReactNode } from "react"
import { PrismicPreview } from "@prismicio/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

import { repositoryName } from "@/prismicio"
import { getTheme } from "@/lib/getTheme"
import "@/ui/globals.css"
import { dmsans } from "@/ui/fonts"

import { ClientLayout } from "./client-layout"

const GA = "G-24PVJWPTQ5"
const siteId = 3814665
const hotjarVersion = 6

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" id="colorScheme-root" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
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
        <ClientLayout>{children}</ClientLayout>
        <PrismicPreview repositoryName={repositoryName} />
        <SpeedInsights />
        <Script id="moustacheai" strategy="afterInteractive">
          {`(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.src = "https://chat.moustacheai.com/chat.mjs";
    v.type = "text/javascript";
    v.async = true;
    v.onload = function() {
      window.initMoustacheAI({
        chatbot: '8bcf49d7-e851-4322-8327-9c345578937b',
        userIdentifier: 'yourcustomer@yourcompany.com',
      })
    }
    s.parentNode.insertBefore(v, s);
  })(document, 'script');`}
        </Script>
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
