import { lazy, Suspense, useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

// the full episode is only ever needed once something is clicked
const EpModal = lazy(() => import("./EpModal"));

/**
 * An episode card — one arc of a saga, laid out the way a streaming guide
 * lays out an episode.
 *
 * Anatomy, top to bottom: 16:9 still (headline figure, ownership stamp,
 * arc number + arc name, stack depth where a runtime would sit) → title
 * block (type · code, name, affiliation, effect text, outcome) → footer
 * (attribute, context, links).
 *
 * It is one composited element. The tilt is a single CSS perspective
 * transform on the card itself, so nothing here needs a perspective host,
 * a `preserve-3d` subtree, or pointer-tracking JS — which is what made the
 * previous trading-card build expensive to render twenty times over. The
 * wrapper exists only to carry width and the reveal transition, which must
 * stay off the card so the two transforms never fight.
 *
 * The face is the short version. Anything passed as `detail` turns the card
 * into a button that opens the full episode in a modal — so the grid stays
 * scannable and the depth is one click away rather than always on screen.
 */
export default function EpCard({
  saga,
  arc,
  tone = "red",
  metric,
  metricLabel,
  outcome,
  stamp = "SR",
  edge,
  image,
  imageAlt = "",
  glyph,
  type,
  name,
  sub,
  attr,
  code,
  cost,
  costLabel = "COST",
  actions,
  detail,
  className = "",
  wrapperClassName = "",
  style,
  children,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const marked = saga != null && arc != null;
  const arcName = marked ? saga.arcs?.[arc]?.name : null;

  const card = {
    tone, saga, arc, image, imageAlt, glyph, metric, metricLabel, stamp,
    cost, costLabel, type, code, name, sub, outcome, edge, attr, actions,
  };

  return (
    <div className={`ep-slot ${wrapperClassName}`} style={style} {...props}>
      <article
        className={`ep ep--${tone} ${detail ? "ep--open" : ""} ${className}`}
      >
        <div className="ep__thumb">
          {image && <img className="ep__photo" src={image} alt={imageAlt} />}
          {glyph && (
            <span className="ep__glyph" aria-hidden="true">
              {glyph}
            </span>
          )}
          <span className="ep__scrim" aria-hidden="true" />

          {detail && (
            <span className="ep__more" aria-hidden="true">
              <FiMaximize2 size={12} /> FULL EPISODE
            </span>
          )}

          {/* the figure is a real one or the slot stays empty — nothing here
              is invented for the sake of filling it */}
          {metric != null && (
            <span className="ep__metric">
              <b>{metric}</b>
              {metricLabel && <span>{metricLabel}</span>}
            </span>
          )}
          {stamp && <span className="ep__stamp">{stamp}</span>}

          {/* the slug line, the way an episode carries its number: the arc
              name gives way to the figure on its right rather than under it */}
          {(marked || cost != null) && (
            <div className="ep__slug">
              {marked && (
                <span className="ep__no">
                  ARC {String(arc + 1).padStart(2, "0")}
                </span>
              )}
              {arcName && <span className="ep__title">{arcName}</span>}
              {cost != null && (
                <span className="ep__run">
                  <b>{cost}</b> {costLabel}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="ep__body">
          {(type || code) && (
            <p className="ep__kicker">
              {type}
              {code && <span>{code}</span>}
            </p>
          )}
          {name && <h3 className="ep__name">{name}</h3>}
          {sub && <p className="ep__sub">{sub}</p>}

          {children && <div className="ep__text">{children}</div>}
          {outcome && <p className="ep__outcome">{outcome}</p>}

          {(attr || edge || actions) && (
            <div className="ep__foot">
              {attr && (
                <span className="ep__attr" aria-hidden="true">
                  {attr}
                </span>
              )}
              {edge && <span className="ep__edge">{edge}</span>}
              {actions && <span className="ep__actions">{actions}</span>}
            </div>
          )}
        </div>

        {/* the whole card is the click target, laid over it the way the
            mini-chart does — the footer links sit above it and still win */}
        {detail && (
          <button
              type="button"
              onClick={() => setOpen(true)}
              className="ep__hit"
            aria-label={`Open the full episode — ${name || arcName || "this card"}`}
          />
        )}
      </article>

      {open && (
        <Suspense fallback={null}>
          <EpModal {...card} onClose={() => setOpen(false)}>
            {detail}
          </EpModal>
        </Suspense>
      )}
    </div>
  );
}
