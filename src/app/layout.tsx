import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Cinzel } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${cinzel.variable}`}>
      <body className="antialiased" suppressHydrationWarning style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
