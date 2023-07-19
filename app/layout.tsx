import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Sundanese } from "next/font/google";

const nss = Noto_Sans_Sundanese({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone project 1",
  description: "Clone website part 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nss.className}>{children}</body>
    </html>
  );
}
