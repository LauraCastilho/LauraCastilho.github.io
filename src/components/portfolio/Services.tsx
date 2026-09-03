import { useTranslation } from "react-i18next";
import { Code2, Network, Smartphone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ServiceItem = {
  key: string;
  icon: LucideIcon;
};

const SERVICES: ServiceItem[] = [
  { key: "development", icon: Code2 },
  { key: "mobile", icon: Smartphone },
  { key: "integrations", icon: Network },
  { key: "testing", icon: Sparkles },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-5 lg:sticky lg:top-28">
              <SectionHeading title={t("services.title")} />
              <p className="text-muted-foreground">{t("services.intro1")}</p>
              <p className="text-muted-foreground">{t("services.intro2")}</p>
            </div>
          </Reveal>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.key} delay={index * 0.08}>
                  <div className="group flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(`services.items.${service.key}.desc`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
