import Tilt from "./Tilt";
import ArcTag from "./ArcTag";

/**
 * A One Piece TCG card.
 *
 * Anatomy, top to bottom: arc marker → foil border → power figure + rarity
 * stamp → full-bleed artwork with impact lines → effect box (keyword pills +
 * text) → type banner, name, affiliation → attribute icon, set code, cost.
 *
 * The wrapper owns the perspective and the reveal fade — `opacity < 1`
 * flattens 3D, so it must never land on the card itself. The arc marker is a
 * sibling of the card, not a child, for the same reason: perspective only
 * reaches direct children, so nothing may come between the two.
 */
export default function TcgCard({
  saga,
  arc,
  tone = "red",
  metric,
  metricLabel,
  outcome,
  stamp = "SR",
  edge = "grand-line.tcg",
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
  max = 10,
  children,
  ...props
}) {
  const { "data-reveal": dataReveal, ...rel } = props;
  const marked = saga != null && arc != null;

  return (
    <div
      className={`slab-stage h-full ${
        marked ? "flex flex-col" : ""
      } ${wrapperClassName}`}
      style={style}
      {...(dataReveal !== undefined ? { "data-reveal": dataReveal } : {})}
    >
      {marked && <ArcTag saga={saga} i={arc} />}

      <Tilt
        max={max}
        rest={6}
        className={`tcg tcg--${tone} ${marked ? "flex-1" : "h-full"} ${className}`}
        {...rel}
      >
        {/* card stock has thickness */}
        <span className="wall wall--t" aria-hidden="true" />
        <span className="wall wall--b" aria-hidden="true" />
        <span className="wall wall--l" aria-hidden="true" />
        <span className="wall wall--r" aria-hidden="true" />

        <div className="tcg__inner">
          <div className="tcg__art" aria-hidden="true" />
          {image && (
            <>
              <img className="tcg__photo" src={image} alt={imageAlt} />
              <span className="tcg__wash" aria-hidden="true" />
            </>
          )}
          {glyph && (
            <span className="tcg__glyph" aria-hidden="true">
              {glyph}
            </span>
          )}

          {/* the figure top-left is a real one or it is absent — nothing here
              is invented for the sake of filling the slot */}
          <div className="tcg__head">
            {metric != null && (
              <span className="tcg__metric">
                <b>{metric}</b>
                {metricLabel && <span>{metricLabel}</span>}
              </span>
            )}
            {stamp && <span className="tcg__stamp">{stamp}</span>}
          </div>
          {edge && <span className="tcg__edge">{edge}</span>}

          <div className="tcg__stage" />

          {(children || outcome) && (
            <div className="tcg__box">
              {children}
              {outcome && <p className="tcg__outcome">{outcome}</p>}
            </div>
          )}

          <div className="tcg__plate">
            {type && <span className="tcg__type">{type}</span>}
            {name && <h3 className="tcg__name">{name}</h3>}
            {sub && <p className="tcg__sub">{sub}</p>}

            {actions && <div className="tcg__actions">{actions}</div>}

            <div className="tcg__foot">
              <span className="tcg__attr" aria-hidden="true">
                {attr}
              </span>
              <span className="tcg__code">{code}</span>
              {cost != null ? (
                <span className="tcg__cost">
                  <b>{cost}</b>
                  <span>{costLabel}</span>
                </span>
              ) : (
                <span className="w-10" />
              )}
            </div>
          </div>

          <span className="tcg__holo" aria-hidden="true" />
        </div>
      </Tilt>
    </div>
  );
}
