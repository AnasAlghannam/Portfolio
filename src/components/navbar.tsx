import { Home, Folder, Briefcase, Edit, Mail } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { ThemeSwitch } from "@/components/theme-switch"
import { useTranslation} from "@/hooks/useI18n"
import { siteConfig } from "@/config/site"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

// Icons mapping
const iconMap = {
  home: Home,
  folder: Folder,
  briefcase: Briefcase,
  edit: Edit,
  mail: Mail,
}

export const Navbar = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-fit mx-auto">
          <motion.div
            animate={{ y: scrolled ? -2 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full border border-border/40 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-linear-to-r from-lime-500/10 via-gray-500/10 to-lime-500/10 pointer-events-none" />

            <div className="relative flex items-center justify-between px-6 py-3">
            {/* Navigation Icons */}
            <div className="flex items-center gap-2">
              {siteConfig.navItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={item.href}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-transparent transition-all duration-200 hover:bg-linear-to-r hover:from-lime-500/20 hover:via-gray-500/20 hover:to-lime-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
                          aria-label={t(item.label)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" sideOffset={8}>
                        {t(item.label)}
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                )
              })}
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-1">
              <ThemeSwitch />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
