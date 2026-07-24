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

// Keyed by the strings in SKILL_GROUPS; each entry is [icon, brand hover colour].
const ICONS = {
  PHP: [SiPhp, "group-hover:text-[#777BB4]"],
  Python: [SiPython, "group-hover:text-[#3776AB]"],
  JavaScript: [SiJavascript, "group-hover:text-[#F7DF1E]"],
  Laravel: [SiLaravel, "group-hover:text-[#FF2D20]"],
  Django: [SiDjango, "group-hover:text-[#092E20]"],
  FastAPI: [SiFastapi, "group-hover:text-[#009688]"],
  React: [SiReact, "group-hover:text-[#61DAFB]"],
  MySQL: [SiMysql, "group-hover:text-[#4479A1]"],
  PostgreSQL: [SiPostgresql, "group-hover:text-[#4169E1]"],
  MSSQL: [SiMicrosoftsqlserver, "group-hover:text-[#CC2927]"],
  Redis: [SiRedis, "group-hover:text-[#DC382D]"],
  Celery: [SiCelery, "group-hover:text-[#37814A]"],
  Docker: [SiDocker, "group-hover:text-[#2496ED]"],
  Linux: [SiLinux, "group-hover:text-[#FCC624]"],
  Nginx: [SiNginx, "group-hover:text-[#009639]"],
  AWS: [FaAws, "group-hover:text-[#FF9900]"],
  Git: [SiGit, "group-hover:text-[#F05032]"],
};

const Skills = () => {
  return (
    <div id="skills" className="py-12 lg:py-20">
      <h1 className="mb-12 text-4xl font-bold text-center">Skills</h1>

      <div className="max-w-5xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.heading} className="p-6 bgcard">
              <h2 className="mb-5 text-xs font-semibold tracking-widest text-center uppercase text-neutral-500">
                {group.heading}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item) => {
                  const [Icon, hoverColor] = ICONS[item];
                  return (
                    <li key={item} className="flex items-center gap-3 group">
                      <Icon
                        aria-hidden="true"
                        className={`text-xl shrink-0 transition-colors ${hoverColor}`}
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
