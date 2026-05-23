"use client";
import { motion } from "framer-motion";

const EDU = [
  {
    period: "Aug 2022 – Jul 2026",
    school: "Manipal University Jaipur",
    degree: "B.Tech Computer Science & Engineering",
  },
  {
    period: "2008 – 2022",
    school: "Suncity School",
    degree: "Class XII · Gurugram",
  },
];

export function EducationSection() {
  return (
    <section id="foundation" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="sec-label">05 // Foundation</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"Education"}>Education</span></h2>
          <p className="sec-desc">
            The academic foundation behind the engineering.
          </p>
        </motion.div>

        <motion.div
          className="edu-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {EDU.map((e, i) => (
            <motion.div
              key={i}
              className="edu-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <div className="edu-period">{e.period}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
