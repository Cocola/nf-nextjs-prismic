"use client"
import dynamic from "next/dynamic"

export const ModeToggleDynamic = dynamic(
  () => import("../ModeToggle/ModeToggle"),
  {
    ssr: false,
    loading: () => <div className="w-9 h-9" />,
  }
)
