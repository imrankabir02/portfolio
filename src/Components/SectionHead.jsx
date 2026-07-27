import { SAGAS } from "../constants/sagas";

/**
 * A saga's opening title card.
 *
 * Reads everything off the saga itself — number, name, kicker, title, blurb and
 * how many arcs it contains — so the page, the navbar and the 3D map are all
 * describing the same voyage from one source.
 */
const SectionHead = ({ saga, center }) => {
  const n = saga.arcs.length;
  const pos = SAGAS.findIndex((s) => s.id === saga.id) + 1;

  return (
    <div
      data-reveal
      className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex flex-wrap items-center gap-3 mb-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="section-index">SAGA {saga.no}</span>
        <span className="w-10 h-px bg-gold/50" />
        <span className="eyebrow">{saga.kicker}</span>
        <span className="text-gold/60">&#9670;</span>
        <span className="saga-arc-count">
          {n} ARC{n === 1 ? "" : "S"}
        </span>
      </div>

      <p
        className={`mb-4 font-pirate text-xl tracking-wide text-gold-light ${
          center ? "" : ""
        }`}
      >
        {saga.name}
      </p>

      <h2 className="text-3xl font-extrabold sm:text-5xl font-display ink-title">
        {saga.title}
      </h2>

      {saga.blurb && (
        <p className="mt-4 text-lg leading-relaxed text-parch-light/88">
          {saga.blurb}
        </p>
      )}

      <p
        className={`mt-5 font-mono text-[10px] tracking-[0.28em] text-parch-light/45 ${
          center ? "" : ""
        }`}
      >
        LEG {String(pos).padStart(2, "0")} OF {String(SAGAS.length).padStart(2, "0")}
        {" · "}LOG {saga.log}
      </p>
    </div>
  );
};

export default SectionHead;
