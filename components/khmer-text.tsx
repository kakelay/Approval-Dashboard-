"use client"

import type React from "react"
import { useLanguage } from "@/hooks/use-language"
import { cn } from "@/lib/utils"

interface KhmerTextProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function KhmerText({ children, className, as: Component = "span" }: KhmerTextProps) {
  const { language } = useLanguage()

  return <Component className={cn(language === "km" && "font-khmer", className)}>{children}</Component>
}
