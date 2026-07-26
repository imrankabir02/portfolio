import { EDUCATIONS } from "../constants";
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import EpCard from "./EpCard";
import { FiAward } from "react-icons/fi";

const TONES = ["purple", "yellow", "green", "blue"];
const SAGA = sagaById("educations");

const Educations = () => {
  return (
    <section
      id="educations"
      className="px-6 pt-4 pb-24 mx-auto scroll-mt-24 max-w-7xl md:px-8"
    >
      <SectionHead saga={SAGA} />

      <div className="grid max-w-3xl gap-8 mx-auto sm:grid-cols-2 justify-items-center">
        {EDUCATIONS.map((edu, i) => (
          <EpCard
            key={i}
            saga={SAGA}
            arc={i}
            tone={TONES[i % TONES.length]}
            data-reveal
            wrapperClassName="w-full max-w-[20rem]"
            style={{ transitionDelay: `${i * 90}ms` }}
            metric={edu.year.trim().slice(-4)}
            metricLabel="COMPLETED"
            stamp={i === 0 ? "B.SC" : "HSC"}
            type="TRAINING"
            name={edu.title}
            sub={edu.name}
            glyph={<FiAward size={88} aria-hidden="true" />}
            attr={<FiAward size={14} />}
            code={edu.location.toUpperCase()}
            edge={edu.name}
          >
            <p className="mb-1.5">
              <span className="pill pill--k">{edu.year.trim()}</span>
              <span className="pill pill--g">Awarded</span>
            </p>
            <div className="kv">
              <span className="kv-k">issuer</span>
              <span className="kv-fill" />
              <span className="kv-v">{edu.name}</span>
            </div>
            <div className="mt-1 kv">
              <span className="kv-k">port</span>
              <span className="kv-fill" />
              <span className="kv-v">{edu.location}</span>
            </div>
          </EpCard>
        ))}
      </div>
    </section>
  );
};

export default Educations;
