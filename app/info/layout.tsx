import "../reset.css";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info | Portfolio-sohee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
