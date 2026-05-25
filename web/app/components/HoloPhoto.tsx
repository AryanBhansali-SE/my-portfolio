"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function HoloPhoto() {
  return (
    <motion.div
      className="portrait-wrap"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.45, ease }}
    >
      <div className="portrait-frame">
        <Image
          src="aryan.jpg"
          alt="Aryan Bhansali"
          width={480}
          height={600}
          className="portrait-img"
          priority
        />
        <div className="portrait-bottom" aria-hidden />
      </div>
    </motion.div>
  );
}
