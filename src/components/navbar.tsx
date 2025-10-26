import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import { ThemeSwitch } from "@/components/theme-switch"
import { LanguageSwitch } from "@/components/language-switch"
import { useTranslation, type TranslationKeys } from "@/hooks/useI18n"
import {
  BatteryIcon,
  HomeIcon,
  ChipIcon,
  AwardIcon,
  WarrantyIcon,
  DownloadIcon,
  FileIcon,
  WrenchIcon,
  AboutIcon,
  InverterIcon,
} from "@/components/icons"
import { siteConfig } from "@/config/site"


// Type for dropdown items
interface DropdownItem {
  key: string
  label: TranslationKeys
  description: TranslationKeys
  href: string
  icon: string
}

// SubMenu component for dropdown items
const SubMenuLink = ({ item }: { item: DropdownItem }) => {
  const { t } = useTranslation()

  // Icons mapping wrapped in useMemo to prevent re-creation
  const icons = useMemo(
    () => ({
      battery: <BatteryIcon className="text-foreground" fill="currentColor" size={56} />,
      inverter: <InverterIcon className="text-foreground" fill="currentColor" size={48} />,
      warranty: <WarrantyIcon className="text-foreground" fill="currentColor" size={52} />,
      robot: <WarrantyIcon className="text-foreground" fill="currentColor" size={52} />,
      home: <HomeIcon className="text-foreground" fill="currentColor" size={52} />,
      wrench: <WrenchIcon className="text-foreground" fill="currentColor" size={52} />,
      about: <AboutIcon className="text-foreground" fill="currentColor" size={52} />,
      chip: <ChipIcon className="text-foreground" fill="currentColor" size={52} />,
      award: <AwardIcon className="text-foreground" fill="currentColor" size={52} />,
      download: <DownloadIcon className="text-foreground" fill="currentColor" size={40} />,
      file: <FileIcon className="text-foreground" fill="currentColor" size={52} />,
    }),
    []
  )

  return (
    <a
      className="flex select-none flex-row gap-5 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
      href={item.href}
    >
      <div className="text-foreground mt-1">
        {icons[item.icon as keyof typeof icons]}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium">{t(item.label)}</div>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {t(item.description)}
        </p>
      </div>
    </a>
  )
}

export const Navbar = () => {
  const { t } = useTranslation()

  // Icons mapping wrapped in useMemo to prevent re-creation
  const icons = useMemo(
    () => ({
      battery: <BatteryIcon className="text-foreground" fill="currentColor" size={24} />,
      warranty: <WarrantyIcon className="text-foreground" fill="currentColor" size={24} />,
      robot: <WarrantyIcon className="text-foreground" fill="currentColor" size={24} />,
      home: <HomeIcon className="text-foreground" fill="currentColor" size={24} />,
      wrench: <WrenchIcon className="text-foreground" fill="currentColor" size={24} />,
      chip: <ChipIcon className="text-foreground" fill="currentColor" size={24} />,
      about: <AboutIcon className="text-foreground" fill="currentColor" size={24} />,
      award: <AwardIcon className="text-foreground" fill="currentColor" size={24} />,
      download: <DownloadIcon className="text-foreground" fill="currentColor" size={24} />,
      file: <FileIcon className="text-foreground" fill="currentColor" size={24} />,
    }),
    []
  )

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md">
      <div className="w-full max-w-[1600px] mx-auto py-4 sm:py-5 lg:py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between px-6 lg:px-8">
          {/* Left: Logo */}
          <a href="/" className="flex items-center shrink-0">
            <span className="font-sans-ui text-xl font-semibold">Anas AlGhannam</span>
          </a>

          {/* Center: Navigation Menu */}
          <div className="flex items-center justify-center flex-1 mx-8">
            <NavigationMenu>
              <NavigationMenuList>
                {siteConfig.navItems.map((item, index) => {
                  if (!item.label) return null

                  // Dropdown items
                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <NavigationMenuItem key={`nav-${index}`}>
                        <NavigationMenuTrigger className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-transparent px-5 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {t(item.label as TranslationKeys)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[320px] p-3">
                            {item.dropdownItems.map((dropdownItem) => (
                              <NavigationMenuLink asChild key={dropdownItem.key}>
                                <SubMenuLink item={dropdownItem} />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  }

                  // Regular link
                  return (
                    <NavigationMenuItem key={`nav-${index}`}>
                      <NavigationMenuLink
                        href={item.href}
                        className="group inline-flex h-12 w-max items-center justify-center rounded-lg bg-transparent px-5 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {t(item.label as TranslationKeys)}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </div>

        {/* Tablet Navigation (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center justify-between px-5">
          {/* Left: Logo */}
          <a href="/" className="flex items-center shrink-0">
            <span className="font-sans-ui text-lg font-semibold"> {t("learnMore")}</span>
          </a>

          {/* Center: Compact Navigation */}
          <div className="flex items-center gap-2 mx-4">
            <NavigationMenu>
              <NavigationMenuList>
                {siteConfig.navItems.map((item, index) => {
                  if (!item.label) return null

                  if (item.hasDropdown && item.dropdownItems) {
                    return (
                      <NavigationMenuItem key={`nav-md-${index}`}>
                        <NavigationMenuTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                          {t(item.label as TranslationKeys)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[280px] p-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <NavigationMenuLink asChild key={dropdownItem.key}>
                                <SubMenuLink item={dropdownItem} />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  }

                  return (
                    <NavigationMenuItem key={`nav-md-${index}`}>
                      <NavigationMenuLink
                        href={item.href}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {t(item.label as TranslationKeys)}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Compact Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between px-4 sm:px-5">
          {/* Left: Logo */}
          <a href="/" className="flex items-center">
            <span className="font-sans-ui text-lg font-semibold">Anas AlGhannam</span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <LanguageSwitch />
              <ThemeSwitch />
            </div>

            {/* Mobile Menu Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="lg" className="md:hidden h-11 w-11">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="overflow-y-auto">
                <div className="flex flex-col gap-6 py-6">
                  {/* Navigation Links */}
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-5">
                    {siteConfig.navItems.map((item, index) => {
                      if (!item.label) return null

                      // Dropdown items
                      if (item.hasDropdown && item.dropdownItems) {
                        return (
                          <AccordionItem key={`mobile-${index}`} value={item.label as string} className="border-b-0">
                            <AccordionTrigger className="py-3 text-lg font-semibold hover:no-underline">
                              {t(item.label as TranslationKeys)}
                            </AccordionTrigger>
                            <AccordionContent className="mt-3">
                              {item.dropdownItems.map((subItem) => (
                                <a
                                  key={subItem.key}
                                  href={subItem.href}
                                  className="flex items-start gap-4 rounded-lg p-4 hover:bg-accent transition-colors"
                                >
                                  <div className="mt-1">
                                    {icons[subItem.icon as keyof typeof icons]}
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <span className="text-base font-medium">{t(subItem.label)}</span>
                                    <span className="text-sm text-muted-foreground">
                                      {t(subItem.description)}
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      }

                      // Regular link
                      return (
                        <a
                          key={`mobile-${index}`}
                          href={item.href}
                          className="py-3 text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {t(item.label as TranslationKeys)}
                        </a>
                      )
                    })}
                  </Accordion>

                  {/* Mobile Controls */}
                  <div className="sm:hidden flex flex-col gap-4 pt-5 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium">{t("theme" as TranslationKeys)}</span>
                      <ThemeSwitch />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium">{t("language" as TranslationKeys)}</span>
                      <LanguageSwitch />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}