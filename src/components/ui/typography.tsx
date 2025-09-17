import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "muted";
  size?: "small" | "medium" | "large";
  className?: string;
  children: ReactNode;
};

const variants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 ",
  muted: "text-muted-foreground",
};

const sizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

export function Typography({
  variant = "p",
  size = "medium",
  className,
  children,
}: TypographyProps) {
  const Tag = variant === "muted" ? "p" : variant;
  const sizeClass = variants[variant] === "p" ? sizes[size] : "";
  return (
    <Tag className={cn(variants[variant], sizeClass, className)}>
      {children}
    </Tag>
  );
}
