import { useTranslation } from "react-i18next";

import { Reveal } from "./Reveal";

const STATS = [
  { key: "experience" },
  { key: "languages" },
  { key: "learning" },
] as const;

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="relative border-y border-border/60 bg-card/40">
      <div className="container grid grid-cols-1 divide-y divide-border/60 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map((stat, index) => (
          <Reveal
            key={stat.key}
            delay={index * 0.1}
            className="flex flex-col items-center gap-1 py-6 text-center sm:py-2"
          >
            <span className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              {t(`stats.${stat.key}.value`)}
            </span>
            <span className="text-sm text-muted-foreground">
              {t(`stats.${stat.key}.label`)}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
