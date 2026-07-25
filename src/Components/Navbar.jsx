import { useState, useEffect } from "react";
import cvFile from "../assets/Mridha_Imran_Kabir_Backend.pdf";
import { useActiveSection, useClock } from "../hooks";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Path", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
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
          <span className="relative flex items-center justify-center w-9 h-9">
            <span className="absolute inset-0 border rounded-full border-iris-cyan/40 group-hover:animate-spin-slow" />
            <span className="font-mono text-sm font-bold iris-text">MK</span>
          </span>
          <span className="hidden font-mono text-xs tracking-widest sm:block text-neutral-400">
            KABIR<span className="text-iris-cyan">/</span>OS
          </span>
        </a>

        {/* desktop pill */}
        <div className="items-center hidden gap-1 px-2 py-1 rounded-full lg:flex glass">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                active === id
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {active === id && (
                <span className="absolute inset-0 border rounded-full bg-white/10 border-iris-cyan/30" />
              )}
              <span className="relative">{label}</span>
            </a>
          ))}
        </div>

        {/* right cluster */}
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[11px] text-neutral-500 xl:block tabular-nums">
            {clock}
          </span>
          <a
            href={cvFile}
            download="Mridha_Imran_Kabir_Backend.pdf"
            className="items-center hidden gap-2 px-4 py-2 font-mono text-xs rounded-full md:inline-flex glass hover:border-iris-cyan/50 text-neutral-200 hover:text-white group transition-colors"
          >
            <FiDownload className="transition-transform group-hover:translate-y-0.5" />
            CV
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex items-center justify-center rounded-full lg:hidden w-10 h-10 glass text-neutral-200"
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
        <div className="mx-4 mt-1 glass rounded-2xl">
          <ul className="flex flex-col p-3">
            {NAV_LINKS.map(({ label, href, id }, i) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                    active === id
                      ? "text-white bg-white/5"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  <span className="font-mono text-[10px] text-iris-cyan/70">
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
                <FiDownload /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
