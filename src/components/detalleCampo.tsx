import { Typography } from "@/components/ui/typography";
import { ReactNode } from "react";

interface DetalleCampoProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function DetalleCampo({ label, children, className }: DetalleCampoProps) {
  return (
    <div className={className}>
      <Typography className="text-sm font-medium text-muted-foreground">
        {label}
      </Typography>
      <Typography>{children}</Typography>
    </div>
  );
}
