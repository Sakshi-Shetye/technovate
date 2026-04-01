// components/admin/ui/card.tsx
import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Tiny className joiner to avoid adding a dependency.
 */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Card - container
 */
export const Card: React.FC<DivProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white/95 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader - header area (usually contains title / actions)
 */
export const CardHeader: React.FC<DivProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "px-6 py-4 border-b border-gray-100 dark:border-slate-700 flex items-start justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * CardTitle - semantic title text
 */
export const CardTitle: React.FC<DivProps> = ({ className, children, ...props }) => {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl font-semibold leading-tight text-slate-900 dark:text-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

/**
 * CardContent - main content area
 */
export const CardContent: React.FC<DivProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("px-6 py-4 text-sm text-slate-700 dark:text-slate-200", className)} {...props}>
      {children}
    </div>
  );
};

/**
 * CardFooter - bottom area for actions/controls
 */
export const CardFooter: React.FC<DivProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("px-6 py-3 border-t border-gray-100 dark:border-slate-700", className)} {...props}>
      {children}
    </div>
  );
};
