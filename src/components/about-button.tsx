import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/useI18n"

export default function LearnMoreButton() {
  const { t } = useTranslation()

  return (
    <Button
      asChild
      size="lg"
      className="rounded-full px-8 py-6 text-base font-semibold 
                 bg-gradient-to-r from-[#34D399] to-[#3B82F6] 
                 text-white hover:opacity-90 transition-opacity shadow-lg"
    >
      <a href="/about">
        {t("learnMore")}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </Button>
  )
}