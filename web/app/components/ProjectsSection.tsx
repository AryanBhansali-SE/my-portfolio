"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    type: "AI PRODUCTIVITY SYSTEM",
    title: "LUCID",
    subtitle: "AI Productivity Platform",
    problem: "The Problem",
    desc: "Personal productivity apps don't understand your patterns — they just collect data. LUCID surfaces AI-driven insights from your own logged habits, goals, and journal entries, creating a feedback loop that actually improves behavior.",
    chips: ["React", "Tailwind CSS", "Supabase", "LLM API"],
    ctaLabel: "View Project",
    ctaHref: "https://github.com/aryanbhansali",
  },
  {
    type: "AI INFORMATION SYSTEM",
    title: "THE SIGNAL",
    subtitle: "AI Information Platform",
    problem: "The Problem",
    desc: "Information overload is the default state. The Signal organizes content and surfaces contextual insights using AI, giving you signal in the noise — a live platform with ongoing feature releases.",
    chips: ["React", "Tailwind CSS", "Supabase", "LLM API"],
    ctaLabel: "View Project",
    ctaHref: "https://github.com/aryanbhansali",
  },
];

export function ProjectsSection() {
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const handlers: Array<(e: PointerEvent) => void> = [];

    cards.forEach((card) => {
      if (!card) return;
      const handler = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      card.addEventListener("pointermove", handler as EventListener);
      handlers.push(handler);
    });

    return () => {
      cards.forEach((card, i) => {
        if (card && handlers[i]) {
          card.removeEventListener("pointermove", handlers[i] as EventListener);
        }
      });
    };
  }, []);

  return (
    <section id="systems" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="sec-label">03 // Featured Systems</div>
          <h2 className="sec-title">Projects</h2>
          <p className="sec-desc">
            AI products designed and shipped end to end.
          </p>
        </motion.div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="proj-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {/* Status */}
              <div className="proj-status">
                <span className="proj-status-dot" />
                LIVE
              </div>

              {/* Identity */}
              <div className="proj-type">{p.type}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-subtitle">{p.subtitle}</div>

              <div className="proj-divider" />

              {/* Description */}
              <div className="proj-problem">{p.problem}</div>
              <p className="proj-desc">{p.desc}</p>

              {/* Chips */}
              <div className="proj-chips">
                {p.chips.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-cta"
              >
                {p.ctaLabel} →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
