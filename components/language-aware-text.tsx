"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

interface LanguageAwareTextProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function LanguageAwareText({ children, className, as: Component = "span" }: LanguageAwareTextProps) {
  const { language } = useLanguage()

  return (
    <Component
      className={cn(
        // Apply Khmer font when language is Khmer
        language === "km" && "font-khmer",
        // Apply Chinese font optimizations when language is Chinese
        language === "zh" && "font-sans",
        className,
      )}
      lang={language}
    >
      {children}
    </Component>
  )
}
