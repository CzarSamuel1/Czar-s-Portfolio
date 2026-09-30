import type { Metadata } from "next";
import { Bricolage_Grotesque, Doto, JetBrains_Mono, Caveat } from "next/font/google";
import { CursorChip } from "@/components/canvas/CursorChip";
import "./globals.css";

const body = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
// Headings inside pages use the same grotesque; --font-display is kept so
// existing pages/MDX keep working without edits.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const pixel = Doto({
  subsets: ["latin"],
  variable: "--font-pixel",
  axes: ["ROND"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
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
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${pixel.variable} ${mono.variable} ${hand.variable}`}
    >
      <body>
        {children}
        <CursorChip />
      </body>
    </html>
  );
}
