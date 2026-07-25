/* eslint-disable react/no-unknown-property -- react-three-fiber intrinsics */
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Draw the crew's straw-hat Jolly Roger onto a canvas → sail texture. */
function makeSailTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const x = c.getContext("2d");

  // sail cloth
  x.fillStyle = "#f4ecd8";
  x.fillRect(0, 0, 256, 256);
  x.strokeStyle = "rgba(80,60,30,0.06)";
  x.lineWidth = 1;
  for (let i = 8; i < 256; i += 16) {
    x.beginPath();
    x.moveTo(i, 0);
    x.lineTo(i, 256);
    x.stroke();
  }

  x.fillStyle = "#1c1712";
  x.strokeStyle = "#1c1712";
  x.lineCap = "round";

  // crossbones
  x.save();
  x.translate(128, 150);
  x.lineWidth = 13;
  x.beginPath();
  x.moveTo(-46, -28);
  x.lineTo(46, 40);
  x.moveTo(46, -28);
  x.lineTo(-46, 40);
  x.stroke();
  [[-52, -32], [-52, -20], [52, -32], [52, -20], [-52, 36], [-52, 48], [52, 36], [52, 48]].forEach(
    ([bx, by]) => {
      x.beginPath();
      x.arc(bx, by, 8, 0, 7);
      x.fill();
    }
  );
  x.restore();

  // skull
  x.beginPath();
  x.arc(128, 118, 40, 0, Math.PI * 2);
  x.fill();
  x.fillRect(108, 146, 40, 26);
  // eyes + nose knocked out
  x.fillStyle = "#f4ecd8";
  x.beginPath();
  x.arc(113, 116, 11, 0, 7);
  x.arc(143, 116, 11, 0, 7);
  x.fill();
  x.beginPath();
  x.moveTo(128, 126);
  x.lineTo(135, 141);
  x.lineTo(121, 141);
  x.closePath();
  x.fill();
  x.fillStyle = "#f4ecd8";
  x.fillRect(120, 148, 3, 20);
  x.fillRect(128, 148, 3, 20);
  x.fillRect(136, 148, 3, 20);

  // straw hat
  x.fillStyle = "#e6b64e";
  x.beginPath();
  x.ellipse(128, 84, 58, 15, 0, 0, 7);
  x.fill();
  x.beginPath();
  x.moveTo(100, 84);
  x.quadraticCurveTo(128, 54, 156, 84);
  x.fill();
  x.fillStyle = "#c1272d";
  x.fillRect(101, 78, 54, 8);

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

/* The Going Merry — stylised low-poly caravel with the sheep figurehead. */
export default function Merry(props) {
  const group = useRef();
  const sailTex = useMemo(makeSailTexture, []);

  // hull silhouette (top-down): pointed bow at +y, rounded stern at -y
  const hullGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 3.2);
    s.quadraticCurveTo(1.35, 2.1, 1.25, 0.3);
    s.lineTo(1.05, -1.7);
    s.quadraticCurveTo(0.95, -2.5, 0, -2.5);
    s.quadraticCurveTo(-0.95, -2.5, -1.05, -1.7);
    s.lineTo(-1.25, 0.3);
    s.quadraticCurveTo(-1.35, 2.1, 0, 3.2);
    const g = new THREE.ExtrudeGeometry(s, {
      depth: 1.5,
      bevelEnabled: true,
      bevelThickness: 0.28,
      bevelSize: 0.28,
      bevelSegments: 2,
    });
    g.rotateX(-Math.PI / 2); // lay flat: bow → +Z, height → +Y
    g.translate(0, 0, 0);
    return g;
  }, []);

  // gentle bob riding the swell
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.position.y = Math.sin(t * 1.1) * 0.18;
    group.current.rotation.z = Math.sin(t * 0.9) * 0.045;
    group.current.rotation.x = Math.cos(t * 0.8) * 0.03;
  });

  return (
    <group ref={group} {...props} rotation={[0, -0.6, 0]}>
      {/* hull */}
      <mesh geometry={hullGeo} castShadow receiveShadow>
        <meshStandardMaterial color="#f3e7cd" flatShading roughness={0.75} />
      </mesh>
      {/* blue sheer stripe */}
      <mesh position={[0, 1.15, 0]}>
        <boxGeometry args={[2.35, 0.34, 6.0]} />
        <meshStandardMaterial color="#1f6f97" flatShading roughness={0.6} />
      </mesh>
      {/* red gunwale trim */}
      <mesh position={[0, 1.42, 0]}>
        <boxGeometry args={[2.15, 0.18, 5.6]} />
        <meshStandardMaterial color="#b5312f" flatShading roughness={0.6} />
      </mesh>
      {/* deck */}
      <mesh position={[0, 1.5, -0.1]}>
        <boxGeometry args={[1.9, 0.12, 5.0]} />
        <meshStandardMaterial color="#c98b46" flatShading roughness={0.85} />
      </mesh>
      {/* cabin at stern */}
      <mesh position={[0, 1.9, -1.7]} castShadow>
        <boxGeometry args={[1.5, 0.8, 1.2]} />
        <meshStandardMaterial color="#f0e2c4" flatShading roughness={0.8} />
      </mesh>
      <mesh position={[0, 2.45, -1.7]} castShadow>
        <boxGeometry args={[1.7, 0.28, 1.4]} />
        <meshStandardMaterial color="#b5312f" flatShading roughness={0.7} />
      </mesh>

      {/* ── the sheep / ram figurehead at the bow ── */}
      <group position={[0, 1.75, 3.05]}>
        {/* neck */}
        <mesh position={[0, 0, -0.25]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.24, 0.3, 0.9, 10]} />
          <meshStandardMaterial color="#f4c645" flatShading roughness={0.7} />
        </mesh>
        {/* head */}
        <mesh position={[0, 0.28, 0.28]} castShadow>
          <sphereGeometry args={[0.46, 16, 14]} />
          <meshStandardMaterial color="#f7d05f" flatShading roughness={0.65} />
        </mesh>
        {/* snout */}
        <mesh position={[0, 0.12, 0.68]}>
          <sphereGeometry args={[0.26, 12, 10]} />
          <meshStandardMaterial color="#ffe08a" flatShading roughness={0.6} />
        </mesh>
        {/* eyes */}
        <mesh position={[0.2, 0.4, 0.6]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color="#241a12" />
        </mesh>
        <mesh position={[-0.2, 0.4, 0.6]}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshStandardMaterial color="#241a12" />
        </mesh>
        {/* curled horns */}
        <mesh position={[0.34, 0.55, 0.2]} rotation={[0, 0, -0.4]}>
          <torusGeometry args={[0.22, 0.07, 8, 16, Math.PI * 1.5]} />
          <meshStandardMaterial color="#e7e0cf" flatShading roughness={0.6} />
        </mesh>
        <mesh position={[-0.34, 0.55, 0.2]} rotation={[0, Math.PI, 0.4]}>
          <torusGeometry args={[0.22, 0.07, 8, 16, Math.PI * 1.5]} />
          <meshStandardMaterial color="#e7e0cf" flatShading roughness={0.6} />
        </mesh>
      </group>

      {/* ── mast + sails ── */}
      <mesh position={[0, 3.2, 0.3]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 4.4, 10]} />
        <meshStandardMaterial color="#7a4a24" flatShading roughness={0.8} />
      </mesh>
      {/* yard */}
      <mesh position={[0, 4.3, 0.3]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 3.2, 8]} />
        <meshStandardMaterial color="#7a4a24" flatShading roughness={0.8} />
      </mesh>
      {/* mainsail with jolly roger */}
      <mesh position={[0, 3.35, 0.35]}>
        <planeGeometry args={[2.9, 2.2, 1, 1]} />
        <meshStandardMaterial
          map={sailTex}
          color="#ffffff"
          side={THREE.DoubleSide}
          roughness={0.9}
        />
      </mesh>
      {/* top sail */}
      <mesh position={[0, 5.0, 0.35]}>
        <planeGeometry args={[1.7, 0.9]} />
        <meshStandardMaterial color="#f4ecd8" side={THREE.DoubleSide} roughness={0.9} />
      </mesh>
      {/* pennant flag */}
      <mesh position={[0.55, 5.55, 0.3]}>
        <planeGeometry args={[0.9, 0.4]} />
        <meshStandardMaterial color="#c1272d" side={THREE.DoubleSide} roughness={0.8} />
      </mesh>
    </group>
  );
}
