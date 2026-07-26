/* eslint-disable react/no-unknown-property -- react-three-fiber intrinsics */
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SAGAS } from "../../constants/sagas";
import { route } from "../../route";
import Merry from "./Merry";

const N = SAGAS.length;

/* The charted route: a Catmull-Rom curve threaded through every saga island.
   getPoint(i / (N-1)) lands exactly on island i, so route.t doubles as the
   ship's parameter along the curve. */
const CURVE = new THREE.CatmullRomCurve3(
  SAGAS.map((s) => new THREE.Vector3(s.isle.pos[0], 0, s.isle.pos[1])),
  false,
  "catmullrom",
  0.35
);

const ROUTE_POINTS = CURVE.getPoints(220).map((p) => [p.x, 0.05, p.z]);

const UP = new THREE.Vector3(0, 1, 0);
const SIDE = new THREE.Vector3(); // scratch — sample() runs every frame

/** Ship position: on the curve, nudged off the island so it sails past it. */
function sample(t, out, tan) {
  const u = THREE.MathUtils.clamp(t / (N - 1), 0, 1);
  CURVE.getPoint(u, out);
  CURVE.getTangent(u, tan);
  SIDE.crossVectors(tan, UP).normalize();
  out.addScaledVector(SIDE, 3.6);
  return out;
}

/* ─────────────────────────── island silhouettes ─────────────────────────── */

const Palm = ({ position, lean = -0.25 }) => (
  <group position={position}>
    <mesh position={[0, 0.9, 0]} rotation={[0, 0, lean]}>
      <cylinderGeometry args={[0.07, 0.11, 1.8, 6]} />
      <meshStandardMaterial color="#7a4a24" flatShading roughness={1} />
    </mesh>
    <mesh position={[lean * -1.6, 1.85, 0]}>
      <coneGeometry args={[0.8, 0.6, 6]} />
      <meshStandardMaterial color="#3f8f52" flatShading roughness={1} />
    </mesh>
  </group>
);

function Silhouette({ kind, tint }) {
  const sand = (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      <coneGeometry args={[2.6, 1.3, 8]} />
      <meshStandardMaterial color={tint} flatShading roughness={1} />
    </mesh>
  );
  const rock = "#8a6b3a";

  switch (kind) {
    case "twin":
      return (
        <>
          {sand}
          <mesh position={[-0.7, 1.0, 0.2]}>
            <coneGeometry args={[1.0, 1.7, 6]} />
            <meshStandardMaterial color={rock} flatShading roughness={1} />
          </mesh>
          <mesh position={[0.8, 0.8, -0.3]}>
            <coneGeometry args={[0.8, 1.3, 6]} />
            <meshStandardMaterial color="#7b5f33" flatShading roughness={1} />
          </mesh>
          <Palm position={[1.1, 0.4, 1.0]} />
        </>
      );

    case "volcano":
      return (
        <>
          {sand}
          <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.75, 1.6, 2.2, 8]} />
            <meshStandardMaterial color="#6d4a2c" flatShading roughness={1} />
          </mesh>
          <mesh position={[0, 2.3, 0]}>
            <cylinderGeometry args={[0.62, 0.75, 0.22, 8]} />
            <meshStandardMaterial
              color="#ff7a3c"
              emissive="#ff5a1e"
              emissiveIntensity={1.4}
              flatShading
            />
          </mesh>
        </>
      );

    case "spire":
      return (
        <>
          {sand}
          <mesh position={[0, 1.9, 0]}>
            <coneGeometry args={[0.7, 3.4, 6]} />
            <meshStandardMaterial color={rock} flatShading roughness={1} />
          </mesh>
          <mesh position={[1.15, 0.75, 0.5]}>
            <coneGeometry args={[0.45, 1.3, 5]} />
            <meshStandardMaterial color="#7b5f33" flatShading roughness={1} />
          </mesh>
          <Palm position={[-1.2, 0.4, 0.8]} lean={0.22} />
        </>
      );

    case "arch":
      return (
        <>
          {sand}
          <mesh position={[0, 1.1, 0]} rotation={[0, 0.35, 0]}>
            <torusGeometry args={[1.15, 0.32, 6, 14, Math.PI]} />
            <meshStandardMaterial color={rock} flatShading roughness={1} />
          </mesh>
          <mesh position={[-1.5, 0.6, -0.6]}>
            <coneGeometry args={[0.6, 1.1, 5]} />
            <meshStandardMaterial color="#7b5f33" flatShading roughness={1} />
          </mesh>
        </>
      );

    case "plateau":
      return (
        <>
          {sand}
          <mesh position={[0, 1.15, 0]}>
            <cylinderGeometry args={[1.5, 1.9, 1.4, 7]} />
            <meshStandardMaterial color="#8f7038" flatShading roughness={1} />
          </mesh>
          <mesh position={[0, 1.95, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 0.16, 7]} />
            <meshStandardMaterial color="#4f8f4a" flatShading roughness={1} />
          </mesh>
          <Palm position={[0.5, 2.0, 0.4]} />
        </>
      );

    case "lighthouse":
      return (
        <>
          {sand}
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.32, 0.5, 2.4, 8]} />
            <meshStandardMaterial color="#f0e4c8" flatShading roughness={0.9} />
          </mesh>
          <mesh position={[0, 1.7, 0]}>
            <cylinderGeometry args={[0.34, 0.42, 0.5, 8]} />
            <meshStandardMaterial color="#b5312f" flatShading roughness={0.9} />
          </mesh>
          <mesh position={[0, 2.85, 0]}>
            <sphereGeometry args={[0.34, 10, 10]} />
            <meshStandardMaterial
              color="#ffd766"
              emissive="#f4c430"
              emissiveIntensity={1.6}
            />
          </mesh>
          <Palm position={[1.3, 0.4, 0.7]} />
        </>
      );

    default:
      return (
        <>
          {sand}
          <mesh position={[0, 0.85, 0]}>
            <coneGeometry args={[1.2, 1.4, 6]} />
            <meshStandardMaterial color={rock} flatShading roughness={1} />
          </mesh>
          <Palm position={[0.9, 0.4, 0.8]} />
        </>
      );
  }
}

/* ───────────────────────────────── island ───────────────────────────────── */

function Isle({ saga, i, state, interactive, labelled, onSelect }) {
  const g = useRef();
  const beacon = useRef();
  const [hover, setHover] = useState(false);
  const { pos, scale, tint, kind } = saga.isle;
  const current = state === "current";
  const sailed = state !== "ahead";

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (g.current) g.current.position.y = Math.sin(t * 0.7 + i) * 0.08 - 1.1;
    if (beacon.current) {
      beacon.current.material.opacity = current
        ? 0.22 + Math.sin(t * 2) * 0.07
        : 0;
    }
  });

  const lift = hover && interactive ? 1.08 : 1;

  return (
    <group position={[pos[0], -1.1, pos[1]]} ref={g}>
      <group
        scale={scale * lift}
        onPointerOver={
          interactive
            ? (e) => (e.stopPropagation(), setHover(true))
            : undefined
        }
        onPointerOut={interactive ? () => setHover(false) : undefined}
        onClick={
          interactive ? (e) => (e.stopPropagation(), onSelect(saga)) : undefined
        }
      >
        <Silhouette kind={kind} tint={sailed ? tint : "#7d6a49"} />
      </group>

      {/* water ring — gold once the island has been sailed */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.06, 0]}>
        <ringGeometry args={[2.9 * scale, 3.25 * scale, 40]} />
        <meshBasicMaterial
          color={current ? "#f4c430" : sailed ? "#c9964a" : "#4a6a86"}
          transparent
          opacity={current ? 0.95 : sailed ? 0.55 : 0.3}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* beacon on the saga you are reading */}
      <mesh ref={beacon} position={[0, 3.4, 0]}>
        <cylinderGeometry args={[0.95, 0.3, 7, 12, 1, true]} />
        <meshBasicMaterial
          color="#f4c430"
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {labelled && (
        <Html position={[0, 4.6 * scale, 0]} center zIndexRange={[20, 0]}>
          <button
            type="button"
            onClick={() => onSelect(saga)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`map-label ${current ? "map-label--current" : ""} ${
              sailed ? "map-label--sailed" : ""
            }`}
          >
            <span className="map-label__no">SAGA {saga.no}</span>
            <span className="map-label__name">{saga.name}</span>
            <span className="map-label__arcs">
              {saga.arcs.length} arc{saga.arcs.length === 1 ? "" : "s"}
              {current ? " · you are here" : ""}
            </span>
          </button>
        </Html>
      )}
    </group>
  );
}

/* ───────────────────────────────── the ship ─────────────────────────────── */

function Ship({ smooth = 0.08 }) {
  const g = useRef();
  const cur = useRef(route.t);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tan = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!g.current) return;
    cur.current += (route.t - cur.current) * smooth;
    sample(cur.current, pos, tan);
    g.current.position.set(pos.x, 0, pos.z);
    // Merry bakes a -0.6 yaw into its own group, so undo it before heading
    g.current.rotation.y = Math.atan2(tan.x, tan.z) + 0.6;
  });

  return (
    <group ref={g}>
      <group scale={0.48} position={[0, -0.9, 0]}>
        <Merry />
      </group>
    </group>
  );
}

/* Mini camera: rides above and behind the ship, north stays up. */
function ChaseCam() {
  const cur = useRef(route.t);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tan = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera }) => {
    cur.current += (route.t - cur.current) * 0.08;
    sample(cur.current, pos, tan);
    camera.position.set(pos.x * 0.45, 13.5, pos.z + 11);
    camera.lookAt(pos.x * 0.45, 0, pos.z - 3);
  });
  return null;
}

/* ───────────────────────────────── the sea ──────────────────────────────── */

function Sea({ animated }) {
  const geo = useRef();
  // the mini-map's swell is two millimetres tall on screen — not worth the
  // per-frame vertex walk, so only the full chart gets a moving sea
  useFrame(({ clock }) => {
    const g = geo.current;
    if (!g || !animated) return;
    const t = clock.getElapsedTime();
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      p.setZ(
        i,
        Math.sin(p.getX(i) * 0.25 + t) * 0.28 +
          Math.cos(p.getY(i) * 0.3 + t * 0.8) * 0.24
      );
    }
    p.needsUpdate = true;
  });
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.3} receiveShadow>
      <planeGeometry
        ref={geo}
        args={[130, 170, animated ? 36 : 12, animated ? 46 : 16]}
      />
      <meshStandardMaterial
        color="#12496e"
        flatShading
        metalness={0.15}
        roughness={0.9}
      />
    </mesh>
  );
}

/* ───────────────────────────── framing the chart ────────────────────────── */

/* The route is 55 units of ocean end to end. A wide desktop window swallows it
   whole; a phone held upright does not — so back the camera off in proportion
   to how narrow the viewport is, and push the fog out with it so the far end
   of the chain doesn't vanish into haze at the greater distance. */
const CHART_TARGET = new THREE.Vector3(-4, 0, -8);
const CHART_OFFSET = new THREE.Vector3(4, 58, 58); // camera relative to target
const CHART_DIST = CHART_OFFSET.length();
const REFERENCE_ASPECT = 1.7;

function chartZoom(size) {
  const aspect = size.width / Math.max(size.height, 1);
  return THREE.MathUtils.clamp(REFERENCE_ASPECT / aspect, 1, 2.6);
}

function FitChart({ zoom }) {
  const camera = useThree((s) => s.camera);
  const controls = useThree((s) => s.controls);

  useEffect(() => {
    camera.position
      .copy(CHART_OFFSET)
      .setLength(CHART_DIST * zoom)
      .add(CHART_TARGET);
    camera.updateProjectionMatrix();
    controls?.target?.copy(CHART_TARGET);
    controls?.update?.();
  }, [zoom, camera, controls]);

  return null;
}

/* ─────────────────────────────── the whole map ──────────────────────────── */

function Archipelago({ index, full, onSelect }) {
  const size = useThree((s) => s.size);
  const zoom = full ? chartZoom(size) : 1;

  return (
    <>
      {full && <FitChart zoom={zoom} />}
      <fog attach="fog" args={["#062036", 70 * zoom, 185 * zoom]} />
      <hemisphereLight args={["#ffe6b0", "#0e3557", 0.8]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[14, 26, 12]}
        intensity={1.5}
        color="#fff1cf"
        castShadow={full}
        shadow-mapSize={[1024, 1024]}
      />

      <Sea animated={full} />

      <Line
        points={ROUTE_POINTS}
        color="#f4c430"
        lineWidth={full ? 1.6 : 1.2}
        dashed
        dashSize={1.1}
        gapSize={0.8}
        transparent
        opacity={0.7}
      />

      {SAGAS.map((s, i) => (
        <Isle
          key={s.id}
          saga={s}
          i={i}
          state={i === index ? "current" : i < index ? "sailed" : "ahead"}
          interactive={full}
          labelled={full}
          onSelect={onSelect}
        />
      ))}

      <Ship />
    </>
  );
}

/**
 * The Grand Line map.
 *
 * `mini` rides in the corner and chases the ship; `full` fills the screen with
 * orbit controls and clickable, labelled islands.
 */
export default function MapScene({
  mode = "mini",
  onSelect = () => {},
  index = 0,
  paused = false,
}) {
  const full = mode === "full";

  return (
    <Canvas
      shadows={full}
      frameloop={paused ? "never" : "always"}
      dpr={full ? [1, 1.75] : [1, 1.25]}
      camera={
        full
          ? { position: [0, 58, 50], fov: 40 }
          : { position: [0, 14, 16], fov: 40 }
      }
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <Archipelago index={index} full={full} onSelect={onSelect} />
        {full ? (
          <OrbitControls
            makeDefault
            target={CHART_TARGET}
            enablePan={false}
            minDistance={26}
            maxDistance={280}
            minPolarAngle={0.25}
            maxPolarAngle={1.32}
            autoRotate={false}
            dampingFactor={0.08}
          />
        ) : (
          <ChaseCam />
        )}
      </Suspense>
    </Canvas>
  );
}
