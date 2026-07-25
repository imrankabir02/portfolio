import { useRef, useState, useEffect } from "react";
import { ABOUT_TEXT, SKILLSETS, EXPERIENCES, PROJECTS } from "../constants";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import { useCountUp } from "../hooks";
import { FiDownload } from "react-icons/fi";

const STATS = [
  { value: EXPERIENCES.length, suffix: "", label: "Ports of call" },
  { value: PROJECTS.length, suffix: "", label: "Bounties claimed" },
  { value: 3, suffix: "", label: "Devil fruits mastered" },
  { value: 24, suffix: "/7", label: "On-watch mindset" },
];

const Stat = ({ value, suffix, label, run }) => {
  const n = useCountUp(value, run);
  return (
    <Tilt max={14} className="p-4 text-center glass rounded-2xl sm:text-left float-shadow">
      <div className="text-3xl font-black sm:text-4xl font-display text-pirate-red tabular-nums depth-2">
        {n}
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[11px] tracking-wide text-parch-soft depth-1">
        {label}
      </div>
    </Tilt>
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
        kicker="The Pirate"
        title="A backend that behaves under pressure"
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] stage-3d">
        {/* narrative */}
        <Tilt max={6} className="p-8 glass rounded-3xl aura-border float-shadow" data-reveal>
          <div className="space-y-4 text-lg leading-relaxed text-parch-ink/90">
            {ABOUT_TEXT.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="my-7 hairline" />

          <p className="mb-4 text-xs tracking-[0.28em] uppercase font-mono text-pirate-deep">
            Haki I fight with
          </p>
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
            <FiDownload /> Read the Log Book
          </a>
        </Tilt>

        {/* stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 stage-3d h-fit"
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
