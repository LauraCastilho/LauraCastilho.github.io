import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SkillCardProps = {
  name: string;
  description: string;
  icon: LucideIcon;
  level: number;
};

function StarRating({ level }: { level: number }) {
  const full = Math.floor(level);
  const hasHalf = level - full >= 0.5;
  const stars = [0, 1, 2, 3, 4];

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((index) => {
        const filled = index < full;
        const isHalf = index === full && hasHalf;
        return (
          <span key={index} className="relative inline-flex h-3.5 w-3.5">
            <Star
              className={cn(
                "absolute inset-0 h-3.5 w-3.5 text-primary",
                !filled && !isHalf && "text-primary/25",
              )}
              fill={filled || isHalf ? "currentColor" : "transparent"}
            />
            {isHalf && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star
                  className="h-3.5 w-3.5 text-primary"
                  fill="currentColor"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export function SkillCard({
  name,
  description,
  icon: Icon,
  level,
}: SkillCardProps) {
  return (
    <div className="card-surface group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="font-display font-semibold text-foreground">{name}</h3>

      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="flex items-center justify-between pt-1">
        <StarRating level={level} />
        <span className="font-display text-sm font-semibold text-primary">
          {level.toFixed(1)}
        </span>
      </div>
    </div>
  );
}
