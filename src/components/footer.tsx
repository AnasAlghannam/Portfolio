import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useTranslation } from "@/hooks/useI18n"
import { motion } from "framer-motion"

export const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://github.com/AnasAlghannam", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/AnasAlghannam", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:anas.alghannam00@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/40 bg-background/60 backdrop-blur-md"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} {t("profileName")}. {t("builtWith")}{" "}
            <Heart className="inline-block h-3.5 w-3.5 text-lime-600" /> {t("using")}.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 transition-all duration-200 hover:bg-linear-to-r hover:from-lime-500/20 hover:via-gray-500/20 hover:to-lime-500/20"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
