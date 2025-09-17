import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "../components/SessionWrapper";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Control",
  description: "Venta de permisos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">
        <Toaster />
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
