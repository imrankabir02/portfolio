import { MY_DETAILS } from "../constants";
import { sagaById, SAGAS, TOTAL_ARCS } from "../constants/sagas";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";
import JollyRoger from "./JollyRoger";
import Tilt from "./Tilt";
import ArcTag from "./ArcTag";

const SAGA = sagaById("contact");

const SOCIALS = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/imrankabir02", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://www.github.com/imrankabir02", label: "GitHub" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/imrankabir02/", label: "LeetCode" },
  { Icon: FaFacebook, href: "https://www.facebook.com/imrankabir02/", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/imrankabir02", label: "Instagram" },
];

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="px-6 pt-8 pb-10 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      {/* the final saga's own title card */}
      <div data-reveal className="max-w-2xl mx-auto mb-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
          <span className="section-index">SAGA {SAGA.no}</span>
          <span className="w-10 h-px bg-gold/50" />
          <span className="eyebrow">{SAGA.kicker}</span>
          <span className="text-gold/60">&#9670;</span>
          <span className="saga-arc-count">{SAGA.arcs.length} ARCS</span>
        </div>
        <p className="font-pirate text-xl tracking-wide text-gold-light">
          {SAGA.name}
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.28em] text-parch-light/45">
          FINAL LEG · {SAGAS.length} SAGAS · {TOTAL_ARCS} ARCS SAILED
        </p>
      </div>

      {/* Arc 01 — the hail, dealt as a wide EVENT card */}
      <ArcTag saga={SAGA} i={0} className="max-w-md mx-auto" />
      <div data-reveal className="slab-stage">
        <Tilt max={4} rest={3} className="tcg tcg--red">
          <span className="wall wall--t" aria-hidden="true" />
          <span className="wall wall--b" aria-hidden="true" />
          <span className="wall wall--l" aria-hidden="true" />
          <span className="wall wall--r" aria-hidden="true" />

          <div className="tcg__inner items-center px-6 py-12 text-center md:px-16 md:py-16">
            <div className="tcg__art" aria-hidden="true" />
            <span className="tcg__edge">den-den-mushi.tcg</span>

            <div className="relative w-full">
              <div className="flex justify-center mb-5">
                <JollyRoger size={64} className="text-white animate-bob" />
              </div>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 border rounded-full bg-black/40 border-white/25">
                <span className="dot-online" />
                <span className="font-mono text-[11px] tracking-wide text-white">
                  RECRUITING CREW · let&apos;s build something that stays afloat
                </span>
              </div>

              <span className="tcg__type">DEN DEN MUSHI</span>
              <h2 className="mt-2 tcg__name !text-4xl sm:!text-6xl">
                Ready to set sail?
              </h2>

              <p className="max-w-xl mx-auto mt-5 leading-relaxed text-white/85">
                Have a system that needs to stay correct under load — or one
                that already ran aground and you&apos;d rather it didn&apos;t
                again? Send a Den Den Mushi. I&apos;d like to hear about it.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 mt-9 sm:flex-row">
                <a href={`mailto:${MY_DETAILS.email}`} className="btn-primary">
                  <FiMail /> {MY_DETAILS.email}
                </a>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-white/75">
                  <FiMapPin /> {MY_DETAILS.address}
                </span>
              </div>

              {/* Arc 02 — the crew roster */}
              <p className="mt-10 font-mono text-[10px] tracking-[0.28em] text-white/60">
                ARC 02 — {SAGA.arcs[1].name}
              </p>
              <div className="flex items-center justify-center gap-3 mt-4">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center transition-all border rounded-full w-11 h-11 bg-black/35 border-white/25 text-white/80 hover:text-white hover:border-white hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <p className="mt-10 tcg__code">
                CTA13-001 L 1 · MARINE · GRAND LINE · EAST BLUE
              </p>
            </div>

            <span className="tcg__holo" aria-hidden="true" />
          </div>
        </Tilt>
      </div>

      {/* bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 mt-8 sm:flex-row">
        <p className="font-mono text-[11px] text-parch-light/60">
          © {year} Mridha Imran Kabir · GRAND LINE LOG · charted with React
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-parch-light/60 hover:text-gold group"
        >
          BACK TO THE CROW&apos;S NEST
          <span className="flex items-center justify-center w-8 h-8 rounded-full sea-panel group-hover:border-gold">
            <FiArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
