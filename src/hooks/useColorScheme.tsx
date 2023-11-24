import { useEffect, useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { useLocalStorage } from "react-use"

const COLOR_SCHEME = "darkMode"

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  )
  const [isDark, setIsDark] = useLocalStorage(COLOR_SCHEME, systemPrefersDark)

  useEffect(() => {
    const colorSchemeRoot = document.querySelector("#colorScheme-root")
    if (colorSchemeRoot) {
      if (isDark) {
        colorSchemeRoot.classList.add("dark")
      } else {
        colorSchemeRoot.classList.remove("dark")
      }
    }
  }, [isDark])

  return {
    isDark: isDark,
    setIsDark,
  }
}
