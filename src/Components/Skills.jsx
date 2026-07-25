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
import Tilt from "./Tilt";

// Keyed by the strings in SKILL_GROUPS; each entry is [icon, brand colour].
const ICONS = {
  Python: [SiPython, "#3776AB"],
  PHP: [SiPhp, "#777BB4"],
  JavaScript: [SiJavascript, "#B59A00"],
  Laravel: [SiLaravel, "#FF2D20"],
  Django: [SiDjango, "#2b7a4b"],
  FastAPI: [SiFastapi, "#009688"],
  React: [SiReact, "#2a9fc4"],
  MySQL: [SiMysql, "#4479A1"],
  PostgreSQL: [SiPostgresql, "#4169E1"],
  MSSQL: [SiMicrosoftsqlserver, "#CC2927"],
  Redis: [SiRedis, "#DC382D"],
  Celery: [SiCelery, "#37814A"],
  Docker: [SiDocker, "#2496ED"],
  Linux: [SiLinux, "#a97f00"],
  Nginx: [SiNginx, "#009639"],
  AWS: [FaAws, "#d9820a"],
  Git: [SiGit, "#F05032"],
};

// One Piece-flavoured names for each stack layer.
const GROUP_TAGS = {
  Languages: "Tongues of the sea",
  Frameworks: "Fighting styles",
  Data: "The treasure vault",
  Infrastructure: "The ship & crew",
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
        kicker="Powers"
        title="The arsenal aboard"
        blurb="Every pirate has their devil fruit and their crew — here's the kit behind the systems: languages, fighting styles, the treasure vault, and the ship it all runs on."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 stage-3d">
        {SKILL_GROUPS.map((group, gi) => (
          <Tilt
            key={group.heading}
            max={10}
            data-reveal
            style={{ transitionDelay: `${gi * 90}ms` }}
            className="p-6 glass rounded-2xl aura-border float-shadow"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-bold tracking-wide uppercase font-display text-parch-ink">
                {group.heading}
              </h3>
              <span className="font-mono text-[10px] text-parch-soft">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mb-5 font-mono text-[10px] italic text-pirate-deep/80">
              {GROUP_TAGS[group.heading]}
            </p>
            <ul className="space-y-3.5">
              {group.items.map((item) => {
                const [Icon, color] = ICONS[item];
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 group/i"
                    style={{ "--bc": color }}
                  >
                    <span className="flex items-center justify-center border rounded-lg w-9 h-9 border-parch-ink/20 bg-white/40 transition-colors group-hover/i:border-[var(--bc)]">
                      <Icon
                        aria-hidden="true"
                        size={17}
                        className="transition-colors text-parch-soft group-hover/i:text-[var(--bc)]"
                      />
                    </span>
                    <span className="text-sm font-medium text-parch-ink/85 group-hover/i:text-parch-ink">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Tilt>
        ))}
      </div>

      {/* stack ticker — a rope of tools */}
      <div
        className="relative mt-10 overflow-hidden sea-panel rounded-full py-3 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        data-reveal
      >
        <div className="flex w-max gap-8 animate-marquee">
          {[...ALL, ...ALL].map((t, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-widest uppercase text-parch-light/60"
            >
              {t}
              <span className="ml-8 text-gold/50">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
