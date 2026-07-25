import { EDUCATIONS } from "../constants";
import SectionHead from "./SectionHead";
import { FiAward } from "react-icons/fi";

const Educations = () => {
  return (
    <section
      id="educations"
      className="px-6 pt-4 pb-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead index="05" kicker="Foundation" title="Education" />

      <div className="grid max-w-4xl gap-6 mx-auto">
        {EDUCATIONS.map((edu, i) => (
          <div
            key={i}
            data-reveal
            className="flex flex-col gap-5 p-7 glass rounded-2xl aura-border glass-hover sm:flex-row sm:items-center"
          >
            <span className="flex items-center justify-center border w-14 h-14 shrink-0 rounded-2xl border-iris-cyan/20 bg-iris-cyan/5 text-iris-cyan">
              <FiAward size={24} />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold font-display">
                {edu.title}
              </h3>
              <p className="text-sm font-medium text-iris-blue">{edu.name}</p>
              <p className="mt-1 text-sm text-neutral-500">{edu.location}</p>
            </div>
            <span className="px-3 py-1.5 font-mono text-[11px] rounded-full text-neutral-300 bg-white/5 border border-white/10 whitespace-nowrap">
              {edu.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
