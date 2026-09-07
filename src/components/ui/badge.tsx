import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors border",
  {
    variants: {
      variant: {
        default:
          "border-zinc-200 dark:border-transparent bg-zinc-100 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-white/15 backdrop-blur-md",
        secondary:
          "border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        glow:
          "border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300 shadow-[0_0_12px_rgba(79,117,243,0.2)]",
        outline:
          "border-zinc-300 dark:border-white/15 text-zinc-700 dark:text-zinc-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
