"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation, animationPresets } from "@/hooks/useScrollAnimation"
import { useTranslation } from "@/hooks/useI18n"

export default function FaqSection() {
  const { t } = useTranslation()
  const anim = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 })
  const { fadeInUp } = animationPresets

  return (
<section
        ref={anim.ref}
        className={`container mx-auto px-6 py-24 transform ${fadeInUp.transition} ${
          anim.isVisible ? fadeInUp.animate : fadeInUp.initial
        }`}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-6">
            {t("faq")}
          </h1>
        </div>
        <div className="max-w-6xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 p-8"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold hover:text-primary hover:no-underline transition-colors">
                {t("batteryFaq1Question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {t("batteryFaq1Answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold hover:text-primary hover:no-underline transition-colors">
                {t("batteryFaq2Question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {t("batteryFaq2Answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold hover:text-primary hover:no-underline transition-colors">
                {t("batteryFaq3Question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {t("batteryFaq3Answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold hover:text-primary hover:no-underline transition-colors">
                {t("batteryFaq4Question")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base font-medium">
                {t("batteryFaq4Answer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
  )
}
