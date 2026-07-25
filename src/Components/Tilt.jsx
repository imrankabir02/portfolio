import { useRef } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Mouse-driven 3D tilt wrapper. Children with .depth-* pop forward in Z. */
export default function Tilt({
  children,
  className = "",
  max = 9,
  scale = 1.0,
  style,
  as: Tag = "div",
  ...rest
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
      if (ref.current)
        ref.current.style.transform = `rotateX(${(-py * max).toFixed(
          2
        )}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`;
      raf.current = 0;
    });
  };

  const reset = () => {
    if (ref.current)
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt3d ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
