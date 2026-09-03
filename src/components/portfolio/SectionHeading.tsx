import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-fit flex-col gap-[7px]",
          align === "center" ? "items-center" : "items-start",
        )}
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <div className="title-underline w-full" />
      </div>
      {subtitle ? (
        <p className="max-w-xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
