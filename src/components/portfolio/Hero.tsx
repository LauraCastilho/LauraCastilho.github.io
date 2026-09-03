import { useTranslation } from "react-i18next";
import { ArrowRight, Code2, Linkedin, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const AVATAR_URL = "/laura-avatar.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-radial-hero"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-[hsl(var(--title-accent))]/10 blur-3xl" />

      <div className="container relative z-10 grid items-center gap-14 pb-20 pt-32 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-1.5 animate-fade-up">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t("hero.hello")}
            </span>
            <span className="animate-pulse-glow text-lg font-bold text-primary">
              |
            </span>
          </div>

          <h1 className="font-display animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-6xl xl:text-7xl [animation-delay:80ms]">
            {t("hero.name")}
          </h1>

          <p className="animate-fade-up text-xl font-semibold text-foreground [animation-delay:160ms] sm:text-2xl">
            {t("hero.role")}
          </p>

          <p className="max-w-xl animate-fade-up text-muted-foreground [animation-delay:240ms]">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:320ms]">
            <Button
              asChild
              size="lg"
              variant="premium"
              className="rounded-full px-7"
            >
              <a
                href="https://wa.me/5511996290434"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                {t("hero.ctaTalk")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="glass"
              className="group rounded-full px-7"
            >
              <a
                href="https://www.linkedin.com/in/laura-castilho/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                {t("hero.ctaLinkedin")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-full border border-dashed border-primary/20" />
            <div className="pointer-events-none absolute -inset-14 hidden rounded-full border border-dashed border-primary/10 sm:block" />

            {/* Outer ring: orbiting dots */}
            <div className="pointer-events-none absolute -inset-14 animate-orbit">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-primary shadow-glow" />
              <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 animate-pulse-glow rounded-full bg-[hsl(var(--title-accent))] shadow-glow" />
              <div className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/70 shadow-glow" />
              <div className="absolute left-0 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 sm:block" />
            </div>

            {/* Inner ring: counter-rotating dots */}
            <div className="pointer-events-none absolute -inset-6 animate-orbit [animation-direction:reverse] [animation-duration:20s]">
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--title-accent))]/80" />
              <div className="absolute bottom-0 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary sm:block" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 shadow-glow">
              <img
                src={AVATAR_URL}
                alt="Laura Castilho"
                className="aspect-square w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 flex h-11 w-11 animate-float items-center justify-center rounded-full border border-primary/30 bg-background/80 text-primary shadow-glow backdrop-blur-sm">
                <Code2 className="h-5 w-5" />
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-background/85 px-3.5 py-2 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-foreground">
                  {t("hero.available")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
