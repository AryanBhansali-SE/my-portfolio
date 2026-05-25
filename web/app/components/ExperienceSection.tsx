"use client";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    moduleTag: "MODULE_01 // AI Engineering",
    company: "Altius",
    role: "AI Engineer Intern",
    timeline: "Jan 2026 – Present",
    status: "active",
    metric: "Natural Language → Enterprise SQL — Live in Production",
    bullets: [
      "Built a FastAPI middleware that lets non-technical employees query an internal Altius database directly in plain English.",
      "Designed a hybrid architecture where Azure OpenAI handles intent classification and parameter extraction while query construction stays template-based.",
      "Shipped to users through Microsoft Copilot Studio and a built-in chat interface, with a second model call formatting raw query results into plain-English answers.",
    ],
    chips: ["FastAPI", "Azure OpenAI", "Microsoft SQL Server", "Python", "Microsoft Copilot Studio"],
  },
  {
    moduleTag: "MODULE_02 // Freelance Delivery",
    company: "Freelance",
    role: "Full-Stack Developer",
    timeline: "Apr 2026 – Present",
    status: "active",
    metric: "Zero to Production in < 1 Week",
    bullets: [
      "Built and shipped chikitsakitchen.com, a nutrition and dietician platform for Dr. Shilpa Arora.",
      "Took it from client requirements to deployed responsive production site in about a week.",
      "Continue to maintain performance, content updates, and issue resolution.",
    ],
    chips: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    moduleTag: "MODULE_03 // Data Engineering",
    company: "Colt Technological Services",
    role: "Data Engineer Intern",
    timeline: "Jun 2025 – Aug 2025",
    status: "done",
    metric: "5–10 min data requests → seconds",
    bullets: [
      "Built a semantic search system over enterprise datasets so analysts could describe data needs in plain language instead of writing SQL.",
      "Used vector embeddings with metadata indexing and SQL retrieval across 12+ enterprise tables.",
      "Reduced a typical data request from 5–10 minutes to a few seconds.",
      "Built pipelines to keep the search index current as datasets changed.",
    ],
    chips: ["Python", "BigQuery", "Vector Embeddings", "SQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="milestones" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sec-label">02 // Launch Milestones</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"Experience"}>Experience</span></h2>
          <p className="sec-desc">
            Production systems shipped at enterprise companies and in the wild.
          </p>
        </motion.div>

        <div className="exp-stack">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.0,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="exp-top">
                <div>
                  <div className="exp-module-tag">{exp.moduleTag}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div
                  className={`exp-badge exp-badge--${exp.status === "active" ? "active" : "done"}`}
                >
                  <span className="exp-badge-dot" />
                  {exp.status === "active" ? "Active" : "Completed"}
                </div>
              </div>

              <div className="exp-role">{exp.role}</div>
              <div className="exp-timeline">{exp.timeline}</div>

              <div className="exp-metric">⚡ {exp.metric}</div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="chip-row">
                {exp.chips.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
