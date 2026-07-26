import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";
import { SAGAS, TOTAL_ARCS } from "../constants/sagas";
import { route, sailTo, useRouteIndex } from "../route";
import JollyRoger from "./JollyRoger";

const MapScene = lazy(() => import("./three/MapScene"));

/* ── the corner mini-map: always aboard, shows where the ship is ──
   A div rather than a button: a WebGL canvas is not phrasing content, so it
   can't legally live inside one. The click target is an overlaid button. */
function MiniMap({ onOpen, index, paused }) {
  const saga = SAGAS[index];

  return (
    <div className="saga-mini">
      <div className="saga-mini__canvas" aria-hidden="true">
        <Suspense fallback={null}>
          <MapScene mode="mini" index={index} paused={paused} />
        </Suspense>
      </div>

      <div className="saga-mini__hud">
        <p className="saga-mini__no">SAGA {saga.no}</p>
        <p className="saga-mini__name">{saga.name}</p>
      </div>

      <div className="saga-mini__foot">
        <span>
          {index + 1}/{SAGAS.length}
        </span>
        <span className="saga-mini__open">
          <FiMaximize2 size={11} /> CHART
        </span>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open the Grand Line map — currently in ${saga.name}, ${saga.arcs.length} arcs`}
        className="saga-mini__hit"
      />
    </div>
  );
}

/* ── what one arc actually says, once you pick it off the map ── */
function ArcDetail({ saga, i, onRead }) {
  const arc = saga.arcs[i];

  return (
    <aside className="arc-panel" aria-live="polite">
      <p className="arc-panel__kicker">
        SAGA {saga.no} · ARC {String(i + 1).padStart(2, "0")} OF{" "}
        {String(saga.arcs.length).padStart(2, "0")}
      </p>
      <h3 className="arc-panel__name">{arc.name}</h3>
      {arc.note && <p className="arc-panel__note">{arc.note}</p>}

      <div className="arc-panel__meta">
        {arc.badge && <span className="arc-panel__badge">{arc.badge}</span>}
        {arc.when && <span className="arc-panel__when">{arc.when}</span>}
        {arc.where && <span className="arc-panel__when">{arc.where}</span>}
      </div>

      <div className="arc-panel__scroll">
        {arc.body && <p className="arc-panel__body">{arc.body}</p>}

        {arc.bullets && (
          <ul className="arc-panel__bullets">
            {arc.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        {arc.outcome && <p className="arc-panel__outcome">{arc.outcome}</p>}

        {arc.tags && (
          <p className="arc-panel__tags">
            {arc.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
        )}
      </div>

      <div className="arc-panel__actions">
        <button type="button" onClick={onRead} className="arc-panel__read">
          Read this saga <FiArrowUpRight size={13} />
        </button>
        {arc.link && (
          <a
            href={arc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="arc-panel__link"
          >
            Visit <FiArrowUpRight size={13} />
          </a>
        )}
      </div>
    </aside>
  );
}

/* ── the full-screen chart ── */
function FullMap({ onClose, index }) {
  const [focus, setFocus] = useState(null);
  const [arcIndex, setArcIndex] = useState(null);

  const dive = useCallback((saga) => {
    setFocus(SAGAS.indexOf(saga));
    setArcIndex(0);
  }, []);

  const surface = useCallback(() => {
    setFocus(null);
    setArcIndex(null);
  }, []);

  const read = useCallback(
    (id) => {
      onClose();
      // let the overlay unmount before the smooth scroll starts
      requestAnimationFrame(() => sailTo(id));
    },
    [onClose]
  );

  // Escape steps back out of a saga first, and only then shuts the chart
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (focus == null) onClose();
      else surface();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [focus, onClose, surface]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const saga = focus == null ? null : SAGAS[focus];

  return (
    <div
      className="saga-map"
      role="dialog"
      aria-modal="true"
      aria-label="The Grand Line — saga map"
    >
      <div className="saga-map__canvas">
        <Suspense fallback={null}>
          <MapScene
            mode="full"
            index={index}
            onSelect={dive}
            focus={focus}
            arcIndex={arcIndex}
            onSelectArc={setArcIndex}
          />
        </Suspense>
      </div>

      <header className="saga-map__head">
        <div className="flex items-center gap-3">
          {saga ? (
            <button
              type="button"
              onClick={surface}
              className="flex items-center justify-center rounded-full w-10 h-10 sea-panel text-parch-light hover:border-gold shrink-0"
              aria-label="Back to the whole Grand Line"
            >
              <FiArrowLeft size={17} />
            </button>
          ) : (
            <JollyRoger size={26} className="text-gold" />
          )}
          <div>
            <p className="font-pirate text-xl leading-none tracking-wide text-parch-light">
              {saga ? saga.name : "The Grand Line"}
            </p>
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold/70 mt-1">
              {saga
                ? `SAGA ${saga.no} · ${saga.arcs.length} ARC${
                    saga.arcs.length === 1 ? "" : "S"
                  }`
                : `${SAGAS.length} SAGAS · ${TOTAL_ARCS} ARCS`}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close the map"
          className="flex items-center justify-center rounded-full w-10 h-10 sea-panel text-parch-light hover:border-gold"
        >
          <FiX size={18} />
        </button>
      </header>

      {/* the list down the left is the sagas, or — once you dive — that
          saga's arcs, kept in step with what is selected in 3D */}
      <nav className="saga-map__list" aria-label={saga ? "Arcs" : "Sagas"}>
        {saga
          ? saga.arcs.map((arc, i) => (
              <button
                key={arc.name}
                type="button"
                onClick={() => setArcIndex(i)}
                className={`saga-row ${
                  i === arcIndex ? "saga-row--current" : ""
                }`}
              >
                <span className="saga-row__no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="saga-row__body">
                  <span className="saga-row__name">{arc.name}</span>
                  <span className="saga-row__arcs">{arc.note}</span>
                </span>
              </button>
            ))
          : SAGAS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => dive(s)}
                className={`saga-row ${i === index ? "saga-row--current" : ""} ${
                  i < index ? "saga-row--sailed" : ""
                }`}
              >
                <span className="saga-row__no">{s.no}</span>
                <span className="saga-row__body">
                  <span className="saga-row__name">{s.name}</span>
                  <span className="saga-row__arcs">
                    {s.arcs
                      .slice(0, 3)
                      .map((a) => a.name)
                      .join(" · ")}
                    {s.arcs.length > 3 ? ` +${s.arcs.length - 3} more` : ""}
                  </span>
                </span>
                <span className="saga-row__n">{s.arcs.length}</span>
              </button>
            ))}
      </nav>

      {saga && arcIndex != null && (
        <ArcDetail saga={saga} i={arcIndex} onRead={() => read(saga.id)} />
      )}

      <p className="saga-map__hint">
        {saga
          ? "pick an arc to read it · esc to surface"
          : "drag to orbit · scroll to zoom · pick an island to dive into its arcs"}
      </p>
    </div>
  );
}

/**
 * The saga map: a mini chart pinned to the corner, and a full-screen 3D chart
 * of the whole voyage that you can dive into one saga at a time. Both read the
 * same `route` store, so the ship on the mini-map and the lit island on the
 * full chart never disagree.
 */
export default function SagaMap() {
  const [open, setOpen] = useState(false);
  const index = useRouteIndex();
  const close = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#chart") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // the navbar's chart button reaches us through this event; #chart in the URL
  // opens it too, so the map is linkable
  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onHash = () => setOpen(window.location.hash === "#chart");
    window.addEventListener("open-saga-map", onOpen);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => {
      window.removeEventListener("open-saga-map", onOpen);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    route.far = Math.max(route.far, index);
  }, [index]);

  return (
    <>
      {/* the mini stops rendering while the full chart is up — no point paying
          for a second live context nobody can see */}
      <MiniMap onOpen={() => setOpen(true)} index={index} paused={open} />
      {open && <FullMap onClose={close} index={index} />}
    </>
  );
}
