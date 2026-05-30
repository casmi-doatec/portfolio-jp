"use client";

import { useRef, useMemo, useCallback, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// --- WebGL detection ---
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

// --- Error boundary to catch WebGL failures at runtime ---
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

// --- CSS-only fallback background ---
function CSSFallbackBackground({ className }: { className: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Animated floating circles as CSS fallback */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full border border-foreground/[0.04] top-[10%] left-[15%] animate-float-slow" />
        <div
          className="absolute w-48 h-48 rounded-full border border-jp-sakura/[0.06] top-[30%] right-[20%] animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute w-32 h-32 rounded-full border border-foreground/[0.03] bottom-[20%] left-[40%] animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute w-80 h-80 rounded-full border border-jp-sakura/[0.03] top-[50%] left-[60%] animate-float-slow"
          style={{ animationDelay: "1s" }}
        />
        {/* Subtle dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-foreground/[0.06]"
            style={{
              top: `${10 + Math.sin(i * 1.7) * 40 + 40}%`,
              left: `${10 + Math.cos(i * 2.3) * 40 + 40}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// --- Three.js scene objects ---

function InkParticles({ count = 80 }) {
  const mesh = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#8b7355"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ToriiFrame({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.001;
    group.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.15;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.06, 2, 0.06]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <boxGeometry args={[0.06, 2, 0.06]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1.6, 0.06, 0.06]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[1.3, 0.04, 0.04]} />
        <meshStandardMaterial color="#1a1a2e" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function ZenCircle({
  position,
  size = 1,
}: {
  position: [number, number, number];
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={size}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial color="#2d2d3f" transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function GlassOrb({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0] * 2) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshPhysicalMaterial
          color="#e8d5c4"
          transparent
          opacity={0.25}
          roughness={0.05}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function WaveGrid() {
  const ref = useRef<THREE.Mesh>(null!);
  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 30, 60, 60), []);

  useFrame((state) => {
    if (!ref.current) return;
    const positions = ref.current.geometry.attributes.position;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.3 + time * 0.2) * 0.15 +
        Math.cos(y * 0.3 + time * 0.15) * 0.15;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial
        color="#1a1a2e"
        wireframe
        transparent
        opacity={0.04}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#fff5eb" />
      <pointLight position={[-5, 3, -5]} intensity={0.2} color="#c4a882" />

      <fog attach="fog" args={["#f5f0eb", 8, 25]} />

      <InkParticles count={100} />
      <WaveGrid />

      <ToriiFrame position={[-3.5, 1, -5]} rotation={[0, 0.3, 0]} scale={0.8} />
      <ToriiFrame position={[4, -0.5, -7]} rotation={[0, -0.5, 0]} scale={0.6} />
      <ToriiFrame position={[1, 2.5, -9]} rotation={[0, 0.1, 0]} scale={0.5} />

      <ZenCircle position={[-2, 0.5, -3]} size={0.8} />
      <ZenCircle position={[3, -1, -4]} size={1.2} />
      <ZenCircle position={[0, 2, -6]} size={0.6} />

      <GlassOrb position={[-1.5, 1, -2]} />
      <GlassOrb position={[2, -0.5, -3]} />
      <GlassOrb position={[0.5, 2.5, -4]} />
    </>
  );
}

// --- Main exported component with WebGL check + error boundary ---

export function ThreeScene({ className = "" }: { className?: string }) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.toneMapping = THREE.ACESFilmicToneMapping;
    state.gl.toneMappingExposure = 1.2;
  }, []);

  // Still detecting
  if (webglSupported === null) return null;

  // No WebGL — use CSS fallback
  if (!webglSupported) {
    return <CSSFallbackBackground className={className} />;
  }

  // WebGL available — render Three.js inside error boundary
  return (
    <WebGLErrorBoundary fallback={<CSSFallbackBackground className={className} />}>
      <div className={`absolute inset-0 ${className}`}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          onCreated={handleCreated}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
