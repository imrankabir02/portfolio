import { EDUCATIONS } from "../constants";
import SectionHead from "./SectionHead";
import Tilt from "./Tilt";
import { FiAward } from "react-icons/fi";

const Educations = () => {
  return (
    <section
      id="educations"
      className="px-6 pt-4 pb-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead index="05" kicker="Training" title="Where the sword was forged" />

      <div className="grid max-w-4xl gap-6 mx-auto stage-3d">
        {EDUCATIONS.map((edu, i) => (
          <Tilt
            key={i}
            max={7}
            data-reveal
            className="flex flex-col gap-5 p-7 glass rounded-2xl aura-border float-shadow sm:flex-row sm:items-center"
          >
            <span className="flex items-center justify-center border w-14 h-14 shrink-0 rounded-2xl border-gold-deep/40 bg-gold/20 text-pirate-deep depth-1">
              <FiAward size={24} />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold font-display text-parch-ink">
                {edu.title}
              </h3>
              <p className="text-sm font-semibold text-pirate-red">{edu.name}</p>
              <p className="mt-1 text-sm text-parch-soft">{edu.location}</p>
            </div>
            <span className="px-3 py-1.5 font-mono text-[11px] rounded-full text-parch-ink bg-white/40 border border-parch-ink/20 whitespace-nowrap">
              {edu.year}
            </span>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Educations;
