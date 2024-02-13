"use client"
import clsx from "clsx"
import { useState, useEffect } from "react"

import { BiMoon, BiSun } from "react-icons/bi"

type Theme = "dark" | "light"

declare global {
  interface Window {
    __theme: Theme
    __onThemeChange: (theme: Theme) => void
    __setPreferredTheme: (theme: Theme) => void
  }
}

const SetTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light")

  const isDark = theme === "dark"

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  return (
    <div aria-label="Dark mode toggle" className="h-5">
      <button
        className={clsx(
          "relative block h-5 w-12 rounded-[3rem] focus-within:ring-3 ring-offset-3 before:transition-transform before:absolute before:-translate-y-1/2 before:z-20 before:-left-1 before:top-1/2 before:w-6 before:h-6 before:rounded-full bg-zinc-300 dark:bg-zinc-700 before:bg-zinc-500 dark:before:bg-zinc-300",
          isDark ? "before:translate-x-8" : "before:translate-x-0"
        )}
        onClick={toggleTheme}
      >
        <span className="sr-only">
          Switch to theme : {isDark ? "Light" : "Dark"}
        </span>
        {isDark ? (
          <BiMoon className="absolute z-10 left-1 -translate-y-1/2 top-1/2 fill-amber-400" />
        ) : (
          <BiSun className="absolute z-10 right-1 -translate-y-1/2 top-1/2 " />
        )}
      </button>
    </div>
  )
}

export default SetTheme
