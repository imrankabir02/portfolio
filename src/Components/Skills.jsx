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
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import EpCard from "./EpCard";

const SAGA = sagaById("skills");

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

// each stack layer gets its own colour identity, card type, and an honest note
// on how it is actually used day to day
const GROUP_CARD = {
  Languages: {
    tone: "yellow",
    type: "DEVIL FRUIT",
    edge: "written daily",
    stamp: "DAILY",
    use: "Production code",
  },
  Frameworks: {
    tone: "red",
    type: "FIGHTING STYLE",
    edge: "shipped in production",
    stamp: "SHIPPED",
    use: "Systems built end to end",
  },
  Data: {
    tone: "purple",
    type: "TREASURE",
    edge: "schema · indexes · migrations",
    stamp: "OWNED",
    use: "Schema, indexing, migrations",
  },
  Infrastructure: {
    tone: "blue",
    type: "SHIP & CREW",
    edge: "deployed and operated",
    stamp: "OPS",
    use: "Deployed and operated",
  },
};

const ALL = SKILL_GROUPS.flatMap((g) => g.items);

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead saga={SAGA} />

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, gi) => {
          const card = GROUP_CARD[group.heading];
          const [HeroIcon] = ICONS[group.items[0]];
          return (
            <EpCard
              key={group.heading}
              saga={SAGA}
              arc={gi}
              tone={card.tone}
              data-reveal
              style={{ transitionDelay: `${gi * 90}ms` }}
              metric={group.items.length}
              metricLabel={group.items.length === 1 ? "TOOL" : "TOOLS"}
              stamp={card.stamp}
              type={card.type}
              name={group.heading}
              sub={GROUP_TAGS[group.heading]}
              glyph={<HeroIcon size={84} aria-hidden="true" />}
              attr={<span className="text-xs font-black">{gi + 1}</span>}
              code={card.edge.toUpperCase()}
              edge={group.items.join(" · ")}
            >
              <p className="mb-1.5">
                <span className="pill pill--k">{card.use}</span>
                <span className="pill pill--b">{group.items[0]} primary</span>
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => {
                  const [Icon, color] = ICONS[item];
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2 group/i"
                      style={{ "--bc": color }}
                    >
                      <span className="flex items-center justify-center w-6 h-6 border rounded border-parch-light/15 bg-parch-light/[0.06] transition-colors group-hover/i:border-[var(--bc)]">
                        <Icon
                          aria-hidden="true"
                          size={13}
                          className="transition-colors text-parch-light/60 group-hover/i:text-[var(--bc)]"
                        />
                      </span>
                      <span className="text-[0.78rem] font-semibold">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </EpCard>
          );
        })}
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
