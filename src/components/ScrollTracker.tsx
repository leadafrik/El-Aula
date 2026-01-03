"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ScrollTracker() {
  useEffect(() => {
    const marks = new Set<number>();
    const thresholds = [25, 50, 75, 90];

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (percent >= t && !marks.has(t)) {
          marks.add(t);
          trackEvent("scroll_depth", { percent: t });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
