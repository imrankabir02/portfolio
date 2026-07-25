import { MY_DETAILS } from "../constants";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";
import JollyRoger from "./JollyRoger";
import Tilt from "./Tilt";

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
      {/* CTA panel */}
      <div data-reveal className="stage-3d">
      <Tilt
        max={5}
        className="relative p-10 overflow-hidden text-center glass rounded-3xl md:p-16 aura-border float-shadow"
      >
        <div className="absolute rounded-full -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/25 blur-3xl" />
        <div className="relative">
          <div className="flex justify-center mb-5">
            <JollyRoger size={54} className="text-pirate-red animate-bob" />
          </div>

          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-white/40 border border-parch-ink/20">
            <span className="dot-online" />
            <span className="font-mono text-[11px] tracking-wide text-parch-ink">
              RECRUITING CREW · let&apos;s build something that stays afloat
            </span>
          </div>

          <h2 className="text-4xl font-black sm:text-6xl font-display text-parch-ink">
            Ready to <span className="text-pirate-red">set sail?</span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 leading-relaxed text-parch-ink/80">
            Have a system that needs to stay correct under load — or one that
            already ran aground and you&apos;d rather it didn&apos;t again? Send a
            Den Den Mushi. I&apos;d like to hear about it.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-9 sm:flex-row">
            <a href={`mailto:${MY_DETAILS.email}`} className="btn-primary">
              <FiMail /> {MY_DETAILS.email}
            </a>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-parch-soft">
              <FiMapPin /> {MY_DETAILS.address}
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center transition-all border rounded-full w-11 h-11 bg-white/40 border-parch-ink/20 text-parch-soft hover:text-pirate-red hover:border-pirate-red/50 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
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
