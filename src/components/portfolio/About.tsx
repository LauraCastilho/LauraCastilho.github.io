import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container max-w-3xl">
        <Reveal>
          <SectionHeading title={t("about.title")} align="center" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-lg leading-relaxed text-muted-foreground">
            {t("about.description")}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <Button
            asChild
            variant="glass"
            className="rounded-full px-7"
          >
            <a
              href="https://www.linkedin.com/in/laura-castilho/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              {t("about.cta")}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
