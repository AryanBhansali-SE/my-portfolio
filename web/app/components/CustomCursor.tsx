"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Magnetic holographic cursor — a small cyan dot trailed by a ring that
 * grows and locks onto interactive elements (a, button, [data-magnetic]).
 * Hidden on touch devices.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], [data-magnetic], input, textarea, select, label'
      );
      setHovering(interactive);
    };

    const leave = () => {
      x.set(-100);
      y.set(-100);
      setHovering(false);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.18 }}
        aria-hidden
      />
      <motion.div
        className={`cursor-ring${hovering ? " cursor-ring--lock" : ""}`}
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden
      />
    </>
  );
}