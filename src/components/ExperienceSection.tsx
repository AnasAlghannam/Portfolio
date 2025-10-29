import { ArrowUpRight } from "lucide-react"
import { useTranslation, type TranslationKeys } from "@/hooks/useI18n"
import { motion, type Variants } from "framer-motion"

interface ExperienceItem {
  companyKey: TranslationKeys
  roleKey: TranslationKeys
  periodKey: TranslationKeys
  descriptionKeys: TranslationKeys[]
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    companyKey: "exp1Company",
    roleKey: "exp1Role",
    periodKey: "exp1Period",
    descriptionKeys: ["exp1Desc1", "exp1Desc2"],
    link: "https://roypow.com",
  },
  {
    companyKey: "exp2Company",
    roleKey: "exp2Role",
    periodKey: "exp2Period",
    descriptionKeys: ["exp2Desc1", "exp2Desc2"],
  },
  {
    companyKey: "exp3Company",
    roleKey: "exp3Role",
    periodKey: "exp3Period",
    descriptionKeys: ["exp3Desc1", "exp3Desc2"],
  },
  {
    companyKey: "exp4Company",
    roleKey: "exp4Role",
    periodKey: "exp4Period",
    descriptionKeys: ["exp4Desc1", "exp4Desc2"],
  },
]

export const ExperienceSection = () => {
  const { t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="experience" className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold mb-12"
      >
        <span className="text-foreground">{t("experienceYears")} </span>
        <span className="bg-linear-to-r from-lime-600 via-gray-700 to-lime-600 bg-clip-text text-transparent">
          {t("developmentExperience")}
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-6"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-lime-500/30 hover:shadow-lg hover:shadow-lime-500/5"
          >
            {/* Gradient accent on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-lime-500/0 via-gray-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:via-gray-500/5 group-hover:to-lime-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {t(experience.companyKey)}
                  </h3>
                  {experience.link && (
                    <motion.a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      whileTap={{ scale: 0.9 }}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-lime-500/20 via-gray-500/20 to-lime-500/20 transition-all duration-300 shrink-0"
                      aria-label={`Visit ${t(experience.companyKey)}`}
                    >
                      <ArrowUpRight className="h-5 w-5 text-lime-600" />
                    </motion.a>
                  )}
                </div>

                <p className="text-base font-medium text-muted-foreground mb-3">
                  {t(experience.roleKey)}
                </p>

                <ul className="space-y-2 mb-4">
                  {experience.descriptionKeys.map((descKey, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      {t(descKey)}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground/60">{t(experience.periodKey)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}