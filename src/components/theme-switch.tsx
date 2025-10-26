import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { SunFilledIcon, MoonFilledIcon } from "./icons"

export interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [iconSize, setIconSize] = useState(22)
  const containerRef = useRef<HTMLButtonElement | HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Adjust icon size based on container dimensions
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const size = Math.min(rect.width, rect.height) * 0.8 // scale at 80%
        setIconSize(Math.max(size, 16)) // ensure it doesn’t get too tiny
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  if (!mounted) {
    return (
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={`w-8 h-8 opacity-0 ${className}`}
      >
        <SunFilledIcon size={iconSize} />
      </div>
    )
  }

  return (
    <button
      ref={containerRef as React.RefObject<HTMLButtonElement>}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`p-1 transition-opacity hover:opacity-80 cursor-pointer ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <SunFilledIcon size={iconSize} />
      ) : (
        <MoonFilledIcon size={iconSize} />
      )}
    </button>
  )
}
