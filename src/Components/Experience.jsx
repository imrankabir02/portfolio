import { EXPERIENCES } from "../constants";
import { firstSentence } from "../utils";
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import EpCard from "./EpCard";
import { FiCompass } from "react-icons/fi";

const TONES = ["blue", "green", "purple", "red"];
const SAGA = sagaById("experience");

const OWNERSHIP = {
  LEAD: "Lead author",
  SOLE: "Sole author",
  BACKEND: "Backend",
  SOLO: "Built solo",
};

const Pills = ({ exp }) => (
  <p className="mb-1.5">
    <span className="pill pill--k">{OWNERSHIP[exp.ownership]}</span>
    {exp.year.includes("Present") ? (
      <span className="pill pill--g">Currently aboard</span>
    ) : (
      <span className="pill pill--b">Completed</span>
    )}
  </p>
);

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

                <EpCard
                  saga={SAGA}
                  arc={i}
                  tone={TONES[i % TONES.length]}
                  data-reveal
                  wrapperClassName={`w-full max-w-[21rem] ${
                    left ? "md:ml-auto" : ""
                  }`}
                  metric={exp.metric}
                  metricLabel={exp.metricLabel}
                  outcome={exp.outcome}
                  stamp={exp.ownership}
                  type="PORT OF CALL"
                  name={exp.role}
                  sub={exp.company}
                  glyph={<FiCompass size={104} aria-hidden="true" />}
                  attr={<FiCompass size={15} />}
                  code={exp.year.toUpperCase()}
                  cost={exp.technologies.length}
                  costLabel="STACK"
                  edge={exp.company}
                  detail={
                    <>
                      <Pills exp={exp} />
                      <p>{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((t) => (
                          <span key={t} className="chip-dark">
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  }
                >
                  <Pills exp={exp} />
                  <p className="text-[0.8rem] leading-snug">
                    {firstSentence(exp.description)}
                  </p>
                </EpCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
