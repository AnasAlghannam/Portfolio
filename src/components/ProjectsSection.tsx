import { ArrowUpRight, Code2 } from "lucide-react"
import { useTranslation, type TranslationKeys } from "@/hooks/useI18n"
import { motion, type Variants } from "framer-motion"

interface Project {
  titleKey: TranslationKeys
  descriptionKey: TranslationKeys
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    titleKey: "proj1Title",
    descriptionKey: "proj1Desc",
    technologies: ["React", "TypeScript", "Vite", "Shadcn UI"],
    link: "https://roypow.com",
  },
  {
    titleKey: "proj2Title",
    descriptionKey: "proj2Desc",
    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
  },
  {
    titleKey: "proj3Title",
    descriptionKey: "proj3Desc",
    technologies: ["Python", "TensorFlow", "OpenAI Gym", "Reinforcement Learning"],
  },
]

export default function ProjectsSection() {
  const { t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="projects" className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold mb-12"
      >
        <span className="text-foreground">{t("featuredProjects")} </span>
        <span className="bg-linear-to-r from-lime-600 via-gray-700 to-lime-600 bg-clip-text text-transparent">
          {t("projects")}
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="group relative rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-lime-500/30 hover:shadow-lg hover:shadow-lime-500/5"
          >
            {/* Gradient accent on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-lime-500/0 via-gray-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:via-gray-500/5 group-hover:to-lime-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />

            <div className="relative flex flex-col h-full">
              {/* Icon and Link */}
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-lime-500/10 via-gray-500/10 to-lime-500/10">
                  <Code2 className="h-6 w-6 text-lime-600" />
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-lime-500/20 via-gray-500/20 to-lime-500/20 transition-all duration-300"
                    aria-label={`Visit ${t(project.titleKey)}`}
                  >
                    <ArrowUpRight className="h-5 w-5 text-lime-600" />
                  </motion.a>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                {t(project.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {t(project.descriptionKey)}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-linear-to-r from-lime-500/10 via-gray-500/10 to-lime-500/10 text-lime-600 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}