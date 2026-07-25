import { useEffect, useRef, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Reveal every [data-reveal] element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (reduceMotion()) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Cursor-reactive aurora (CSS vars) + scroll progress width. */
export function useAmbient() {
  useEffect(() => {
    if (reduceMotion()) return;
    let raf = 0;
    let tx = 50,
      ty = 0;
    const root = document.documentElement;
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
      if (!raf)
        raf = requestAnimationFrame(() => {
          root.style.setProperty("--mx", tx + "%");
          root.style.setProperty("--my", ty + "%");
          raf = 0;
        });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

/* Scroll-spy: returns id of the section currently in view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const idsKey = ids.join(",");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [idsKey]);
  return active;
}

/* Live clock, UTC — for the HUD. */
export function useClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setT(
        d
          .toISOString()
          .slice(11, 19)
          .concat(" UTC")
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

/* One-time-per-session boot overlay flag. */
export function useBoot() {
  const [booting, setBooting] = useState(() => {
    if (typeof window === "undefined") return false;
    if (reduceMotion()) return false;
    return !sessionStorage.getItem("mk_booted");
  });
  useEffect(() => {
    if (!booting) return;
    const id = setTimeout(() => {
      sessionStorage.setItem("mk_booted", "1");
      setBooting(false);
    }, 1650);
    return () => clearTimeout(id);
  }, [booting]);
  return booting;
}

/* Count-up when element enters view. */
export function useCountUp(target, run) {
  const [n, setN] = useState(0);
  const ref = useRef();
  useEffect(() => {
    if (!run) return;
    if (reduceMotion()) {
      setN(target);
      return;
    }
    let start;
    const dur = 1100;
    const step = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [run, target]);
  return n;
}
