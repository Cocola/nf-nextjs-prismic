import Script from "next/script"

export const Footer = () => {
  return (
    <footer className="px-6 py-2 md:py-4">
      <div className="mx-auto w-full max-w-6xl">
        <div id="wcb" className="carbonbadge wcb-d"></div>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" />
      </div>
    </footer>
  )
}
