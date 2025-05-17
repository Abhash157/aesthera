import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-japanese",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cyber Samurai",
  description: "The way of the modern samurai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
