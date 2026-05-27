import { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export function Section({
  container = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 px-4", className)}
      {...props}
    >
      {container ? (
        <div className="max-w-5xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
