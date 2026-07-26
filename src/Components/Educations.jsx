import { EDUCATIONS } from "../constants";
import { sagaById } from "../constants/sagas";
import SectionHead from "./SectionHead";
import TcgCard from "./TcgCard";
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
          <TcgCard
            key={i}
            saga={SAGA}
            arc={i}
            tone={TONES[i % TONES.length]}
            data-reveal
            wrapperClassName="w-full max-w-[20rem]"
            style={{ transitionDelay: `${i * 90}ms` }}
            max={9}
            power={(i === 0 ? 5 : 4) * 1000}
            stamp="UC"
            type="TRAINING"
            name={edu.title}
            sub={edu.name}
            glyph={<FiAward size={104} aria-hidden="true" />}
            attr={<FiAward size={15} />}
            code={`EDU13-${String(i + 1).padStart(3, "0")} UC 1`}
            cost={edu.year.replace(/\D/g, "").slice(-2)}
            costLabel="YEAR"
            edge="log-book.tcg"
          >
            <p className="mb-1.5">
              <span className="pill pill--k">{edu.year}</span>
              <span className="pill pill--g">Signature valid</span>
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
          </TcgCard>
        ))}
      </div>
    </section>
  );
};

export default Educations;
