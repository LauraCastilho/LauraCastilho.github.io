import { useTranslation } from "react-i18next";
import {
  Atom,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutTemplate,
  Plug,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";

type Skill = {
  key: string;
  icon: LucideIcon;
  level: number;
};

const SKILLS: Skill[] = [
  { key: "csharp", icon: Code2, level: 5.0 },
  { key: "rest", icon: Plug, level: 5.0 },
  { key: "react", icon: Atom, level: 4.0 },
  { key: "sql", icon: Database, level: 5.0 },
  { key: "web", icon: LayoutTemplate, level: 5.0 },
  { key: "python", icon: Terminal, level: 3.0 },
  { key: "git", icon: GitBranch, level: 5.0 },
  { key: "cloud", icon: Cloud, level: 4.0 },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            title={t("skills.title")}
            subtitle={t("skills.subtitle")}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.key} delay={(index % 4) * 0.08}>
              <SkillCard
                name={t(`skills.items.${skill.key}.name`)}
                description={t(`skills.items.${skill.key}.desc`)}
                icon={skill.icon}
                level={skill.level}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
