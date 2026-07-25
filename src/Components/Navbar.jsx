import { useState, useEffect } from "react";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import { useActiveSection, useClock } from "../hooks";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import JollyRoger from "./JollyRoger";

const NAV_LINKS = [
  { label: "Deck", href: "#home", id: "home" },
  { label: "The Pirate", href: "#about", id: "about" },
  { label: "Powers", href: "#skills", id: "skills" },
  { label: "Bounties", href: "#projects", id: "projects" },
  { label: "Voyage", href: "#experience", id: "experience" },
  { label: "Hail", href: "#contact", id: "contact" },
];

const IDS = NAV_LINKS.map((l) => l.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const clock = useClock();

  useEffect(() => {
    const onScroll = () => open && setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl md:px-8">
        {/* wordmark */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-10 h-10">
            <span className="absolute inset-0 border rounded-full border-gold/40 group-hover:animate-spin-slow" />
            <JollyRoger size={26} className="text-gold" />
          </span>
          <span className="hidden font-pirate text-lg leading-none tracking-wide sm:block text-parch-light">
            KABIR<span className="text-gold">.</span>
            <span className="block font-mono text-[9px] tracking-[0.3em] text-gold/70 -mt-0.5">
              GRAND LINE LOG
            </span>
          </span>
        </a>

        {/* desktop pill */}
        <div className="items-center hidden gap-1 px-2 py-1 rounded-full lg:flex sea-panel">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                active === id
                  ? "text-sea-950"
                  : "text-parch-light/70 hover:text-parch-light"
              }`}
            >
              {active === id && (
                <span className="absolute inset-0 rounded-full bg-gold shadow-[0_0_16px_rgba(244,196,48,0.6)]" />
              )}
              <span className="relative font-medium">{label}</span>
            </a>
          ))}
        </div>

        {/* right cluster */}
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[11px] text-gold/70 xl:block tabular-nums">
            {clock}
          </span>
          <a
            href={cvFile}
            download="Mridha_Imran_Kabir_Backend.pdf"
            className="items-center hidden gap-2 px-4 py-2 font-mono text-xs rounded-full md:inline-flex sea-panel hover:border-gold text-parch-light group transition-colors"
          >
            <FiDownload className="transition-transform group-hover:translate-y-0.5" />
            Log Book
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex items-center justify-center rounded-full lg:hidden w-10 h-10 sea-panel text-parch-light"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-1 sea-panel rounded-2xl">
          <ul className="flex flex-col p-3">
            {NAV_LINKS.map(({ label, href, id }, i) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                    active === id
                      ? "text-gold bg-gold/10"
                      : "text-parch-light/70 hover:text-parch-light"
                  }`}
                >
                  <span>{label}</span>
                  <span className="font-mono text-[10px] text-gold/70">
                    {String(i).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
            <li className="p-1 mt-1">
              <a
                href={cvFile}
                download="Mridha_Imran_Kabir_Backend.pdf"
                className="flex items-center justify-center w-full gap-2 py-3 btn-primary"
              >
                <FiDownload /> Download Log Book
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
