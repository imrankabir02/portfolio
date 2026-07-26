import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
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

/* ── the full-screen chart ── */
function FullMap({ onClose, index }) {
  const select = useCallback(
    (saga) => {
      onClose();
      // let the overlay unmount before the smooth scroll starts
      requestAnimationFrame(() => sailTo(saga.id));
    },
    [onClose]
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="saga-map"
      role="dialog"
      aria-modal="true"
      aria-label="The Grand Line — saga map"
    >
      <div className="saga-map__canvas">
        <Suspense fallback={null}>
          <MapScene mode="full" index={index} onSelect={select} />
        </Suspense>
      </div>

      <header className="saga-map__head">
        <div className="flex items-center gap-3">
          <JollyRoger size={26} className="text-gold" />
          <div>
            <p className="font-pirate text-xl leading-none tracking-wide text-parch-light">
              The Grand Line
            </p>
            <p className="font-mono text-[10px] tracking-[0.28em] text-gold/70 mt-1">
              {SAGAS.length} SAGAS · {TOTAL_ARCS} ARCS
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

      <nav className="saga-map__list" aria-label="Sagas">
        {SAGAS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => select(s)}
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

      <p className="saga-map__hint">
        drag to orbit · scroll to zoom · pick an island to sail there
      </p>
    </div>
  );
}

/**
 * The saga map: a mini chart pinned to the corner, and a full-screen 3D chart
 * of the whole voyage. Both read the same `route` store, so the ship on the
 * mini-map and the lit island on the full chart never disagree.
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
