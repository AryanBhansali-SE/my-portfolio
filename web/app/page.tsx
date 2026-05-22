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

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const handleLaunch = useCallback(() => setLoading(false), []);

  return (
    <>
      {/* ── Loading overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <LoadingScreen onComplete={handleLaunch} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main content ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
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
            <span>© {new Date().getFullYear()} Aryan Bhansali</span>
            <a href="#hero" className="footer-top">
              Back to Top ↑
            </a>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
