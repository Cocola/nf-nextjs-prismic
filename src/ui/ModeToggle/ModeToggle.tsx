"use client"
import clsx from "clsx"
import { useState, useEffect } from "react"
import { useColorScheme } from "../../hooks/useColorScheme"
import { BiMoon, BiSun } from "react-icons/bi"
import { useMediaQuery } from "react-responsive"
import { useLocalStorage } from "react-use"

const COLOR_SCHEME = "darkMode"

export const ModeToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  )
  const [isDark, setIsDark] = useState(systemPrefersDark)
  console.log("🚀 ~ file: ModeToggle.tsx:16 ~ ModeToggle ~ isDark:", isDark)

  const [theme, setTheme, remove] = useLocalStorage(COLOR_SCHEME, isDark)
  console.log("🚀 ~ file: ModeToggle.tsx:22 ~ ModeToggle ~ theme:", theme)

  const [isClient, setIsClient] = useState(false)

  const handleDarkToggle = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const colorSchemeRoot = document.querySelector("#colorScheme-root")
    if (colorSchemeRoot) {
      if (localStorage.getItem(COLOR_SCHEME)) {
        setTheme(true)
        colorSchemeRoot.classList.add("dark")
      } else {
        setTheme(false)
        colorSchemeRoot.classList.remove("dark")
      }
    }
  }, [isDark, setTheme])

  if (!isClient) {
    return null
  }

  return (
    <div aria-label="Dark mode toggle" className="h-5">
      {isDark ? "dark" : "light"}
      {/* <button
        className={clsx(
          "relative block h-5 w-12 rounded-[3rem] focus-within:ring-3 ring-offset-3 before:transition-transform before:absolute before:-translate-y-1/2 before:z-20 before:-left-1 before:top-1/2 before:w-6 before:h-6 before:rounded-full bg-zinc-300 dark:bg-zinc-700 before:bg-zinc-500 dark:before:bg-zinc-300",
          isClient && isDark ? "before:translate-x-8" : "before:translate-x-0"
        )}
        onClick={() => handleDarkToggle()}
      >
        <span className="sr-only">
          Switch to theme : {isClient && isDark ? "Light" : "Dark"}
        </span>
        <BiMoon className="absolute z-10 left-1 -translate-y-1/2 top-1/2 fill-amber-400" />
        <BiSun className="absolute z-10 right-1 -translate-y-1/2 top-1/2 " />
      </button> */}
    </div>
  )
}
