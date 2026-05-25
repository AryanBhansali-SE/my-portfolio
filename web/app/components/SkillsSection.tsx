"use client";
import { motion } from "framer-motion";

const PANELS = [
  {
    iconClass: "skill-panel-icon--ai",
    icon: "🧠",
    title: "AI Layer",
    sub: "Core Intelligence",
    skills: ["LLM APIs", "Azure OpenAI", "NLP", "Semantic Search", "Vector Embeddings", "Intent Classification", "Retrieval Systems"],
  },
  {
    iconClass: "skill-panel-icon--backend",
    icon: "⚙️",
    title: "Backend & Data",
    sub: "Infrastructure",
    skills: ["FastAPI", "Python", "REST APIs", "Microsoft SQL Server", "BigQuery", "Data Pipelines", "SQL"],
  },
  {
    iconClass: "skill-panel-icon--front",
    icon: "🖥️",
    title: "Frontend",
    sub: "Interface Layer",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    iconClass: "skill-panel-icon--tools",
    icon: "🛠️",
    title: "Tools",
    sub: "Delivery Stack",
    skills: ["Git / GitHub", "Microsoft Copilot Studio", "Firebase", "Supabase", "AWS"],
  },
];

export function SkillsSection() {
  return (
    <section id="engine" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sec-label">04 // Tech Stack Engine</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"Skills"}>Skills</span></h2>
          <p className="sec-desc">
            The full technology stack — from AI reasoning to production infrastructure.
          </p>
        </motion.div>

        <div className="skills-grid">
          {PANELS.map((panel, i) => (
            <motion.div
              key={i}
              className="skill-panel"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={`skill-panel-icon ${panel.iconClass}`}>{panel.icon}</div>
              <div className="skill-panel-title">{panel.title}</div>
              <div className="skill-panel-sub">{panel.sub}</div>
              <div className="skill-pills">
                {panel.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
