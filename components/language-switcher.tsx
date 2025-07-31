"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { LanguageAwareText } from "./language-aware-text"

const languages = {
  en: { name: "English", flag: "🇺🇸" },
  es: { name: "Español", flag: "🇪🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  zh: { name: "中文", flag: "🇨🇳" },
  km: { name: "ខ្មែរ", flag: "🇰🇭" },
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 bg-transparent">
          <Globe className="h-4 w-4 mr-2" />
          <LanguageAwareText className="hidden sm:inline">
            {languages[language as keyof typeof languages].flag} {languages[language as keyof typeof languages].name}
          </LanguageAwareText>
          <span className="sm:hidden">{languages[language as keyof typeof languages].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as keyof typeof languages)}
            className={language === code ? "bg-accent" : ""}
          >
            <span className="mr-2">{lang.flag}</span>
            <LanguageAwareText>{lang.name}</LanguageAwareText>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
