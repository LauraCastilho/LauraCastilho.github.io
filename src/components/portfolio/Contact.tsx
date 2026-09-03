import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ContactLink = {
  key: string;
  icon: LucideIcon;
  href: string;
};

const CONTACT_LINKS: ContactLink[] = [
  {
    key: "whatsapp",
    icon: MessageCircle,
    href: "https://wa.me/5511996290434",
  },
  {
    key: "email",
    icon: Mail,
    href: "mailto:laura.andrade.castilho@gmail.com",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/laura-castilho/",
  },
  {
    key: "github",
    icon: Github,
    href: "https://github.com/LauraCastilho",
  },
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="container max-w-7xl">
        <Reveal>
          <SectionHeading
            title={t("contact.title")}
            subtitle={t("contact.description")}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <Reveal key={link.key} delay={index * 0.1}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-surface group flex h-full flex-col items-start gap-3.5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">
                      {t(`contact.${link.key}`)}
                    </span>
                    <span className="font-display text-sm font-semibold [overflow-wrap:anywhere] text-foreground">
                      {t(`contact.${link.key}.value`)}
                    </span>
                  </div>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
                    {t("contact.action")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
