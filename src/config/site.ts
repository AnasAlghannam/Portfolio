// config/site.ts
import type { TranslationKeys } from "@/hooks/useI18n"

interface DropdownItemConfig {
  key: string
  label: TranslationKeys
  description: TranslationKeys
  href: string
  icon: string
}

interface NavItem {
  label: TranslationKeys
  href: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItemConfig[]
}

interface NavMenuItemConfig {
  label: TranslationKeys
  href: string
}

interface Links {
  linkedin: string
  facebook: string
  instagram: string
}

interface SiteConfigType {
  name: string
  description: string
  icon: string
  navItems: NavItem[]
  navMenuItems: NavMenuItemConfig[]
  links: Links
}

export type SiteConfig = typeof siteConfig

export const siteConfig: SiteConfigType = {
  name: "Anas AlGhannam - Front-End Developer Portfolio",
  description: "Portfolio of Anas AlGhannam, a Front-End Web Developer specializing in modern web technologies.",
  icon: "/favicon.ico",
  navItems: [
    {
      label: "home" as TranslationKeys,
      href: "/",
    },
    {
      label: "products" as TranslationKeys,
      href: "/products",
    },
    {
      label: "support" as TranslationKeys,
      href: "/support",
    },
    {
      label: "about" as TranslationKeys,
      href: "/about",
    },
    {
      label: "news" as TranslationKeys,
      href: "/news",
    },
    {
      label: "blog" as TranslationKeys,
      href: "/blog",
    },
    {
      label: "contact" as TranslationKeys,
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "home" as TranslationKeys,
      href: "/",
    },
    {
      label: "products" as TranslationKeys,
      href: "/products",
    },
    {
      label: "support" as TranslationKeys,
      href: "/support",
    },
    {
      label: "about" as TranslationKeys,
      href: "/about",
    },
    {
      label: "news" as TranslationKeys,
      href: "/news",
    },
    {
      label: "blog" as TranslationKeys,
      href: "/blog",
    },
    {
      label: "contact" as TranslationKeys,
      href: "/contact",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/company/roypow-iraq/",
    instagram: "https://www.instagram.com/roypow/",
    facebook: "https://www.facebook.com/roypowiraq/",
  },
}