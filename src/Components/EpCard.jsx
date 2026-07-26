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
  className = "",
  wrapperClassName = "",
  style,
  children,
  ...props
}) {
  const marked = saga != null && arc != null;
  const arcName = marked ? saga.arcs?.[arc]?.name : null;

  return (
    <div className={`ep-slot ${wrapperClassName}`} style={style} {...props}>
      <article className={`ep ep--${tone} ${className}`}>
        <div className="ep__thumb">
          {image && <img className="ep__photo" src={image} alt={imageAlt} />}
          {glyph && (
            <span className="ep__glyph" aria-hidden="true">
              {glyph}
            </span>
          )}
          <span className="ep__scrim" aria-hidden="true" />

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
      </article>
    </div>
  );
}
