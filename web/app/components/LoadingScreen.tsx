"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const ref = useRef(onComplete);
  ref.current = onComplete;

  useEffect(() => {
    // Skip loading screen on return visits within the same session
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("ab-visited")) {
      ref.current();
      return;
    }
    const t = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2200),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="ls-wrap">
      <div className="ls-inner">
        {/* Name — tracks in from wide letterspacing */}
        <motion.div
          className="ls-film-name"
          initial={{ opacity: 0, letterSpacing: "0.55em" }}
          animate={{ opacity: 1, letterSpacing: "0.14em" }}
          transition={{ duration: 1.7, ease }}
        >
          ARYAN BHANSALI
        </motion.div>

        {/* Expanding separator */}
        <motion.div
          className="ls-film-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 1.1, ease }}
          style={{ originX: 0.5 }}
        />

        {/* Subtitle */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              className="ls-film-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              AI ENGINEER · GURUGRAM, INDIA
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enter button */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.button
              className="ls-launch"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease }}
              onClick={() => {
                if (typeof sessionStorage !== "undefined") {
                  sessionStorage.setItem("ab-visited", "1");
                }
                ref.current();
              }}
            >
              <span>ENTER</span>
              <span className="ls-launch-arr">→</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
