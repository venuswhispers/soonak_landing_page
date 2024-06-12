import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Header from "@/components/layout/header";
import Provider from '@/providers';
import "./globals.css";
import "aos/dist/aos.css";
import "./index.css";


const inter = Inter({ subsets: ["latin"] });

const catFont = localFont({
  src: [
    {
      path: "../../public/fonts/Catfiles.woff",
    },
  ],
  variable: "--font-cat",
});

export const metadata: Metadata = {
  title: "Richy Soonak",
  description: "solana meme coin",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${catFont.variable}`}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
