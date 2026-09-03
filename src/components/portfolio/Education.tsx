import { useTranslation } from "react-i18next";
import { Calendar, GraduationCap } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EDUCATION_ITEMS = ["ai", "web"] as const;

export function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            title={t("education.title")}
            subtitle={t("education.subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {EDUCATION_ITEMS.map((item, index) => (
            <Reveal key={item} delay={index * 0.1}>
              <div className="card-surface group flex h-full flex-col gap-4 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {t(`education.items.${item}.period`)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t(`education.items.${item}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`education.items.${item}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
