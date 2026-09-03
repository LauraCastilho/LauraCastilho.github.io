import { useTranslation } from "react-i18next";
import {
  BadgeCheck,
  ClipboardList,
  Eye,
  GraduationCap,
  Lightbulb,
  Scale,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Value = {
  key: string;
  icon: LucideIcon;
};

const VALUES: Value[] = [
  { key: "responsibility", icon: ShieldCheck },
  { key: "learning", icon: GraduationCap },
  { key: "teamwork", icon: Users },
  { key: "organization", icon: ClipboardList },
  { key: "problemsolving", icon: Lightbulb },
  { key: "proactivity", icon: Zap },
  { key: "attention", icon: Eye },
  { key: "ethics", icon: BadgeCheck },
];

export function Values() {
  const { t } = useTranslation();

  return (
    <section id="values" className="scroll-mt-24 py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            title={t("values.title")}
            subtitle={t("values.subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.key} delay={(index % 4) * 0.08}>
                <div className="card-surface group flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {t(`values.items.${value.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`values.items.${value.key}.desc`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
