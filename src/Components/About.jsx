import { useRef, useState, useEffect } from "react";
import {
  ABOUT_TEXT,
  SKILLSETS,
  SKILL_GROUPS,
  EXPERIENCES,
  PROJECTS,
} from "../constants";
import profilePic from "../assets/image.png";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import SectionHead from "./SectionHead";
import EpCard from "./EpCard";
import ArcTag from "./ArcTag";
import { sagaById } from "../constants/sagas";
import { useCountUp } from "../hooks";
import { FiDownload, FiAnchor } from "react-icons/fi";

const SAGA = sagaById("about");

// systems a stranger could actually hit today, versus ones still in a repo
const RUNNING = PROJECTS.filter(
  (p) => p.status === "In production" || p.status === "Live"
).length;

const FRAMEWORKS =
  SKILL_GROUPS.find((g) => g.heading === "Frameworks")?.items.length ?? 0;

// every figure here counts something on this page — nothing decorative
const STATS = [
  { value: EXPERIENCES.length, suffix: "", label: "ROLES HELD" },
  { value: PROJECTS.length, suffix: "", label: "SYSTEMS BUILT" },
  { value: RUNNING, suffix: "", label: "IN PRODUCTION" },
  { value: FRAMEWORKS, suffix: "", label: "FRAMEWORKS" },
];

/* DON!! tiles — the little cards you tap for power */
const Don = ({ value, suffix, label, run }) => {
  const n = useCountUp(value, run);
  return (
    <div className="don">
      <div className="don__n">
        {n}
        {suffix}
      </div>
      <div className="don__l">{label}</div>
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
      <SectionHead saga={SAGA} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
        {/* Arc 01 — the leader card */}
        <EpCard
          saga={SAGA}
          arc={0}
          tone="red"
          data-reveal
          metric={RUNNING}
          metricLabel="IN PRODUCTION"
          outcome="Available now for backend roles — Django, Laravel, FastAPI."
          stamp="BACKEND"
          type="BACKEND ENGINEER"
          name={`"Backend" Kabir`}
          sub="Bagerhat, Bangladesh · open to relocate or remote"
          image={profilePic}
          imageAlt="Mridha Imran Kabir"
          attr={<FiAnchor size={15} />}
          code={`${EXPERIENCES.length} ROLES · ${PROJECTS.length} SYSTEMS`}
          cost={SKILLSETS.length}
          costLabel="AREAS"
          edge="open to backend roles"
        >
          <p className="mb-1.5">
            <span className="pill pill--k">Owns systems end to end</span>
            <span className="pill pill--b">Correct under load</span>
          </p>
          <p className="text-[0.78rem] leading-snug">
            Schema through migration, deployment, and the Linux boxes it runs on
            — multi-tenant SaaS, workflow engines, and data pipelines that keep
            their promises when the input is bad and the traffic is concurrent.
          </p>
          <p className="mt-1.5">
            {SKILLSETS.slice(0, 4).map((s) => (
              <span key={s} className="pill pill--g">
                {s}
              </span>
            ))}
          </p>
        </EpCard>

        {/* Arc 02 — the log entry beside it */}
        <div data-reveal style={{ transitionDelay: "120ms" }}>
          <ArcTag saga={SAGA} i={1} />
          <div className="log-scrim space-y-4 text-lg leading-relaxed text-parch-light/90">
            {ABOUT_TEXT.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <div className="my-7 hairline-gold" />

          {/* Arc 03 — the arc marker already names it */}
          <ArcTag saga={SAGA} i={2} className="mb-4" />
          <div className="flex flex-wrap gap-2.5">
            {SKILLSETS.map((skill) => (
              <span key={skill} className="chip-dark">
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

          {/* Arc 04 — DON!! deck */}
          <div className="mt-10">
            <ArcTag saga={SAGA} i={3} />
          </div>
          <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <Don key={s.label} {...s} run={run} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
