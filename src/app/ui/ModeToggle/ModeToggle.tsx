"use client"
import clsx from "clsx"
import { useState, useEffect } from "react"
import { useColorScheme } from "../../../hooks/useColorScheme"
import { BiMoon, BiSun } from "react-icons/bi"

export const ModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme()
  const [isClient, setIsClient] = useState(false)

  const handleDarkToggle = () => {
    isDark ? setIsDark(false) : setIsDark(true)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div aria-label="Dark mode toggle" className="h-5">
      <button
        className={clsx(
          "relative block h-5 w-12 rounded-[3rem] focus-within:ring-3 ring-offset-3 before:transition-transform before:absolute before:-translate-y-1/2 before:z-20 before:-left-1 before:top-1/2 before:w-6 before:h-6 before:rounded-full bg-zinc-300 dark:bg-zinc-700 before:bg-zinc-500 dark:before:bg-zinc-300",
          isDark ? "before:translate-x-8" : "before:translate-x-0"
        )}
        onClick={() => handleDarkToggle()}
      >
        <span className="sr-only">
          Switch to theme : {isClient && isDark ? "Light" : "Dark"}
        </span>
        <BiMoon className="absolute z-10 left-1 -translate-y-1/2 top-1/2 fill-amber-400" />
        <BiSun className="absolute z-10 right-1 -translate-y-1/2 top-1/2 " />
      </button>
    </div>
  )
}
