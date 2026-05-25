import "./styles/globals.css";
import type { Metadata } from "next";
import { StarField } from "./components/StarField";
import { ScrollProgress } from "./components/ScrollProgress";

export const metadata: Metadata = {
  title: "Aryan Bhansali — AI Engineer",
  description:
    "AI Engineer building dynamic NLQ systems and natural-language interfaces for enterprise data — semantic search, LLM-powered retrieval, and full-stack AI products.",
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
