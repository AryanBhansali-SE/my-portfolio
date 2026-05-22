"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT = [
  { text: "Initializing Aryan Bhansali",    status: "OK",     cls: "ok" },
  { text: "Loading AI Systems",              status: "OK",     cls: "ok" },
  { text: "Semantic Search Engine",          status: "ONLINE", cls: "ok" },
  { text: "Text-to-SQL Module",             status: "READY",  cls: "ok" },
  { text: "FastAPI Middleware",              status: "ACTIVE", cls: "ok" },
  { text: "LLM Retrieval Layer",            status: "ONLINE", cls: "ok" },
  { text: "All Systems Operational",        status: "100%",   cls: "gold" },
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const ref = useRef(onComplete);
  ref.current = onComplete;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 500 + i * 350));
    });

    timers.push(
      setTimeout(() => setReady(true), 500 + BOOT.length * 350 + 250)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const progress = Math.round((step / BOOT.length) * 100);

  return (
    <div className="ls-wrap">
      <div className="ls-grid" aria-hidden />
      <div className="ls-scan" aria-hidden />

      <div className="ls-inner">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ls-logo-mark">AB</div>
          <div className="ls-logo-sub">SYSTEM BOOT v2026</div>
        </motion.div>

        {/* Terminal lines */}
        <div className="ls-terminal">
          {BOOT.slice(0, step).map((line, i) => (
            <motion.div
              key={i}
              className="ls-line"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22 }}
            >
              <span className="ls-prompt">▶</span>
              <span className="ls-text">{line.text}</span>
              <span className="ls-dots">·················</span>
              <span className={`ls-status ls-status--${line.cls}`}>
                [{line.status}]
              </span>
            </motion.div>
          ))}
          {step < BOOT.length && <div className="ls-cursor">▋</div>}
        </div>

        {/* Progress bar */}
        <div className="ls-prog-wrap">
          <div className="ls-prog-track">
            <motion.div
              className="ls-prog-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            />
          </div>
          <div className="ls-prog-pct">{progress}%</div>
        </div>

        {/* Launch button */}
        <AnimatePresence>
          {ready && (
            <motion.button
              className="ls-launch"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => ref.current()}
            >
              <span>LAUNCH PORTFOLIO</span>
              <span className="ls-launch-arr">→</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
