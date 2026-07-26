import { useState, useEffect } from "react";
import { MY_DETAILS } from "../constants";
import profilePic from "../assets/Kabir.png";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FiArrowDown, FiDownload, FiMap } from "react-icons/fi";
import Tilt from "./Tilt";
import ArcTag from "./ArcTag";
import { SAGAS, sagaById, TOTAL_ARCS } from "../constants/sagas";

const SAGA = sagaById("home");

const ROLES = [
  "Backend Engineer",
  "Systems Builder",
  "Reliability-first",
  "Sails the Grand Line",
];

const SOCIALS = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/imrankabir02", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://www.github.com/imrankabir02", label: "GitHub" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/imrankabir02/", label: "LeetCode" },
  { Icon: SiHackerrank, href: "https://www.hackerrank.com/profile/imrankabir02", label: "HackerRank" },
];

/* typewriter that cycles through ROLES */
function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () =>
        setText((cur) =>
          del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)
        ),
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden stage-3d"
    >
      {/* the persistent SeaWorld (mounted in App) sails behind this section too;
          this scrim keeps the name legible over the ship */}
      <div className="absolute inset-0 hero-scrim" style={{ zIndex: 1 }} aria-hidden="true" />

      <div className="relative z-10 grid items-center w-full gap-12 px-6 pt-24 pb-16 mx-auto max-w-7xl md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── left: identity ── */}
        <div data-reveal>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-full sea-panel">
            <span className="dot-online" />
            <span className="font-mono text-[12px] tracking-widest uppercase text-parch-light/90">
              Recruiting crew · open to backend roles
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="section-index">SAGA {SAGA.no}</span>
            <span className="w-10 h-px bg-gold/50" />
            <span className="font-pirate text-lg tracking-wide text-gold-light">
              {SAGA.name}
            </span>
            <span className="saga-arc-count">
              {SAGAS.length} SAGAS · {TOTAL_ARCS} ARCS
            </span>
          </div>

          <ArcTag saga={SAGA} i={0} className="max-w-xs" />

          <p className="mb-3 eyebrow">&gt; Ahoy — the name&apos;s</p>

          <h1 className="font-pirate text-5xl sm:text-7xl xl:text-8xl leading-[0.9] tracking-wide">
            <span className="block text-parch-light drop-shadow-[0_2px_0_rgba(0,0,0,0.4)]">
              Mridha Imran
            </span>
            <span className="block gold-text">Kabir</span>
          </h1>

          <div className="flex items-center h-10 mt-6 font-mono text-lg sm:text-xl text-parch-light">
            <span className="mr-2 text-pirate-red">&#9670;</span>
            <span className="text-gold-light">{typed}</span>
            <span className="inline-block w-2.5 h-5 ml-1 bg-gold animate-blink shadow-[0_0_10px_rgba(244,196,48,0.8)]" />
          </div>

          <p className="max-w-xl mt-6 text-lg leading-relaxed text-parch-light/80">
            I build backends in Django, Laravel and FastAPI — the unglamorous
            below-deck engine room where slow queries get fast, jobs survive bad
            input, and systems tell you when they break.
          </p>

          {/* readouts */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 font-mono text-[12px] text-parch-light/75">
            <span>
              <span className="text-gold">CREW</span> ·{" "}
              {MY_DETAILS.role.replace(" at", "")}{" "}
              <a
                href={MY_DETAILS.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light hover:underline underline-offset-4"
              >
                {MY_DETAILS.company}
              </a>
            </span>
            <span>
              <span className="text-gold">PORT</span> · {MY_DETAILS.address}
            </span>
          </div>

          {/* actions */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a href="#projects" className="btn-primary">
              See the bounties <FiArrowDown />
            </a>
            <a
              href={cvFile}
              download="Mridha_Imran_Kabir_Backend.pdf"
              className="btn-ghost"
            >
              <FiDownload /> Log Book
            </a>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-saga-map"))
              }
              className="btn-ghost"
            >
              <FiMap /> Chart the voyage
            </button>
          </div>

          {/* socials */}
          <div className="flex items-center gap-3 mt-9">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center transition-all rounded-full w-11 h-11 sea-panel text-parch-light/70 hover:text-gold hover:border-gold/60 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ── right: Arc 02 — WANTED poster ── */}
        <div
          className="relative flex flex-col items-center lg:items-end"
          data-reveal
          style={{ transitionDelay: "120ms" }}
        >
          <ArcTag saga={SAGA} i={1} className="w-[19rem] sm:w-[21rem]" />

          {/* nail + hanging poster that sways + tilts in 3D */}
          <Tilt
            max={11}
            className="relative animate-sway origin-top w-[19rem] sm:w-[21rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="absolute z-20 -translate-x-1/2 rounded-full left-1/2 -top-2 w-3 h-3 bg-parch-dark shadow-[0_0_0_3px_rgba(120,84,40,0.6)]" />

            <article
              className="relative px-5 pt-5 pb-4 wanted rounded-sm float-shadow"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* red hire stamp. The wrapper carries the Z-lift: stampIn is a
                  `forwards` animation, so its transform would overwrite one set
                  on the stamp itself and drop it behind the portrait. */}
              <span
                className="absolute z-20 top-24 -right-3"
                style={{
                  transform: "translateZ(60px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="inline-block stamp text-[11px] animate-stamp">
                  available = true
                </span>
              </span>

              <p className="text-center wanted-label text-[2.6rem] sm:text-5xl tracking-[0.03em] whitespace-nowrap depth-2">
                For Hire
              </p>
              <p className="mt-1 mb-3 font-mono text-center text-[11px] tracking-[0.3em] text-parch-ink/70">
                AVAILABLE IMMEDIATELY
              </p>

              {/* portrait */}
              <div className="relative mx-auto w-full aspect-square max-w-[15rem] overflow-hidden border-2 border-parch-ink/70 bg-parch-dark depth-1">
                <img
                  src={profilePic}
                  alt="Portrait of Mridha Imran Kabir"
                  width="500"
                  height="500"
                  fetchPriority="high"
                  className="object-cover w-full h-full sepia-[0.35] contrast-105 transition-all duration-700 hover:sepia-0 hover:scale-105"
                />
                {/* corner brackets */}
                <span className="absolute w-4 h-4 border-t-2 border-l-2 top-1 left-1 border-parch-ink/70" />
                <span className="absolute w-4 h-4 border-t-2 border-r-2 top-1 right-1 border-parch-ink/70" />
                <span className="absolute w-4 h-4 border-b-2 border-l-2 bottom-1 left-1 border-parch-ink/70" />
                <span className="absolute w-4 h-4 border-b-2 border-r-2 bottom-1 right-1 border-parch-ink/70" />

                {/* health-check badge */}
                <span className="absolute bottom-1.5 left-1.5 flex items-center gap-1.5 px-2 py-0.5 font-mono text-[9px] tracking-widest bg-parch-ink/85 text-parch-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />
                  200 OK
                </span>
              </div>

              <p className="mt-3 font-pirate text-3xl text-center leading-none text-parch-ink tracking-[0.04em]">
                &ldquo;Backend&rdquo; Kabir
              </p>
              <p className="mt-1.5 font-mono text-center text-[10px] tracking-[0.18em] text-parch-ink/65">
                @imrankabir02 · role=backend.engineer
              </p>

              <div className="my-2.5 hairline" />

              {/* service datasheet */}
              <dl className="font-mono text-[10.5px] leading-none text-parch-ink/80">
                {[
                  ["UPTIME", "99.9 %"],
                  ["LATENCY", "p99 · 120 ms"],
                  ["RUNTIME", "py · php · sql"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline gap-2 py-[3px] border-b border-dotted border-parch-ink/25 last:border-0"
                  >
                    <dt className="tracking-[0.16em] text-parch-ink/55">{k}</dt>
                    <span className="flex-1" />
                    <dd className="tracking-wide text-parch-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="my-2.5 hairline" />

              {/* bounty, denominated in traffic */}
              <p className="mb-1 font-mono text-center text-[9px] tracking-[0.32em] text-parch-ink/55">
                BOUNTY
              </p>
              <div className="flex items-center justify-center gap-2 depth-1">
                <span className="font-mono text-2xl text-pirate-deep">&#931;</span>
                <span className="font-display text-3xl font-black tracking-wider text-parch-ink tabular-nums">
                  3,000,000,000
                </span>
                <span className="self-end mb-1 font-mono text-[10px] text-parch-ink/70">
                  req
                </span>
              </div>

              <p className="mt-2 font-mono text-center text-[10px] tracking-[0.24em] text-parch-ink/60">
                HTTP/1.1 · DHAKA · TLS &#10003;
              </p>
            </article>
          </Tilt>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute -translate-x-1/2 bottom-6 left-1/2 text-gold/70 hover:text-gold"
        aria-label="Scroll down"
      >
        <FiArrowDown className="animate-floaty" />
      </a>
    </section>
  );
};

export default Hero;
