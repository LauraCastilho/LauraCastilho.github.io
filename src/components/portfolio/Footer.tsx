import { useTranslation } from "react-i18next";
import { ArrowUp, Linkedin, Mail, MessageCircle } from "lucide-react";

const SOCIALS = [
  { icon: MessageCircle, href: "https://wa.me/5511996290434", label: "WhatsApp" },
  { icon: Mail, href: "mailto:laura.andrade.castilho@gmail.com", label: "Email" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/laura-castilho/",
    label: "LinkedIn",
  },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <p className="font-display font-semibold text-foreground">
            Laura <span className="text-gradient">Castilho</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.role")} · © {year} {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-background/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
