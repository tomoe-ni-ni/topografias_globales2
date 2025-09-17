import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function HeaderPage({
  setOnclick,
  textButton,
  title,
}: {
  setOnclick: () => void;
  textButton: string;
  title: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h1">{title}</Typography>
        <Button variant="default" onClick={setOnclick}>
          {textButton}
        </Button>
      </div>
    </>
  );
}
