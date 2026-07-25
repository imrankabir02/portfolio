import { EXPERIENCES } from "../constants";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead
        index="04"
        kicker="Voyage"
        title="Islands on the log pose"
        blurb="Four ports along the Grand Line, each one a step deeper into ownership — from first APIs to architecting a multi-tenant platform."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* the charted route */}
        <div className="absolute top-0 bottom-0 left-3 md:left-1/2 md:-translate-x-1/2 w-0.5 border-l-2 border-dashed border-gold/40" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                data-reveal
                className={`relative pl-12 md:pl-0 md:w-1/2 stage-3d ${
                  left ? "md:pr-10 md:mr-auto md:text-right" : "md:pl-10 md:ml-auto"
                }`}
              >
                {/* island marker */}
                <span
                  className={`absolute top-6 left-3 -translate-x-1/2 md:left-auto ${
                    left ? "md:-right-[7px] md:translate-x-0" : "md:-left-[7px]"
                  } w-3.5 h-3.5 rotate-45 bg-gold border-2 border-sea-900 shadow-[0_0_14px_3px_rgba(244,196,48,0.6)]`}
                />

                <Tilt max={9} className="p-6 glass rounded-2xl aura-border float-shadow">
                  <span className="inline-block px-2.5 py-1 mb-3 font-mono text-[10px] tracking-wide rounded-full text-pirate-deep bg-gold/25 border border-gold-deep/40 depth-1">
                    {exp.year}
                  </span>
                  <h3 className="text-lg font-bold font-display text-parch-ink">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-pirate-red">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-parch-ink/85">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      left ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
