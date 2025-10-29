import { ProfileCard } from "@/components/ProfileCard"
import { ExperienceSection } from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout: Profile left, Content right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Profile Card (sticky on desktop) */}
          <aside className="lg:col-span-4">
            <ProfileCard />
          </aside>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-16 sm:gap-20">
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </div>
    </motion.main>
  )
}
