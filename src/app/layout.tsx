import type { Metadata } from "next";
import "./globals.css";

import "../../devlink/global.css";

export const metadata: Metadata = {
  title: "Weather App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
