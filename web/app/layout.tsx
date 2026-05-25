import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Bhansali — AI Engineer",
  description:
    "AI Engineer building natural-language interfaces for enterprise data. Text-to-SQL systems, semantic search, and LLM-powered retrieval.",
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
        <div className="bg-anim" aria-hidden="true" />
        <div className="bg-orb2" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
