import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/hooks/useI18n"
import { siteConfig } from "@/config/site"
import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon, YoutubeIcon } from "@/components/icons"
import { Phone, MapPin, Info } from "lucide-react"

// Logo component
const FooterLogo = () => {
  return (
    <>
      <img
        src="/logo_light.png"
        alt="ROYPOW Logo"
        className="h-10 w-auto dark:hidden"
      />
      <img
        src="/logo_dark.png"
        alt="ROYPOW Logo"
        className="h-10 w-auto hidden dark:block"
      />
    </>
  )
}

export const Footer = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  // Extract footer sections from siteConfig
  const footerSections = siteConfig.navItems
    .filter(item => item.label && item.hasDropdown && item.dropdownItems)
    .map(item => ({
      title: t(item.label as string),
      links: item.dropdownItems?.map(subItem => ({
        text: t(subItem.label as string),
        url: subItem.href
      })) || []
    }))

  useEffect(() => {
    const currentFooter = footerRef.current // Capture ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (currentFooter) {
      observer.observe(currentFooter)
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter) // Use captured value
      }
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`border-t border-divider bg-background/60 backdrop-blur-md transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-3">
            <a href="/" className="inline-block mb-4">
              <FooterLogo />
            </a>

            <div className="space-y-4">
              {/* About Section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">{t("aboutUs")}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("roypowTechnology")} - {t("aboutUsText1")}
                </p>
              </div>

              {/* Phone Number */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">{t("contactUs")}</h3>
                </div>
                <a
                  href="tel:+9647504445598"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +964 750 444 5598
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">{t("whereToFindUs")}</h3>
                </div>
                <address className="text-sm text-muted-foreground not-italic">
                  Erbil, Kurdistan Region<br />
                  Iraq
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.links.Tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Navigation Sections */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-sm font-bold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-divider pt-8 text-sm">
          <p className="text-muted-foreground text-center sm:text-left">
            © 2025 ROYPOW Technology Co., Ltd. {t("allRightsReserved")}
          </p>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors underline"
              >
                {t("privacy")}
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors underline"
              >
                {t("terms")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}