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
  Tiktok: string
  twitter: string
  docs: string
  linkedin: string
  youtube: string
  facebook: string
  instagram: string
  apple: string
  android: string
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
  name: "ROYPOW® Official - Professional Battery Manufacturers and Suppliers",
  description: "Advanced Battery Technology Solutions",
  icon: "/favicon.ico",
  navItems: [
    {
      label: "products" as TranslationKeys,
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        {
          key: "battery-tech",
          label: "batteryTechnology" as TranslationKeys,
          href: "/batteries",
          description: "batteryTechnologyDesc" as TranslationKeys,
          icon: "battery",
        },
        {
          key: "inverter-tech",
          label: "inverterTechnology" as TranslationKeys,
          href: "/inverters",
          description: "inverterTechnologyDesc" as TranslationKeys,
          icon: "inverter",
        },
      ],
    },
    {
      label: "info" as TranslationKeys,
      href: "/info",
      hasDropdown: true,
      dropdownItems: [
        {
          key: "warranty",
          label: "warranty" as TranslationKeys,
          href: "/info/warranty",
          description: "warrantyDesc" as TranslationKeys,
          icon: "warranty",
        },
        {
          key: "documentation",
          label: "documentation" as TranslationKeys,
          href: "/info/docs",
          description: "documentationDesc" as TranslationKeys,
          icon: "file",
        },
        {
          key: "download",
          label: "download" as TranslationKeys,
          href: "/download",
          description: "downloadsDesc" as TranslationKeys,
          icon: "download",
        },
      ],
    },
    {
      label: "about" as TranslationKeys,
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        {
          key: "about-us",
          label: "aboutUs" as TranslationKeys,
          href: "/about",
          description: "aboutUsDesc" as TranslationKeys,
          icon: "about",
        },
        {
          key: "awards",
          label: "awards" as TranslationKeys,
          href: "/awards",
          description: "awardsDesc" as TranslationKeys,
          icon: "award",
        },
      ],
    },
    {
      label: "news" as TranslationKeys,
      href: "/news",
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
    Tiktok: "https://www.tiktok.com/@roypowiraq",
    twitter: "https://x.com/RoyPow_Lithium",
    docs: "https://docs.roypow.com",
    linkedin: "https://www.linkedin.com/company/roypow-iraq/",
    youtube: "https://www.youtube.com/@roypowlithium3063",
    facebook: "https://www.facebook.com/profile.php?id=61577350434100",
    instagram: "https://www.instagram.com/roypowiq/",
    apple: "https://apps.apple.com/us/app/roypow/id6467867485",
    android: "https://play.google.com/store/apps/details?id=com.roypow.roypower",
  },
}