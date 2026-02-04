"use client";

import { useEffect } from "react";

export default function PressureWashOverlay() {
  useEffect(() => {
    let frame: number | null = null;

    const updateProgress = () => {
      frame = null;
      const root = document.documentElement;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const x = Math.round(progress * 80 + 10);
      const y = Math.round(progress * 70 + 10);
      const sweep = Math.round(progress * 40);
      root.style.setProperty("--wash-progress", progress.toFixed(4));
      root.style.setProperty("--wash-x", `${x}%`);
      root.style.setProperty("--wash-y", `${y}%`);
      root.style.setProperty("--wash-sweep", `${sweep}deg`);
    };

    const onScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pressure-wash-overlay">
      <span className="pressure-wash-nozzle" />
      <span className="pressure-wash-spray" />
    </div>
  );
}
