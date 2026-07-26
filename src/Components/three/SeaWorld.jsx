/* eslint-disable react/no-unknown-property -- react-three-fiber intrinsics */
import { Suspense, useRef, useEffect, useState, Component } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Merry from "./Merry";
import { SAGAS } from "../../constants/sagas";
import { route } from "../../route";

/* ---- low-poly rolling ocean (fills the lower viewport everywhere) ---- */
function Ocean() {
  const geo = useRef();
  useFrame(({ clock }) => {
    const g = geo.current;
    if (!g) return;
    const t = clock.getElapsedTime();
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(
        i,
        Math.sin(x * 0.28 + t) * 0.5 + Math.cos(y * 0.4 + t * 0.9) * 0.42
      );
    }
    pos.needsUpdate = true;
  });
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.4} receiveShadow>
      <planeGeometry ref={geo} args={[180, 180, 52, 52]} />
      <meshStandardMaterial color="#1a6391" flatShading metalness={0.15} roughness={0.85} />
    </mesh>
  );
}

/* ---- sun that sinks toward the horizon as you sail ---- */
function Sun({ scroll }) {
  const g = useRef();
  useFrame(() => {
    if (g.current) g.current.position.y = 3.8 - scroll.current * 3.4;
  });
  return (
    <group ref={g} position={[6, 3.8, -26]}>
      <mesh>
        <sphereGeometry args={[3.4, 28, 28]} />
        <meshBasicMaterial color="#ffb84a" fog={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[5.2, 28, 28]} />
        <meshBasicMaterial color="#ff7e3f" transparent opacity={0.32} fog={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[8, 28, 28]} />
        <meshBasicMaterial color="#ff6b4a" transparent opacity={0.13} fog={false} />
      </mesh>
    </group>
  );
}

/* ---- a single fluffy low-poly cloud ---- */
function Cloud({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {[[0, 0, 0, 1], [1.1, -0.15, 0, 0.8], [-1.1, -0.1, 0, 0.75], [0.5, 0.4, 0.2, 0.7]].map(
        ([x, y, z, s], i) => (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[s, 10, 10]} />
            <meshStandardMaterial color="#f3ead5" flatShading roughness={1} />
          </mesh>
        )
      )}
    </group>
  );
}

const CLOUDS = [
  [-12, 7, -20, 1.4],
  [10, 9, -30, 1.9],
  [-6, 11, -40, 1.6],
  [16, 8, -18, 1.2],
  [2, 12, -50, 2.2],
];

function Clouds({ scroll }) {
  const g = useRef();
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.position.x = Math.sin(clock.getElapsedTime() * 0.03) * 3;
    g.current.position.y = -scroll.current * 4; // drift up a touch as we sail
  });
  return (
    <group ref={g}>
      {CLOUDS.map((c, i) => (
        <Cloud key={i} position={[c[0], c[1], c[2]]} scale={c[3]} />
      ))}
    </group>
  );
}

/* ---- a low-poly island with a palm ---- */
function Island({ position, scale = 1, tint = "#c9a24a" }) {
  return (
    <group position={position} scale={scale}>
      {/* sandy mound */}
      <mesh position={[0, 0, 0]} castShadow>
        <coneGeometry args={[2.2, 1.4, 7]} />
        <meshStandardMaterial color={tint} flatShading roughness={1} />
      </mesh>
      {/* rocky peak */}
      <mesh position={[0, 0.9, 0]}>
        <coneGeometry args={[1.1, 1.3, 6]} />
        <meshStandardMaterial color="#8a6b3a" flatShading roughness={1} />
      </mesh>
      {/* palm trunk */}
      <mesh position={[0.7, 1.1, 0.4]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.08, 0.12, 1.8, 6]} />
        <meshStandardMaterial color="#7a4a24" flatShading roughness={1} />
      </mesh>
      {/* palm canopy */}
      <mesh position={[0.95, 2.0, 0.4]}>
        <coneGeometry args={[0.9, 0.7, 6]} />
        <meshStandardMaterial color="#3f8f52" flatShading roughness={1} />
      </mesh>
    </group>
  );
}

/* One island per saga, strung along the route in reading order. The group
   slides on `route.t`, so saga i's island is abeam exactly while you are
   reading saga i — the background sea and the chart never disagree. */
const SPACING = 24;

const ISLANDS = SAGAS.map((s, i) => ({
  x: (i % 2 === 0 ? -1 : 1) * (11 + (i % 3) * 3),
  z: -20 - i * SPACING,
  scale: 1.5 + (i % 3) * 0.25,
  tint: s.isle.tint,
}));

function Islands() {
  const g = useRef();
  const eased = useRef(0);
  useFrame(() => {
    if (!g.current) return;
    eased.current += (route.t - eased.current) * 0.06;
    g.current.position.z = eased.current * SPACING;
  });
  return (
    <group ref={g}>
      {ISLANDS.map((s, i) => (
        <Island key={i} position={[s.x, -1.65, s.z]} scale={s.scale} tint={s.tint} />
      ))}
    </group>
  );
}

/* ---- a couple of drifting seagulls ---- */
function Gull({ position, phase = 0 }) {
  const g = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + phase;
    if (!g.current) return;
    g.current.position.y = position[1] + Math.sin(t * 1.4) * 0.3;
    g.current.rotation.z = Math.sin(t * 3) * 0.25;
  });
  return (
    <group ref={g} position={position}>
      <mesh rotation={[0, 0, 0.5]} position={[-0.22, 0, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.12]} />
        <meshStandardMaterial color="#f4efe2" flatShading fog={false} />
      </mesh>
      <mesh rotation={[0, 0, -0.5]} position={[0.22, 0, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.12]} />
        <meshStandardMaterial color="#f4efe2" flatShading fog={false} />
      </mesh>
    </group>
  );
}

function Gulls() {
  return (
    <group>
      <Gull position={[-4, 5, -10]} phase={0} />
      <Gull position={[3, 6, -12]} phase={1.2} />
      <Gull position={[-1, 5.6, -9]} phase={2.4} />
    </group>
  );
}

/* ---- whole scene eases with the cursor ---- */
function Rig({ children, pointer }) {
  const g = useRef();
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 1.2, 0);
  }, [camera]);
  useFrame(() => {
    if (!g.current) return;
    g.current.rotation.y += (pointer.current.x * 0.16 - g.current.rotation.y) * 0.05;
    g.current.rotation.x += (-pointer.current.y * 0.07 - g.current.rotation.x) * 0.05;
  });
  return <group ref={g}>{children}</group>;
}

/* ---- the Merry sails near camera, sinking slightly as we scroll on ---- */
function SailingMerry({ scroll }) {
  const g = useRef();
  useFrame(() => {
    if (!g.current) return;
    g.current.position.x = 1.8 - scroll.current * 3.2; // drifts to port as we sail
    g.current.position.z = -0.5 - scroll.current * 2.0;
  });
  return (
    <group ref={g} position={[1.8, -0.4, -0.5]}>
      <Merry scale={0.82} />
    </group>
  );
}

class GLBoundary extends Component {
  constructor(p) {
    super(p);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Persistent full-page sea — the Going Merry sailing the Grand Line behind
   every section. Fixed, pointer-transparent, pauses when the tab is hidden. */
export default function SeaWorld() {
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [reduced] = useState(prefersReduced);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      scroll.current = max > 0 ? Math.min(h.scrollTop / max, 1) : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: -3, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <GLBoundary>
        <Canvas
          shadows
          dpr={[1, 1.6]}
          camera={{ position: [0, 3.4, 15], fov: 40 }}
          frameloop={reduced || hidden ? "demand" : "always"}
          gl={{ alpha: true, antialias: true }}
        >
          <fog attach="fog" args={["#0a2740", 22, 78]} />
          <hemisphereLight args={["#ffe6b0", "#0e3557", 0.75]} />
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[8, 12, 6]}
            intensity={1.6}
            color="#fff1cf"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Suspense fallback={null}>
            <Rig pointer={pointer}>
              <Sun scroll={scroll} />
              <Clouds scroll={scroll} />
              <Gulls />
              <Islands />
              <Ocean />
              <SailingMerry scroll={scroll} />
            </Rig>
          </Suspense>
        </Canvas>
      </GLBoundary>
    </div>
  );
}
