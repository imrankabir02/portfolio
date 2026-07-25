import { MY_DETAILS } from "../constants";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";

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
      <div
        data-reveal
        className="relative p-10 overflow-hidden text-center glass rounded-3xl md:p-16 aura-border"
      >
        <div className="absolute rounded-full -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-iris-cyan/10 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full glass">
            <span className="dot-online" />
            <span className="font-mono text-[11px] tracking-wide text-neutral-300">
              OPEN TO WORK · let&apos;s build something reliable
            </span>
          </div>

          <h2 className="text-4xl font-bold sm:text-6xl font-display">
            Let&apos;s <span className="iris-text">talk backend.</span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 leading-relaxed text-neutral-400">
            Have a system that needs to stay correct under load — or one that
            already broke and you&apos;d rather it didn&apos;t again? I&apos;d
            like to hear about it.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-9 sm:flex-row">
            <a href={`mailto:${MY_DETAILS.email}`} className="btn-primary">
              <FiMail /> {MY_DETAILS.email}
            </a>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500">
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
                className="flex items-center justify-center transition-all rounded-full w-11 h-11 glass text-neutral-400 hover:text-white hover:border-iris-cyan/50 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 mt-8 sm:flex-row">
        <p className="font-mono text-[11px] text-neutral-600">
          © {year} Mridha Imran Kabir · KABIR<span className="text-iris-cyan">/</span>OS · built with React
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-neutral-500 hover:text-iris-cyan group"
        >
          BACK TO TOP
          <span className="flex items-center justify-center w-8 h-8 rounded-full glass group-hover:border-iris-cyan/50">
            <FiArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
