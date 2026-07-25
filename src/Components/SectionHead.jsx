/* Shared section header: index tag + iris title + optional blurb. */
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
      <span className="section-index">{index}</span>
      <span className="w-8 h-px bg-iris-cyan/40" />
      <span className="eyebrow">{kicker}</span>
    </div>
    <h2 className="text-3xl font-extrabold sm:text-4xl font-display neon-title">
      {title}
    </h2>
    {blurb && (
      <p className="mt-4 text-lg leading-relaxed text-purple-200/70">{blurb}</p>
    )}
  </div>
);

export default SectionHead;
