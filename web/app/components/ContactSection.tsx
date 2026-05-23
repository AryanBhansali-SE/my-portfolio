"use client";
import { motion } from "framer-motion";

const GHIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LIIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="sec-label">07 // Initiate Contact</div>
          <h2 className="sec-title"><span className="glitch-title" data-text={"Let's Build"}>Let&apos;s Build</span></h2>
        </motion.div>

        <div className="contact-layout">
          {/* Main card */}
          <motion.div
            className="contact-main"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="contact-headline">Open to Opportunities</div>
            <p className="contact-desc">
              Looking for full-time roles in AI engineering, data engineering,
              or full-stack development. I move fast, ship production code, and
              build systems that actually work.
            </p>
            <a
              href="mailto:aryan.bhansali2004@gmail.com"
              className="contact-email-btn"
            >
              <span>✉</span> aryan.bhansali2004@gmail.com
            </a>
          </motion.div>

          {/* Link cards */}
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <a
              href="https://github.com/aryanbhansali"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon contact-link-icon--gh">
                <GHIcon />
              </div>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/aryanbhansali</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/aryanbhansali10"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon contact-link-icon--li">
                <LIIcon />
              </div>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">linkedin.com/in/aryanbhansali10</div>
              </div>
            </a>

            <a
              href="aryan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div
                className="contact-link-icon"
                style={{
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  color: "var(--cyan)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-4H8V8h5v2z" />
                </svg>
              </div>
              <div>
                <div className="contact-link-label">Résumé</div>
                <div className="contact-link-value">Download PDF ↗</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
