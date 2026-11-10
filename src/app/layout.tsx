import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { BRAND } from "@/data/brand";

export const metadata: Metadata = {
  metadataBase: new URL("https://cup2eat.in"),
  title: "CUP2EAT — Eat Your Drink! | 100% Edible & Eco-Friendly Cups",
  description:
    "CUP2EAT manufactures 100% edible, delicious biscuit cups for coffee, tea, cold shakes, and desserts. Pure vegetarian, leak-proof, zero plastic waste, and delivered all over India.",
  keywords: [
    "edible cups",
    "CUP2EAT",
    "Eat Your Drink",
    "edible coffee cups",
    "zero waste cups India",
    "eco friendly cups",
    "wholesale edible cups",
    "chocolate edible cups",
    "biodegradable cups",
    "sustainable cafe supplies",
  ],
  authors: [{ name: "Varun Khera" }, { name: "CUP2EAT" }],
  creator: "CUP2EAT",
  openGraph: {
    title: "CUP2EAT — Eat Your Drink! | 100% Edible Cups",
    description:
      "Because good things should be edible. Upgrade your cafe, restaurant, or event with delicious chocolate, vanilla, and elaichi edible cups.",
    url: "https://cup2eat.in",
    siteName: "CUP2EAT",
    images: [
      {
        url: "/images/trio-cups-wood.jpg",
        width: 1200,
        height: 630,
        alt: "CUP2EAT Edible Cups",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUP2EAT — Eat Your Drink!",
    description: "100% Edible, pure veg biscuit cups for hot coffee, chai, cold shakes & desserts.",
    images: ["/images/trio-cups-wood.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "CUP2EAT Edible Cups",
  "image": "https://cup2eat.in/images/cup2eat-logo.png",
  "description": "100% edible, pure vegetarian, eco-friendly cups for hot and cold beverages.",
  "brand": {
    "@type": "Brand",
    "name": "CUP2EAT",
    "slogan": "Eat Your Drink!"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "3999",
    "highPrice": "6500",
    "offerCount": "5"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-cup-ivory text-cup-forest antialiased selection:bg-cup-forest selection:text-cup-ivory">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
