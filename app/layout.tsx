import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "次に(tsugini) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.className} flex min-h-screen flex-col scroll-smooth antialiased bg-[url(/assets/images/background-pattern-mobile.svg)] bg-contain bg-top bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
