/* eslint-disable react/no-unknown-property -- react-three-fiber intrinsics */
import { Suspense, useRef, useEffect, useState, Component } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Merry from "./Merry";

/* ---- low-poly rolling ocean ---- */
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
        Math.sin(x * 0.35 + t) * 0.45 + Math.cos(y * 0.45 + t * 0.9) * 0.4
      );
    }
    pos.needsUpdate = true;
  });
  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.4} receiveShadow>
      <planeGeometry ref={geo} args={[120, 120, 40, 40]} />
      <meshStandardMaterial color="#1a6391" flatShading metalness={0.15} roughness={0.85} />
    </mesh>
  );
}

/* ---- sun on the horizon ---- */
function Sun() {
  return (
    <group position={[6, 3.4, -21]}>
      <mesh>
        <sphereGeometry args={[3.4, 28, 28]} />
        <meshBasicMaterial color="#ffb84a" />
      </mesh>
      <mesh>
        <sphereGeometry args={[5.2, 28, 28]} />
        <meshBasicMaterial color="#ff7e3f" transparent opacity={0.32} />
      </mesh>
      <mesh>
        <sphereGeometry args={[7.6, 28, 28]} />
        <meshBasicMaterial color="#ff6b4a" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

/* ---- whole scene gently follows the cursor ---- */
function Rig({ children, pointer }) {
  const g = useRef();
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 1.4, 0);
  }, [camera]);
  useFrame(() => {
    if (!g.current) return;
    g.current.rotation.y += (pointer.current.x * 0.28 - g.current.rotation.y) * 0.05;
    g.current.rotation.x += (-pointer.current.y * 0.12 - g.current.rotation.x) * 0.05;
  });
  return <group ref={g}>{children}</group>;
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

/* Full-bleed WebGL hero backdrop: the Going Merry sailing an animated sea. */
export default function SeaScene() {
  const host = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [paused, setPaused] = useState(false);
  const [reduced] = useState(prefersReduced);

  // pause the render loop while the hero is scrolled out of view
  useEffect(() => {
    if (!host.current) return;
    const io = new IntersectionObserver(
      ([e]) => setPaused(!e.isIntersecting),
      { threshold: 0.02 }
    );
    io.observe(host.current);
    return () => io.disconnect();
  }, []);

  // track cursor globally (canvas sits behind the overlay text)
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
    <div ref={host} className="absolute inset-0" style={{ zIndex: 0 }} aria-hidden="true">
      <GLBoundary>
        <Canvas
          shadows
          dpr={[1, 1.8]}
          camera={{ position: [0, 3.4, 15], fov: 40 }}
          frameloop={reduced || paused ? "demand" : "always"}
          gl={{ alpha: true, antialias: true }}
        >
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
              <Sun />
              <Ocean />
              <Merry position={[1.8, -0.4, -0.5]} scale={0.82} />
            </Rig>
          </Suspense>
        </Canvas>
      </GLBoundary>
    </div>
  );
}
