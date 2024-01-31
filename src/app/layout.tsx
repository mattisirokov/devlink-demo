import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../devlink/global.css";

// ? the devlink provider is only for Webflow animations
import { DevLinkProvider } from "../../devlink";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DevLinkProvider>{children}</DevLinkProvider>
      </body>
    </html>
  );
}
