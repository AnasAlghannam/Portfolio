import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, USFlag, SaudiFlag } from "@/components/icons"
import { useTranslation } from "@/hooks/useI18n" // Use new hook
import type { Language } from "@/hooks/useI18n"

interface LanguageSwitchProps {
  className?: string
}

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
  const { language, changeLanguage } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang)
    document.documentElement.lang = lang
  }

  const languages = {
    en: { label: 'English', flag: <USFlag size={20} />, code: 'EN' },
    ar: { label: 'العربية', flag: <SaudiFlag size={20} />, code: 'AR' },
  }

  if (!mounted) {
    return (
      <div className={`min-w-20 h-9 opacity-50 ${className}`}>
        <Button size="sm" variant="ghost" className="min-w-20 h-9 px-3" disabled>
          <span className="text-sm">EN</span>
        </Button>
      </div>
    )
  }

  const currentLang = language as Language

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost" className={`min-w-20 h-9 px-3 gap-1 ${className}`}>
          {languages[currentLang].flag}
          <span className="text-sm font-medium">{languages[currentLang].code}</span>
          <ChevronDownIcon className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-36">
        {Object.entries(languages).map(([key, lang]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as Language)}
            className={currentLang === key ? 'bg-accent' : ''}
          >
            {lang.flag}
            <span className="ml-2 text-sm">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}