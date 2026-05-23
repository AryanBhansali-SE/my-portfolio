"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.4, 0.25, 1] as const;

export function HoloPhoto() {
  return (
    <motion.div
      className="holo-wrap"
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease }}
    >
      {/* Pulsing outer rings */}
      <div className="holo-ring holo-ring--1" aria-hidden />
      <div className="holo-ring holo-ring--2" aria-hidden />

      {/* Main card */}
      <div className="holo-card">
        {/* Targeting corners */}
        <span className="holo-corner holo-corner--tl" aria-hidden />
        <span className="holo-corner holo-corner--tr" aria-hidden />
        <span className="holo-corner holo-corner--bl" aria-hidden />
        <span className="holo-corner holo-corner--br" aria-hidden />

        {/* Photo area */}
        <div className="holo-img-wrap">
          <Image
            src="aryan.jpg"
            alt="Aryan Bhansali"
            width={480}
            height={600}
            className="holo-img"
            priority
          />
          <div className="holo-scanlines"  aria-hidden />
          <div className="holo-gloss"      aria-hidden />

          {/* Materialize wipe — slides up off the image on mount */}
          <motion.div
            className="holo-materialize"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.75, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            aria-hidden
          />

          {/* Horizontal sweep line during reveal */}
          <motion.div
            className="holo-sweep"
            initial={{ top: "0%", opacity: 1 }}
            animate={{ top: "100%", opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.8, ease: "linear" }}
            aria-hidden
          />
        </div>

        {/* Status bar */}
        <div className="holo-status">
          <div className="holo-status-label">◈ IDENTITY CONFIRMED</div>
          <div className="holo-status-bar" aria-hidden />
          <div className="holo-status-name">ARYAN BHANSALI</div>
          <div className="holo-status-role">AI ENGINEER · CLASS 2026</div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        className="holo-badge holo-badge--tl"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.3, ease }}
      >
        <div className="holo-badge-label">SYSTEMS</div>
        <div className="holo-badge-value">3 ACTIVE</div>
      </motion.div>

      <motion.div
        className="holo-badge holo-badge--tr"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.45, ease }}
      >
        <div className="holo-badge-label">STACK</div>
        <div className="holo-badge-value">FULL</div>
      </motion.div>

      <motion.div
        className="holo-badge holo-badge--br"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.6, ease }}
      >
        <div className="holo-badge-label">STATUS</div>
        <div className="holo-badge-value holo-badge-value--green">● OPEN</div>
      </motion.div>
    </motion.div>
  );
}
