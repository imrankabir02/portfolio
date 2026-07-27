import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

/**
 * The full episode, opened from its card.
 *
 * The panel is the same `.ep` card the grid is built from — same navy stock,
 * same gold hairline, same framed still — run wide and given room to say
 * everything the face only summarised. It arrives on a real perspective:
 * tilted back and pushed away, then settling flat. That is one transform on
 * one element, so the 3D costs a compositor frame and nothing else.
 *
 * Rendered into `document.body` because the cards live inside sections that
 * clip their paint (`contain: paint`), and a dialog must not be clipped by
 * the thing that opened it.
 */
export default function EpModal({
  onClose,
  tone = "red",
  saga,
  arc,
  image,
  imageAlt = "",
  glyph,
  metric,
  metricLabel,
  stamp,
  cost,
  costLabel = "COST",
  type,
  code,
  name,
  sub,
  outcome,
  edge,
  attr,
  actions,
  children,
}) {
  const panel = useRef(null);
  const closer = useRef(null);
  const opener = useRef(null);
  const titleId = useRef(`ep-${Math.random().toString(36).slice(2, 9)}`).current;

  const marked = saga != null && arc != null;
  const arcName = marked ? saga.arcs?.[arc]?.name : null;

  // the element that opened the dialog gets its focus back when it shuts
  useEffect(() => {
    opener.current = document.activeElement;
    closer.current?.focus();
    return () => opener.current?.focus?.();
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // escape shuts it; tab cycles inside it rather than wandering the page behind
  const onKey = useCallback(
    (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const stops = panel.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!stops?.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  return createPortal(
    <div
      className="ep-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* the scrim is the click target for "shut this", nothing more */}
      <div className="ep-modal__scrim" onClick={onClose} aria-hidden="true" />

      <div className="ep-modal__stage">
        <article ref={panel} className={`ep ep--${tone} ep-modal__panel`}>
          <button
            ref={closer}
            type="button"
            onClick={onClose}
            className="ep-modal__x"
            aria-label={`Close ${name || "this episode"}`}
          >
            <FiX size={17} />
          </button>

          <div className="ep__thumb ep-modal__thumb">
            {image && <img className="ep__photo" src={image} alt={imageAlt} />}
            {glyph && (
              <span className="ep__glyph" aria-hidden="true">
                {glyph}
              </span>
            )}
            <span className="ep__scrim" aria-hidden="true" />

            {metric != null && (
              <span className="ep__metric">
                <b>{metric}</b>
                {metricLabel && <span>{metricLabel}</span>}
              </span>
            )}
            {stamp && <span className="ep__stamp">{stamp}</span>}

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
            {name && (
              <h3 id={titleId} className="ep__name ep-modal__name">
                {name}
              </h3>
            )}
            {sub && <p className="ep__sub">{sub}</p>}

            <div className="ep-modal__scroll">
              {children}
              {outcome && <p className="ep__outcome">{outcome}</p>}
            </div>

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
    </div>,
    document.body
  );
}
