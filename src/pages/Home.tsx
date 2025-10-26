import { useTranslation, type TranslationKeys } from "@/hooks/useI18n"
import LearnMoreButton from "@/components/about-button"
import { useScrollAnimation, animationPresets } from "@/hooks/useScrollAnimation"

export default function Home() {
  const { t, isArabic } = useTranslation()

  // Animation hooks for each section
  const heroHeader = useScrollAnimation({ threshold: 0.25 })
  const heroImage = useScrollAnimation({ threshold: 0.25, delay: 200 })
  const aboutSection = useScrollAnimation({ threshold: 0.25 })
  const usesSection = useScrollAnimation({ threshold: 0.3 })
  const globalSection = useScrollAnimation({ threshold: 0.3 })

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 sm:py-20 md:py-32">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div
            ref={heroHeader.ref}
            className={`mb-16 sm:mb-24 md:mb-32 flex flex-col items-center gap-6 text-center transition-all duration-700 ease-out ${
              heroHeader.isVisible
                ? animationPresets.fadeInUp.animate
                : animationPresets.fadeInUp.initial
            }`}
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-full px-2 sm:px-4 md:px-6 leading-tight sm:leading-tight md:leading-tight lg:leading-relaxed bg-gradient-to-r from-[#34D399] to-[#3B82F6] bg-clip-text text-transparent break-words"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {t("highEfficiencyBatteries" as TranslationKeys)}
            </h1>
          </div>

          <div
            ref={heroImage.ref}
            className={`relative w-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out ${
              heroImage.isVisible
                ? animationPresets.scaleUp.animate
                : animationPresets.scaleUp.initial
            }`}
          >
            <img
              src="/aboutus.png"
              alt="ROYPOW Technology"
              className="w-full h-auto rounded-xl object-contain shadow-2xl max-h-[600px] md:max-h-[700px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-xl"></div>

            {/* Decorative background circles */}
            <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 opacity-40 bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] hidden sm:block"></div>
            <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 opacity-40 bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-20 bg-accent/50">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div
            ref={aboutSection.ref}
            className={`relative w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-xl transition-all duration-700 ease-out ${
              aboutSection.isVisible
                ? animationPresets.fadeIn.animate
                : animationPresets.fadeIn.initial
            }`}
          >
            <img
              src="/aboutus.png"
              alt={t("aboutUsTitle" as TranslationKeys)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50 flex items-center">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full px-4 sm:px-8 md:px-12 lg:px-16">
                <div className={`space-y-4 sm:space-y-6 text-white ${isArabic ? "lg:col-start-2" : ""}`}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight">
                      {t("aboutUsTitle" as TranslationKeys)}
                    </h2>
                    <div className={`w-16 sm:w-20 h-1 bg-gradient-to-r from-[#34D399] to-[#3B82F6] mb-4 sm:mb-6 ${isArabic ? "ml-auto" : ""}`}></div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md">
                    <span className="font-semibold">{t("roypowTechnology" as TranslationKeys)}</span>{" "}
                    {t("aboutUsText1" as TranslationKeys)}
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md">
                    {t("aboutUsText2" as TranslationKeys)}
                  </p>

                  <div className="pt-2 sm:pt-4">
                    <LearnMoreButton />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <div
        ref={usesSection.ref}
        className={`w-full transition-all duration-700 ease-out ${
          usesSection.isVisible
            ? animationPresets.slideUp.animate
            : animationPresets.slideUp.initial
        }`}
      >
        <img
          src="/application-scenarios.jpg"
          alt="ROYPOW various use-cases"
          className="w-full h-auto object-contain p-4 sm:p-8 md:p-12 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/15 dark:via-transparent dark:to-secondary/15 border border-divider/50 dark:border-divider/30"
        />
      </div>

      {/* Global Presence Section */}
      <div
        ref={globalSection.ref}
        className={`w-full transition-all duration-700 ease-out ${
          globalSection.isVisible
            ? animationPresets.slideUp.animate
            : animationPresets.slideUp.initial
        }`}
      >
        <img
          src="/global.jpg"
          alt="ROYPOW Global Presence"
          className="w-full h-auto object-contain p-4 sm:p-8 md:p-12 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/15 dark:via-transparent dark:to-secondary/15 border border-divider/50 dark:border-divider/30"
        />
      </div>
    </>
  )
}