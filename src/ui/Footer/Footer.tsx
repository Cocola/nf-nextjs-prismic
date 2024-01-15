import Script from "next/script"

export const Footer = () => {
  return (
    <footer className="px-6 py-2 md:py-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="md:flex md:gap-2 md:justify-center">
          <p className="m-0 text-center">
            Design and develop by me with{" "}
            <a
              className="underline hover:no-underline"
              href="https://nextjs.org/"
              target="_blank"
            >
              NextJS
            </a>{" "}
            and{" "}
            <a
              className="underline hover:no-underline"
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
            <div className="font-bold text-center block">ENV DEV</div>
          )}
        </div>
      </div>
    </footer>
  )
}
