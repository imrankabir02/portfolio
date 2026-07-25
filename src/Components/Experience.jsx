import { EXPERIENCES } from "../constants";
import SectionHead from "./SectionHead";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead
        index="04"
        kicker="Trajectory"
        title="The path so far"
        blurb="Four backend roles, each one a step deeper into ownership — from first APIs to architecting a multi-tenant platform."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* spine */}
        <div className="absolute top-0 bottom-0 w-px left-3 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-iris-cyan/30 to-transparent" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                data-reveal
                className={`relative pl-12 md:pl-0 md:w-1/2 ${
                  left ? "md:pr-10 md:mr-auto md:text-right" : "md:pl-10 md:ml-auto"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute top-6 left-3 -translate-x-1/2 md:left-auto ${
                    left ? "md:-right-[5px] md:translate-x-0" : "md:-left-[5px]"
                  } w-2.5 h-2.5 rounded-full bg-iris-cyan shadow-[0_0_14px_3px_rgba(79,227,208,0.6)]`}
                />

                <div className="p-6 glass rounded-2xl aura-border glass-hover">
                  <span className="inline-block px-2.5 py-1 mb-3 font-mono text-[10px] tracking-wide rounded-full text-iris-cyan bg-iris-cyan/10 border border-iris-cyan/20">
                    {exp.year}
                  </span>
                  <h3 className="text-lg font-semibold font-display">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-iris-blue">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-400">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
