import { EXPERIENCES } from "../constants";
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import TcgCard from "./TcgCard";
import { FiCompass } from "react-icons/fi";

const TONES = ["blue", "green", "purple", "red"];
const SAGA = sagaById("experience");

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead saga={SAGA} />

      <div className="relative max-w-5xl mx-auto">
        {/* the charted route */}
        <div className="absolute top-0 bottom-0 left-3 md:left-1/2 md:-translate-x-1/2 w-0.5 border-l-2 border-dashed border-gold/40" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative pl-12 md:pl-0 md:w-1/2 ${
                  left ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* island marker */}
                <span
                  className={`absolute top-8 left-3 -translate-x-1/2 md:left-auto ${
                    left ? "md:-right-[7px] md:translate-x-0" : "md:-left-[7px]"
                  } w-3.5 h-3.5 rotate-45 bg-gold border-2 border-sea-900 shadow-[0_0_14px_3px_rgba(244,196,48,0.6)]`}
                />

                <TcgCard
                  saga={SAGA}
                  arc={i}
                  tone={TONES[i % TONES.length]}
                  data-reveal
                  wrapperClassName={`w-full max-w-[21rem] ${
                    left ? "md:ml-auto" : ""
                  }`}
                  max={9}
                  power={(i + 2) * 1000}
                  stamp={i === 0 ? "L" : "SR"}
                  type="EVENT"
                  name={exp.role}
                  sub={exp.company}
                  glyph={<FiCompass size={104} aria-hidden="true" />}
                  attr={<FiCompass size={15} />}
                  code={`VOY13-${String(i + 1).padStart(3, "0")} ${
                    i === 0 ? "L" : "SR"
                  } 1`}
                  cost={exp.technologies.length}
                  costLabel="TOOLS"
                  edge={`${exp.year.replace(/\s/g, "")}.tcg`}
                >
                  <p className="mb-1.5">
                    <span className="pill pill--k">{exp.year}</span>
                    {i === 0 ? (
                      <span className="pill pill--g">Currently aboard</span>
                    ) : (
                      <span className="pill pill--b">Log closed</span>
                    )}
                  </p>
                  <p className="text-[0.78rem] leading-snug">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[0.62rem] font-semibold border rounded border-black/25 bg-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TcgCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
