"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export function ScrollToTop() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    if (atTop) {
      // At the top → jump to the first section.
      const next = document.getElementById("about");
      if (next) next.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      aria-label={atTop ? "Scroll down" : "Back to top"}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
    >
      {atTop ? (
        <ArrowDown className="h-5 w-5" aria-hidden />
      ) : (
        <ArrowUp className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
