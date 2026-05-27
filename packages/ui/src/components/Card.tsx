import { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-gray-100 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
