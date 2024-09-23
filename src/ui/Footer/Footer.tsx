import Script from "next/script"

export const Footer = () => {
  return (
    <footer className="mb-24 px-6 py-2 md:py-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-2 justify-center">
          <p className="m-0 text-center text-sm">
            Designed and developed by me with{" "}
            <a
              className="underline underline-offset-4 animate-underline hover:no-underline"
              href="https://nextjs.org/"
              target="_blank"
            >
              NextJS
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 animate-underline hover:no-underline"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind
            </a>
          </p>
          {process.env.NODE_ENV === "production" ? (
            <>
              <div id="wcb" className="carbonbadge wcb-d"></div>
              <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" />
            </>
          ) : (
            <div className="flex justify-center items-center">
              <div id="wcb" className="carbonbadge wcb-d"></div>
              <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" />
            </div>
            // <div className="font-bold text-center block">ENV DEV</div>
          )}
        </div>
      </div>
    </footer>
  )
}
