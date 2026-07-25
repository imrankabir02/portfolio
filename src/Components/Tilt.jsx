import { useRef } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Mouse-driven 3D tilt wrapper.
   - children with .depth-* pop forward in Z
   - the whole slab lifts toward the viewer on hover (`lift`)
   - --gx/--gy track the pointer so surfaces can catch a highlight */
export default function Tilt({
  children,
  className = "",
  max = 9,
  scale = 1.0,
  lift = 16,
  rest = 0, // resting rotateX, in degrees — the pose the object sits at
  style,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const raf = useRef(0);
  const off = useRef(reduced());

  const onMove = (e) => {
    if (off.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (el) {
        el.style.transform = `rotateX(${(rest - py * max).toFixed(
          2
        )}deg) rotateY(${(px * max).toFixed(
          2
        )}deg) translateZ(${lift}px) scale(${scale})`;
        el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
      }
      raf.current = 0;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `rotateX(${rest}deg) rotateY(0deg) translateZ(0) scale(1)`;
    el.style.setProperty("--gx", "50%");
    el.style.setProperty("--gy", "0%");
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt3d ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
}
