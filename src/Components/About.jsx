import { useRef, useState, useEffect } from "react";
import { ABOUT_TEXT, SKILLSETS, EXPERIENCES, PROJECTS } from "../constants";
import profilePic from "../assets/image.png";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import SectionHead from "./SectionHead";
import TcgCard from "./TcgCard";
import Tilt from "./Tilt";
import ArcTag from "./ArcTag";
import { sagaById } from "../constants/sagas";
import { useCountUp } from "../hooks";
import { FiDownload, FiAnchor } from "react-icons/fi";

const SAGA = sagaById("about");

const STATS = [
  { value: EXPERIENCES.length, suffix: "", label: "PORTS OF CALL" },
  { value: PROJECTS.length, suffix: "", label: "BOUNTIES CLAIMED" },
  { value: 3, suffix: "", label: "DEVIL FRUITS" },
  { value: 24, suffix: "/7", label: "ON-WATCH" },
];

/* DON!! tiles — the little cards you tap for power */
const Don = ({ value, suffix, label, run }) => {
  const n = useCountUp(value, run);
  return (
    <div className="slab-stage">
      <Tilt max={14} rest={6} className="don">
        <div className="don__inner">
          <div className="don__n">
            {n}
            {suffix}
          </div>
          <div className="don__l">{label}</div>
        </div>
      </Tilt>
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
        <TcgCard
          saga={SAGA}
          arc={0}
          tone="red"
          data-reveal
          max={9}
          power={5000}
          stamp="L"
          type="LEADER"
          name={`"Backend" Kabir`}
          sub="Grand Line · Backend Engineer"
          image={profilePic}
          imageAlt="Mridha Imran Kabir"
          attr={<FiAnchor size={16} />}
          code="LDR13-001 L 1"
          cost={SKILLSETS.length}
          costLabel="HAKI"
          edge="straw-hat.tcg"
        >
          <p className="mb-1.5">
            <span className="pill pill--k">Activate:Main</span>
            <span className="pill pill--b">Once Per Sprint</span>
          </p>
          <p className="text-[0.78rem] leading-snug">
            Look at 5 slow endpoints from the top of your backlog and add up to 1
            to production, face-up. Then, put the rest in a queue in any order.
          </p>
          <p className="mt-1.5">
            {SKILLSETS.slice(0, 4).map((s) => (
              <span key={s} className="pill pill--g">
                {s}
              </span>
            ))}
          </p>
        </TcgCard>

        {/* Arc 02 — the log entry beside it */}
        <div data-reveal style={{ transitionDelay: "120ms" }}>
          <ArcTag saga={SAGA} i={1} />
          <div className="space-y-4 text-lg leading-relaxed text-parch-light/85">
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
