"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

import AnimationLayer from "@/ui/AnimationLayer/AnimationLayer"
import { Footer } from "@/ui/Footer/Footer"
import { Logo } from "@/ui/Header/Logo"

interface ClientLayoutProps {
  children: ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [hasFirstLoad, setHasFirstLoad] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("firstLoad") === null) {
      setHasFirstLoad(true)
      sessionStorage.setItem("firstLoad", "true")
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col gap-3 justify-between bg-transparent dark:bg-[radial-gradient(#111_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="mt-10 md:mt-24">
          <div className="md:hidden max-md:ml-6 max-md:mb-3">
            <Logo />
          </div>
          {children}
        </div>
        <Footer />
      </motion.div>
      {hasFirstLoad && <AnimationLayer />}
    </div>
  )
}
