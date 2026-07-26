import { useEffect, useState } from "react";
import { SAGAS } from "./constants/sagas";

/**
 * Where the ship is on the voyage.
 *
 * A single mutable object rather than React state: the 3D map reads it every
 * frame inside useFrame, and re-rendering the tree at 60fps to move a boat
 * would be daft. Components that need to *display* the position subscribe with
 * useRouteIndex(), which only fires when the saga actually changes.
 *
 *   t       continuous position along the route, 0 → SAGAS.length - 1
 *   index   saga currently in view
 *   far     furthest saga reached this session (islands behind you stay lit)
 */
export const route = { t: 0, index: 0, far: 0 };

const subscribers = new Set();

function publish() {
  subscribers.forEach((fn) => fn(route.index));
}

/** Measure the sections and keep `route` in step with the scroll. */
export function useRouteTracker() {
  useEffect(() => {
    let raf = 0;
    let bounds = [];

    const measure = () => {
      const y = window.scrollY;
      bounds = SAGAS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { top: r.top + y, height: Math.max(r.height, 1) };
      });
    };

    const update = () => {
      raf = 0;
      const probe = window.scrollY + window.innerHeight * 0.45;
      let t = 0;
      let index = 0;

      for (let i = 0; i < bounds.length; i++) {
        const b = bounds[i];
        if (!b) continue;
        if (probe >= b.top) {
          // how far through this saga we are, spilling into the next
          t = i + Math.min((probe - b.top) / b.height, 1);
          index = i;
        }
      }

      route.t = Math.min(t, SAGAS.length - 1);
      if (index !== route.index) {
        route.index = index;
        route.far = Math.max(route.far, index);
        publish();
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // sections grow as images and fonts land — re-measure once things settle
    const settle = setTimeout(onResize, 900);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/** Index of the saga in view — re-renders only when it changes. */
export function useRouteIndex() {
  const [i, setI] = useState(route.index);
  useEffect(() => {
    setI(route.index);
    subscribers.add(setI);
    return () => subscribers.delete(setI);
  }, []);
  return i;
}

/** Sail to a saga by id. */
export function sailTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}
