/**
 * The chapter marker above a card.
 *
 * Every element inside a saga is one of its arcs, numbered in reading order —
 * this is that number and name, sitting on the shelf above the card rather than
 * inside it, so the card art stays untouched.
 */
export default function ArcTag({ saga, i, className = "" }) {
  const arc = saga?.arcs?.[i];
  if (!arc) return null;

  return (
    <p className={`arc-tag ${className}`}>
      <span className="arc-tag__no">ARC {String(i + 1).padStart(2, "0")}</span>
      <span className="arc-tag__name">{arc.name}</span>
      <span className="arc-tag__rule" aria-hidden="true" />
    </p>
  );
}
