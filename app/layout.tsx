import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAQ | FScode",
  description: "Solution for FAQ Accordion challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${worksans.className} min-h-screen scroll-smooth bg-faq-light-pink bg-[url(/assets/images/background-pattern-mobile.svg)] bg-contain bg-top bg-no-repeat antialiased sm:bg-[url(/assets/images/background-pattern-desktop.svg)]`}
      >
        {children}
      </body>
    </html>
  );
}
