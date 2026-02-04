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
      const offset = Math.round(progress * 600);
      const offsetSecondary = Math.round(progress * 420);
      root.style.setProperty("--wash-progress", progress.toFixed(4));
      root.style.setProperty("--wash-offset", `${offset}px`);
      root.style.setProperty("--wash-offset-secondary", `${offsetSecondary}px`);
      root.style.setProperty("--wash-offset-negative", `${-offset}px`);
      root.style.setProperty(
        "--wash-offset-secondary-negative",
        `${-offsetSecondary}px`
      );
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

  return <div aria-hidden="true" className="pressure-wash-overlay" />;
}
