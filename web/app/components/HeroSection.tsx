"use client";
import { motion } from "framer-motion";

const TAGS = [
  "Text-to-SQL",
  "Semantic Search",
  "LLM Retrieval",
  "FastAPI",
  "Azure OpenAI",
  "React",
  "BigQuery",
  "Python",
];

const ease = [0.25, 0.4, 0.25, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI Engineer · Gurugram, India
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.25}>
          <h1 className="hero-headline">
            <span className="hero-hl-solid">Aryan</span>
            <span className="hero-hl-hollow">Bhansali</span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.4}>
          <p className="hero-subtitle">
            AI Engineer building <strong style={{ color: "var(--cyan)", fontWeight: 700 }}>natural-language interfaces</strong> for
            enterprise data — text-to-SQL systems, semantic search, and
            LLM-powered retrieval.
          </p>
        </FadeUp>

        {/* Tags */}
        <FadeUp delay={0.5}>
          <div className="hero-tags">
            {TAGS.map((t) => (
              <span key={t} className="hero-tag">
                {t}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.62}>
          <div className="hero-ctas">
            <a href="#mission" className="btn-primary">
              View Launch Sequence ↓
            </a>
            <a
              href="aryan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Résumé ↗
            </a>
            <a href="#contact" className="btn-secondary">
              Contact →
            </a>
          </div>
        </FadeUp>

        {/* Meta bar */}
        <FadeUp delay={0.75}>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-icon">📍</span>
              Gurugram, India
            </span>
            <span className="hero-meta-item">
              <span className="hero-meta-icon">🎓</span>
              B.Tech CS · Manipal University Jaipur
            </span>
            <span className="hero-meta-item">
              <span className="hero-meta-icon">📅</span>
              Graduating July 2026
            </span>
          </div>
        </FadeUp>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
