import { useTranslation } from "react-i18next";
import { Building2, Check, MapPin } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EXPERIENCE_ITEMS = [
  { slug: "mid", bullets: ["first", "second", "third", "fourth"] },
  { slug: "junior", bullets: ["first", "second", "third"] },
  { slug: "intern", bullets: ["first", "second", "third"] },
] as const;

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="container max-w-3xl">
        <Reveal>
          <SectionHeading
            title={t("experience.title")}
            subtitle={t("experience.subtitle")}
          />
        </Reveal>

        <div className="relative mt-12 flex flex-col gap-10 border-l border-border pl-8">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1} className="relative">
              <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="flex items-center gap-1.5 font-semibold text-primary">
                  <Building2 className="h-4 w-4" />
                  {t("experience.company")}
                </span>
                <span className="text-muted-foreground">
                  · {t(`experience.items.${item.slug}.period`)}
                </span>
              </div>

              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {t(`experience.items.${item.slug}.role`)}
              </h3>

              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {t(`experience.items.${item.slug}.location`)}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t(`experience.items.${item.slug}.intro`)}
              </p>

              <ul className="mt-4 flex flex-col gap-2.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-muted-foreground"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed">
                      {t(`experience.items.${item.slug}.desc.${bullet}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
