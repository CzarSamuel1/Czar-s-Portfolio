import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Display face: an editorial variable serif with real character —
// used for headlines only. Body stays on a clean, highly legible sans.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example-replace-with-real-domain.com"),
  title: {
    default: "Product Designer | Samuel Monday",
    template: "%s | Samuel Monday",
  },
  description:
    "Product Designer building digital products from idea to interface.",
  openGraph: {
    title: "Product Designer | Samuel Monday",
    description:
      "Product Designer building digital products from idea to interface.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
