import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Cinzel } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/lib/sanity/live";
import { draftMode } from "next/headers";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhay Oyun | Shamanic Practitioner & Guide",
  description:
    "Between Worlds. Siberian Shaman working at the edge of the known. Sacred ceremonies, healing, and training.",
  keywords: ["shaman", "healing", "ceremony", "spiritual", "siberian"],
  icons: {
    icon: "/icon1.png",
    apple: "/icon1.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${cinzel.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation />
        <main style={{ paddingTop: 108 }}>{children}</main>
        <Footer />
        <SanityLive />
        {draft.isEnabled && <VisualEditingWrapper />}
      </body>
    </html>
  );
}
