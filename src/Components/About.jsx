import { useRef, useState, useEffect } from "react";
import { ABOUT_TEXT, SKILLSETS, EXPERIENCES, PROJECTS } from "../constants";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import SectionHead from "./SectionHead";
import { useCountUp } from "../hooks";
import { FiDownload } from "react-icons/fi";

const STATS = [
  { value: EXPERIENCES.length, suffix: "", label: "Roles held" },
  { value: PROJECTS.length, suffix: "", label: "Systems shipped" },
  { value: 3, suffix: "", label: "Core frameworks" },
  { value: 24, suffix: "/7", label: "On-call mindset" },
];

const Stat = ({ value, suffix, label, run }) => {
  const n = useCountUp(value, run);
  return (
    <div className="p-4 text-center glass rounded-2xl sm:text-left">
      <div className="text-3xl font-bold sm:text-4xl font-display iris-text tabular-nums">
        {n}
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[11px] tracking-wide text-neutral-500">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef();
  const [run, setRun] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead
        index="01"
        kicker="Profile"
        title="A backend that behaves under pressure"
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* narrative */}
        <div className="p-8 glass rounded-3xl aura-border glass-hover" data-reveal>
          <div className="space-y-4 text-lg font-light leading-relaxed text-neutral-300">
            {ABOUT_TEXT.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="my-7 hairline" />

          <p className="mb-4 eyebrow">What I&apos;m good at</p>
          <div className="flex flex-wrap gap-2.5">
            {SKILLSETS.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>

          <a
            href={cvFile}
            download="Mridha_Imran_Kabir_Backend.pdf"
            className="mt-8 btn-primary"
          >
            <FiDownload /> Download CV
          </a>
        </div>

        {/* stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 h-fit"
          data-reveal
          style={{ transitionDelay: "120ms" }}
        >
          {STATS.map((s) => (
            <Stat key={s.label} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
