import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/useI18n"
import { motion } from "framer-motion"

export const ProfileCard = () => {
  const { t } = useTranslation()

  const socialLinks = [
    { href: "https://github.com/AnasAlghannam", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/AnasAlghannam", icon: Linkedin, label: "LinkedIn" },
    { href: "tel:+97450251058", icon: Phone, label: "Phone" },
    { href: "mailto:anas.alghannam00@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-24 w-full"
    >
      <div className="relative rounded-3xl border border-border/40 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
        {/* Gradient accent */}
        <div className="absolute inset-0 bg-linear-to-br from-lime-500/5 via-gray-500/5 to-lime-500/5 pointer-events-none" />

        <div className="relative p-8 flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-6 group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-lime-500 via-gray-500 to-lime-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 rounded-3xl overflow-hidden border-4 border-background"
            >
              <img
                src="/profilepic.jpeg"
                alt="Anas Alghannam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=Anas+Alghannam&size=400&background=84cc16&color=fff&bold=true`
                }}
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            <span className="bg-linear-to-r from-lime-600 via-gray-700 to-lime-600 bg-clip-text text-transparent">
              {t("profileName")}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base text-muted-foreground mb-2"
          >
            {t("profileTitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm text-muted-foreground/80 mb-4"
          >
            {t("profileSubtitle")}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          >
            <MapPin className="h-4 w-4" />
            <span>{t("profileLocation")}</span>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-6" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 transition-all duration-200 hover:bg-linear-to-r hover:from-lime-500/20 hover:via-gray-500/20 hover:to-lime-500/20"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
