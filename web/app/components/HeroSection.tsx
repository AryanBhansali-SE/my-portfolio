"use client";
import { motion } from "framer-motion";
import { HoloPhoto } from "./HoloPhoto";
import { HeroParticles } from "./HeroParticles";

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

/* Slam variant — used for the big headline words */
const slam = {
  initial: { opacity: 0, y: -50, scale: 1.08 },
  animate: { opacity: 1, y: 0, scale: 1 },
};
const slamUp = {
  initial: { opacity: 0, y: 50, scale: 1.08 },
  animate: { opacity: 1, y: 0, scale: 1 },
};
const slamEase = [0.22, 1, 0.36, 1] as const;
const fadeEase = [0.25, 0.4, 0.25, 1] as const;

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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: fadeEase }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <HeroParticles />
      <div className="container">
        <div className="hero-inner">

          {/* ── Left: Text content ─────────────────────────── */}
          <div className="hero-text">
            {/* Badge */}
            <FadeUp delay={0.05}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                AI Engineer · Gurugram, India
              </div>
            </FadeUp>

            {/* Headline — dramatic slam */}
            <h1 className="hero-headline">
              <motion.span
                className="hero-hl-solid"
                variants={slam}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.45, delay: 0.15, ease: slamEase }}
              >
                Aryan
              </motion.span>
              <motion.span
                className="hero-hl-hollow"
                variants={slamUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.45, delay: 0.22, ease: slamEase }}
              >
                Bhansali
              </motion.span>
            </h1>

            {/* Subtitle */}
            <FadeUp delay={0.5}>
              <p className="hero-subtitle">
                AI Engineer building{" "}
                <strong style={{ color: "var(--cyan)", fontWeight: 700 }}>
                  natural-language interfaces
                </strong>{" "}
                for enterprise data — text-to-SQL, semantic search, and
                LLM-powered retrieval.
              </p>
            </FadeUp>

            {/* Tags */}
            <FadeUp delay={0.65}>
              <div className="hero-tags">
                {TAGS.map((t, i) => (
                  <motion.span
                    key={t}
                    className="hero-tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.7 + i * 0.06,
                      ease: fadeEase,
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={1.25}>
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

            {/* Meta */}
            <FadeUp delay={1.4}>
              <div className="hero-meta">
                <span className="hero-meta-item">
                  <span className="hero-meta-icon">📍</span>
                  Gurugram, India
                </span>
                <span className="hero-meta-item">
                  <span className="hero-meta-icon">🎓</span>
                  B.Tech CS · MUJ
                </span>
                <span className="hero-meta-item">
                  <span className="hero-meta-icon">📅</span>
                  Jul 2026
                </span>
              </div>
            </FadeUp>
          </div>

          {/* ── Right: Holographic photo ────────────────────── */}
          <div className="hero-visual">
            <HoloPhoto />
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
