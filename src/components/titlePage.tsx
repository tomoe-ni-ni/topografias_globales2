import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

export default function TitlePage({
  setModalAbierto,
  title,
  textButton,
}: {
  setModalAbierto: Dispatch<SetStateAction<boolean>>;
  title: string;
  textButton: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Typography size="large" variant="h1">
          {title}
        </Typography>
        <Button onClick={() => setModalAbierto(true)}>{textButton}</Button>
      </div>
    </>
  );
}
