"use client";
import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number; r: number;
  opacity: number; twinkleSpeed: number; twinkleOffset: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.1 + 0.15,
        opacity: Math.random() * 0.55 + 0.1,
        twinkleSpeed: Math.random() * 0.018 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    init();
    window.addEventListener("resize", init);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      for (const s of stars) {
        const a = s.opacity * (0.45 + 0.55 * Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 240, 255, ${a})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-field" aria-hidden />;
}
