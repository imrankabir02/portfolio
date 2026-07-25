import {
  SiPhp,
  SiPython,
  SiJavascript,
  SiLaravel,
  SiDjango,
  SiFastapi,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiRedis,
  SiCelery,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SKILL_GROUPS } from "../constants";
import SectionHead from "./SectionHead";

// Keyed by the strings in SKILL_GROUPS; each entry is [icon, brand colour].
const ICONS = {
  Python: [SiPython, "#3776AB"],
  PHP: [SiPhp, "#777BB4"],
  JavaScript: [SiJavascript, "#F7DF1E"],
  Laravel: [SiLaravel, "#FF2D20"],
  Django: [SiDjango, "#44B78B"],
  FastAPI: [SiFastapi, "#009688"],
  React: [SiReact, "#61DAFB"],
  MySQL: [SiMysql, "#4479A1"],
  PostgreSQL: [SiPostgresql, "#4169E1"],
  MSSQL: [SiMicrosoftsqlserver, "#CC2927"],
  Redis: [SiRedis, "#DC382D"],
  Celery: [SiCelery, "#37814A"],
  Docker: [SiDocker, "#2496ED"],
  Linux: [SiLinux, "#FCC624"],
  Nginx: [SiNginx, "#009639"],
  AWS: [FaAws, "#FF9900"],
  Git: [SiGit, "#F05032"],
};

const ALL = SKILL_GROUPS.flatMap((g) => g.items);

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead
        index="02"
        kicker="Stack"
        title="Tools I reach for"
        blurb="The kit behind the systems — languages, frameworks, data stores and the infrastructure they run on."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, gi) => (
          <div
            key={group.heading}
            data-reveal
            style={{ transitionDelay: `${gi * 90}ms` }}
            className="p-6 glass rounded-2xl aura-border glass-hover"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="eyebrow">{group.heading}</h3>
              <span className="font-mono text-[10px] text-neutral-600">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="space-y-3.5">
              {group.items.map((item) => {
                const [Icon, color] = ICONS[item];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 group/i"
                    style={{ "--bc": color }}
                  >
                    <span className="flex items-center justify-center border rounded-lg w-9 h-9 border-white/8 bg-white/5 transition-colors group-hover/i:border-[var(--bc)]">
                      <Icon
                        aria-hidden="true"
                        size={17}
                        className="transition-colors text-neutral-400 group-hover/i:text-[var(--bc)]"
                      />
                    </span>
                    <span className="text-sm text-neutral-300 group-hover/i:text-white">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* stack ticker */}
      <div
        className="relative mt-10 overflow-hidden glass rounded-full py-3 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        data-reveal
      >
        <div className="flex w-max gap-8 animate-marquee">
          {[...ALL, ...ALL].map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase text-neutral-500"
            >
              {t}
              <span className="ml-8 text-iris-cyan/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
