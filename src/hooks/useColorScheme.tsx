import { useEffect, useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { useLocalStorage } from "react-use"

const COLOR_SCHEME = "colorScheme"
export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  )

  const [isDark, setIsDark] = useLocalStorage(COLOR_SCHEME)

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  )

  useEffect(() => {
    const colorSchemeRoot = document.querySelector("#colorScheme-root")
    if (value) {
      colorSchemeRoot !== null && colorSchemeRoot.classList.add("dark")
    } else {
      colorSchemeRoot !== null && colorSchemeRoot.classList.remove("dark")
    }
  }, [value])

  return {
    isDark: value,
    setIsDark,
  }
}
