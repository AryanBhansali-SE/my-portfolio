import "./styles/globals.css";
import type { Metadata } from "next";
import { StarField } from "./components/StarField";
import { ScrollProgress } from "./components/ScrollProgress";

const META_DESC =
  "AI Engineer building dynamic NLQ systems and natural-language interfaces for enterprise data — semantic search, LLM-powered retrieval, and full-stack AI products. Shipping at Altius and Colt Technological Services.";

export const metadata: Metadata = {
  title: "Aryan Bhansali — AI Engineer",
  description: META_DESC,
  metadataBase: new URL("https://aryanbhansali.vercel.app"),
  openGraph: {
    title: "Aryan Bhansali — AI Engineer",
    description: META_DESC,
    url: "https://aryanbhansali.vercel.app",
    siteName: "Aryan Bhansali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Bhansali — AI Engineer",
    description: META_DESC,
    creator: "@aryanbhansali",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StarField />
        <div className="bg-anim" aria-hidden="true" />
        <div className="bg-orb2" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
