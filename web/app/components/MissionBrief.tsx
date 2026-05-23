"use client";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: "⚡",
    title: "Natural Language → SQL",
    desc: "Built FastAPI middleware at Altius letting non-technical employees query enterprise databases in plain English.",
  },
  {
    icon: "🔍",
    title: "Semantic Search at Scale",
    desc: "Reduced enterprise data retrieval from 5–10 minutes to seconds at Colt with vector embeddings over BigQuery.",
  },
  {
    icon: "🚀",
    title: "Full Stack Delivery",
    desc: "Ships from FastAPI services to React frontends, including a production dietician platform from zero to deployed in a week.",
  },
];

export function MissionBrief() {
  return (
    <section id="mission" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="sec-label">01 // Mission Brief</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"The Core Directive"}>The Core Directive</span></h2>
        </motion.div>

        <motion.div
          className="mission-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="mission-inner">
            <p className="mission-text">
              AI engineer who builds{" "}
              <strong>natural-language interfaces to enterprise data</strong> —
              text-to-SQL systems, semantic search, and LLM-powered retrieval.
              Shipped production systems at{" "}
              <strong>Altius</strong> and{" "}
              <strong>Colt Technological Services</strong>, and works across the
              full stack from <strong>FastAPI services</strong> to{" "}
              <strong>React frontends</strong>. B.Tech Computer Science,
              graduating July 2026.
            </p>

            <div className="mission-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  className="mission-hl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <div className="mission-hl-icon">{h.icon}</div>
                  <div>
                    <div className="mission-hl-title">{h.title}</div>
                    <div className="mission-hl-desc">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
