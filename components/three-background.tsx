"use client";

import { useRef, useMemo, useState, useEffect, useCallback, Component, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return gl !== null;
  } catch {
    return false;
  }
}

class WebGLErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: ReactNode; children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// Scrolling particles that follow the viewport
function ScrollParticles({ count = 150 }) {
  const mesh = useRef<THREE.Points>(null!);
  const scrollRef = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.008;
    mesh.current.position.y = scrollRef.current * 0.005;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        color="#9b8575"
        transparent
        opacity={0.2}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Floating zen circles at different depths
function FloatingEnso({ position, size = 1, speed = 0.05 }: {
  position: [number, number, number];
  size?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15 + position[1]) * 0.15;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.2}>
      <mesh ref={ref} position={position} scale={size}>
        <torusGeometry args={[1, 0.012, 16, 100]} />
        <meshStandardMaterial color="#2d2d3f" transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

// Slowly drifting geometric frames
function DriftingFrame({ position, rotation, scale = 1 }: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const group = useRef<THREE.Group>(null!);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.0008;
    group.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.2 +
      scrollRef.current * 0.003;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh position={[-0.5, 0, 0]}>
        <boxGeometry args={[0.04, 1.6, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.08} />
      </mesh>
      <mesh position={[0.5, 0, 0]}>
        <boxGeometry args={[0.04, 1.6, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.08} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1.2, 0.04, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.08} />
      </mesh>
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.0, 0.03, 0.03]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

// Sakura petal-like floating orbs
function SakuraOrb({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0] * 3) * 0.3;
    ref.current.position.x =
      position[0] + Math.cos(state.clock.elapsedTime * 0.2 + position[1]) * 0.1;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial
          color="#d4a0a0"
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.05}
        />
      </mesh>
    </Float>
  );
}

// Wave plane at the bottom
function WavePlane() {
  const ref = useRef<THREE.Mesh>(null!);
  const geometry = useMemo(() => new THREE.PlaneGeometry(40, 40, 80, 80), []);

  useFrame((state) => {
    if (!ref.current) return;
    const positions = ref.current.geometry.attributes.position;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      positions.setZ(
        i,
        Math.sin(x * 0.25 + time * 0.15) * 0.12 +
        Math.cos(y * 0.25 + time * 0.1) * 0.12
      );
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial color="#1a1a2e" wireframe transparent opacity={0.025} />
    </mesh>
  );
}

// Camera that responds to scroll
function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const targetY = -(scrollRef.current * 0.001);
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.rotation.x = -(scrollRef.current * 0.00003);
  });

  return null;
}

function GlobalScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={0.2} color="#fff5eb" />
      <pointLight position={[-8, 5, -5]} intensity={0.15} color="#c4a882" />

      <fog attach="fog" args={["#f5f0eb", 10, 30]} />

      <ScrollCamera />
      <ScrollParticles count={180} />
      <WavePlane />

      {/* Torii frames scattered across the page depth */}
      <DriftingFrame position={[-4, 2, -6]} rotation={[0, 0.3, 0]} scale={0.7} />
      <DriftingFrame position={[5, -3, -8]} rotation={[0, -0.4, 0]} scale={0.5} />
      <DriftingFrame position={[-2, -8, -10]} rotation={[0, 0.2, 0]} scale={0.6} />
      <DriftingFrame position={[3, -15, -7]} rotation={[0, -0.3, 0]} scale={0.4} />
      <DriftingFrame position={[-5, -22, -9]} rotation={[0, 0.5, 0]} scale={0.55} />

      {/* Zen circles */}
      <FloatingEnso position={[-3, 1, -4]} size={0.7} speed={0.04} />
      <FloatingEnso position={[4, -5, -5]} size={1.0} speed={0.03} />
      <FloatingEnso position={[-1, -12, -3]} size={0.5} speed={0.06} />
      <FloatingEnso position={[2, -18, -6]} size={0.8} speed={0.035} />
      <FloatingEnso position={[-4, -25, -4]} size={0.6} speed={0.045} />

      {/* Sakura orbs floating throughout */}
      <SakuraOrb position={[-2, 0, -2]} />
      <SakuraOrb position={[3, -2, -3]} />
      <SakuraOrb position={[1, -7, -2.5]} />
      <SakuraOrb position={[-3, -10, -3]} />
      <SakuraOrb position={[2, -14, -2]} />
      <SakuraOrb position={[-1, -19, -3.5]} />
      <SakuraOrb position={[4, -23, -2.5]} />
      <SakuraOrb position={[-2, -28, -3]} />
    </>
  );
}

function CSSFallbackBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full border border-foreground/[0.03] top-[5%] left-[10%] animate-float-slow" />
      <div className="absolute w-56 h-56 rounded-full border border-jp-sakura/[0.05] top-[25%] right-[15%] animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute w-40 h-40 rounded-full border border-foreground/[0.02] top-[50%] left-[35%] animate-float-slow" style={{ animationDelay: "4s" }} />
      <div className="absolute w-64 h-64 rounded-full border border-jp-sakura/[0.03] top-[70%] right-[25%] animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute w-48 h-48 rounded-full border border-foreground/[0.02] top-[90%] left-[20%] animate-float-slow" style={{ animationDelay: "3s" }} />
    </div>
  );
}

export function ThreeBackground() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.toneMapping = THREE.ACESFilmicToneMapping;
    state.gl.toneMappingExposure = 1.1;
  }, []);

  if (webglSupported === null) return null;

  if (!webglSupported) {
    return <CSSFallbackBackground />;
  }

  return (
    <WebGLErrorBoundary fallback={<CSSFallbackBackground />}>
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          onCreated={handleCreated}
          style={{ background: "transparent" }}
        >
          <GlobalScene />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
