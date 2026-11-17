"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

// Section ids in page order (hero + each Section).
const SECTION_IDS = [
  "top",
  "about",
  "work",
  "experience",
  "skills",
  "credentials",
  "contact",
];

// Index of the section the viewer is currently on: the last one whose top has
// passed the line just below the fixed navbar. Sections rest ~184px from the
// top once scrolled to (scroll-padding-top + scroll-mt-24), so 220 keeps the
// section you're on counted as current rather than the next one.
function currentIndex() {
  const line = window.scrollY + 220;
  let idx = 0;
  SECTION_IDS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top + window.scrollY <= line) idx = i;
  });
  return idx;
}

export function ScrollToTop() {
  // On the last section → show the up arrow (back to top). Otherwise the down
  // arrow (advance to the next section).
  const [atLast, setAtLast] = useState(false);

  useEffect(() => {
    const update = () => setAtLast(currentIndex() >= SECTION_IDS.length - 1);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function handleClick() {
    if (atLast) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const nextId = SECTION_IDS[currentIndex() + 1];
    const el = nextId ? document.getElementById(nextId) : null;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label={atLast ? "Back to top" : "Scroll to next section"}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
    >
      {atLast ? (
        <ArrowUp className="h-5 w-5" aria-hidden />
      ) : (
        <ArrowDown className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
