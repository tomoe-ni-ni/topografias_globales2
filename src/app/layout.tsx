import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "../components/SessionWrapper";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Topografías Globales",
  description: "Aplicación para gestionar las topografías globales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">
        <Toaster richColors />
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
