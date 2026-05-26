"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { MissionBrief } from "./components/MissionBrief";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { CustomCursor } from "./components/CustomCursor";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [flashing, setFlashing] = useState(false);

  const handleLaunch = useCallback(() => {
    /* 1. Flash fires */
    setFlashing(true);
    /* 2. Main content starts fading in slightly after flash peak */
    setTimeout(() => setLoading(false), 180);
    /* 3. Flash fades out */
    setTimeout(() => setFlashing(false), 700);
  }, []);

  return (
    <>
      <CustomCursor />
      {/* ── Loading screen ──────────────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <LoadingScreen onComplete={handleLaunch} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Cinematic reveal flash ───────────────────────────── */}
      <AnimatePresence>
        {flashing && (
          <motion.div
            key="flash"
            className="reveal-flash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── Main content ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Navigation />

        <main>
          <HeroSection />
          <div className="section-sep" />
          <MissionBrief />
          <div className="section-sep" />
          <ExperienceSection />
          <div className="section-sep" />
          <ProjectsSection />
          <div className="section-sep" />
          <SkillsSection />
          <div className="section-sep" />
          <EducationSection />
          <div className="section-sep" />
          <CertificationsSection />
          <div className="section-sep" />
          <ContactSection />
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <span className="footer-brand">Aryan Bhansali</span>
              <span className="footer-copy">© {new Date().getFullYear()} · Built with Next.js</span>
            </div>
            <div className="footer-links">
              <a href="https://github.com/AryanBhansali-SE" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://linkedin.com/in/aryanbhansali10" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="aryan_resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Résumé</a>
            </div>
            <a href="#hero" className="footer-top">
              Back to Top ↑
            </a>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
