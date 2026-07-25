import { useState, useEffect } from "react";
import { MY_DETAILS } from "../constants";
import profilePic from "../assets/Kabir.png";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FiArrowDown, FiDownload } from "react-icons/fi";

const ROLES = [
  "Backend Engineer",
  "Systems Builder",
  "Reliability-first",
  "The 2am details",
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
      className="relative flex items-center min-h-screen px-6 pt-24 pb-16 mx-auto max-w-7xl md:px-8"
    >
      {/* retro sun rising behind the portrait (bottom on mobile, right on desktop) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none -translate-x-1/2 left-1/2 bottom-8 w-[17rem] h-[17rem] sm:w-[22rem] sm:h-[22rem] lg:w-[28rem] lg:h-[28rem] lg:bottom-auto lg:top-24 lg:left-auto lg:right-20 lg:translate-x-0 retro-sun animate-sun-pulse -z-0 opacity-90"
      />

      <div className="relative z-10 grid items-center w-full gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ── left: identity ── */}
        <div data-reveal>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-md glass">
            <span className="dot-online" />
            <span className="font-mono text-[12px] tracking-widest uppercase text-green-300">
              Available · open to backend roles
            </span>
          </div>

          <p className="mb-3 eyebrow">&gt; Hello — I&apos;m</p>

          <h1 className="font-display uppercase text-4xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight animate-flicker">
            <span className="block chrome-text">Mridha Imran</span>
            <span className="block iris-text">Kabir</span>
          </h1>

          <div className="flex items-center h-10 mt-6 font-mono text-lg sm:text-xl text-cyan-200">
            <span className="mr-2 neon-pink">&#9642;</span>
            <span className="neon-cyan">{typed}</span>
            <span className="inline-block w-2.5 h-5 ml-1 bg-iris-cyan animate-blink shadow-[0_0_10px_#05d9e8]" />
          </div>

          <p className="max-w-xl mt-6 text-lg leading-relaxed text-purple-200/80">
            I build backends in Django, Laravel and FastAPI — the unglamorous
            layer where slow queries get fast, jobs survive bad input, and
            systems tell you when they break.
          </p>

          {/* readouts */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 font-mono text-[12px] text-purple-300/80">
            <span>
              <span className="neon-pink">ROLE</span> ·{" "}
              {MY_DETAILS.role.replace(" at", "")}{" "}
              <a
                href={MY_DETAILS.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-cyan hover:underline underline-offset-4"
              >
                {MY_DETAILS.company}
              </a>
            </span>
            <span>
              <span className="neon-pink">LOC</span> · {MY_DETAILS.address}
            </span>
          </div>

          {/* actions */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a href="#projects" className="btn-primary">
              View the work <FiArrowDown />
            </a>
            <a
              href={cvFile}
              download="Mridha_Imran_Kabir_Backend.pdf"
              className="btn-ghost"
            >
              <FiDownload /> Résumé
            </a>
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
                className="flex items-center justify-center transition-all rounded-full w-11 h-11 glass text-neutral-400 hover:text-white hover:border-iris-cyan/50 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ── right: orbital portrait ── */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-reveal
          style={{ transitionDelay: "120ms" }}
        >
          <div className="relative w-[19rem] h-[19rem] sm:w-[23rem] sm:h-[23rem] flex items-center justify-center">
            {/* orbit rings */}
            <span className="absolute rounded-full inset-0 border border-white/10 animate-spin-slow" />
            <span className="absolute border rounded-full inset-6 border-iris-cyan/20 animate-spin-slower" />
            <span className="absolute rounded-full -inset-3 border border-dashed border-white/5 animate-[spinSlow_60s_linear_infinite]" />
            {/* orbiting node */}
            <span className="absolute top-0 -translate-x-1/2 left-1/2">
              <span className="block w-2.5 h-2.5 rounded-full bg-iris-cyan shadow-[0_0_16px_4px_rgba(79,227,208,0.6)] animate-floaty" />
            </span>

            {/* glow */}
            <span className="absolute rounded-full inset-8 bg-iris-cyan/10 blur-3xl" />

            <div className="relative overflow-hidden border shadow-2xl w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] border-white/10 glass">
              <img
                src={profilePic}
                alt="Portrait of Mridha Imran Kabir"
                width="500"
                height="500"
                fetchPriority="high"
                className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 font-mono text-[10px] text-cyan-200 bg-gradient-to-t from-black/80 to-transparent">
                <span className="neon-pink">&#9679; REC</span>
                <span>PLAYER 1 · MK—1987</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute -translate-x-1/2 bottom-6 left-1/2 text-neutral-600 hover:text-iris-cyan"
        aria-label="Scroll down"
      >
        <FiArrowDown className="animate-floaty" />
      </a>
    </section>
  );
};

export default Hero;
