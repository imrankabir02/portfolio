/* Shared section header: log-entry index + gilded title + optional blurb. */
const SectionHead = ({ index, kicker, title, blurb, center }) => (
  <div
    data-reveal
    className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}
  >
    <div
      className={`flex items-center gap-3 mb-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="section-index">LOG {index}</span>
      <span className="w-10 h-px bg-gold/50" />
      <span className="eyebrow">{kicker}</span>
      <span className="text-gold/60">&#9670;</span>
    </div>
    <h2 className="text-3xl font-extrabold sm:text-5xl font-display ink-title">
      {title}
    </h2>
    {blurb && (
      <p className="mt-4 text-lg leading-relaxed text-parch-light/75">{blurb}</p>
    )}
  </div>
);

export default SectionHead;
