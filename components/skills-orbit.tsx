"use client";

import {
  useRef,
  useMemo,
  useState,
  useEffect,
  Component,
  type ReactNode,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
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

const CATEGORIES = [
  {
    title: "AI・LLM",
    color: "#c4848a",
    skills: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "LangGraph", "RAG", "AI Agent", "MCP"],
  },
  {
    title: "フロントエンド",
    color: "#8a9ec4",
    skills: ["React", "TypeScript", "Next.js", "Vue.js"],
  },
  {
    title: "バックエンド",
    color: "#8ac4a4",
    skills: ["Python", "Node.js", "PHP / Laravel", "Ruby on Rails"],
  },
  {
    title: "モバイル",
    color: "#c4b48a",
    skills: ["Flutter", "React Native"],
  },
  {
    title: "クラウド・インフラ",
    color: "#a48ac4",
    skills: ["AWS", "Docker", "Terraform"],
  },
  {
    title: "データベース",
    color: "#8ac4c4",
    skills: ["PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "AI・MLOps",
    color: "#c4a48a",
    skills: ["PyTorch", "TensorFlow", "vLLM", "Model Deployment"],
  },
];

function SkillSatellite({
  name,
  radius,
  speed,
  offset,
  inclination,
  color,
}: {
  name: string;
  radius: number;
  speed: number;
  offset: number;
  inclination: number;
  color: string;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.y = Math.sin(t * inclination) * radius * 0.3;
    groupRef.current.position.z = Math.sin(t) * radius;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.75}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      <Html center distanceFactor={10} style={{ pointerEvents: "none" }}>
        <span
          style={{
            color: "rgba(50,40,35,0.88)",
            fontSize: "7.5px",
            letterSpacing: "0.07em",
            whiteSpace: "nowrap",
            padding: "2px 5px",
            background: "rgba(248,243,238,0.82)",
            border: `1px solid ${color}55`,
            backdropFilter: "blur(3px)",
            display: "block",
            marginTop: "10px",
          }}
        >
          {name}
        </span>
      </Html>
    </group>
  );
}

function CategoryPlanet({
  category,
  index,
  total,
}: {
  category: (typeof CATEGORIES)[0];
  index: number;
  total: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const baseAngle = (index / total) * Math.PI * 2;
  const orbitRadius = 3.0;
  const orbitSpeed = 0.038 + index * 0.005;
  const tilt = 0.55 + index * 0.12;

  useFrame((state) => {
    const t = state.clock.elapsedTime * orbitSpeed + baseAngle;
    groupRef.current.position.x = Math.cos(t) * orbitRadius;
    groupRef.current.position.y = Math.sin(t * 0.5) * tilt;
    groupRef.current.position.z = Math.sin(t) * orbitRadius;
  });

  const ringGeom = useMemo(
    () => new THREE.TorusGeometry(0.85, 0.004, 8, 80),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Planet */}
      <mesh>
        <sphereGeometry args={[0.15, 20, 20]} />
        <meshPhysicalMaterial
          color={category.color}
          emissive={category.color}
          emissiveIntensity={0.45}
          transparent
          opacity={0.92}
          roughness={0.25}
          metalness={0.1}
        />
      </mesh>

      {/* Category label */}
      <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
        <div
          style={{
            color: "rgba(40,30,25,0.92)",
            fontSize: "8.5px",
            fontWeight: "700",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            padding: "3px 8px",
            background: "rgba(248,243,238,0.88)",
            border: `1px solid ${category.color}70`,
            backdropFilter: "blur(4px)",
            marginTop: "22px",
          }}
        >
          {category.title}
        </div>
      </Html>

      {/* Skill orbit ring */}
      <mesh rotation={[0.35 + index * 0.08, 0, 0]} geometry={ringGeom}>
        <meshStandardMaterial
          color={category.color}
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Skill satellites */}
      {category.skills.map((skill, i) => (
        <SkillSatellite
          key={skill}
          name={skill}
          radius={0.72 + (i % 3) * 0.14}
          speed={0.22 + i * 0.035}
          offset={(i / category.skills.length) * Math.PI * 2}
          inclination={0.45 + (i % 2) * 0.25}
          color={category.color}
        />
      ))}
    </group>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    ref.current.rotation.x = state.clock.elapsedTime * 0.04;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <meshPhysicalMaterial
        color="#c4a882"
        emissive="#c4a882"
        emissiveIntensity={0.6}
        transparent
        opacity={0.5}
        roughness={0.1}
        metalness={0.3}
      />
    </mesh>
  );
}

function MainOrbitRings() {
  const geom1 = useMemo(() => new THREE.TorusGeometry(3.0, 0.006, 8, 120), []);
  const geom2 = useMemo(() => new THREE.TorusGeometry(3.0, 0.003, 8, 120), []);

  return (
    <>
      <mesh rotation={[0.18, 0, 0]} geometry={geom1}>
        <meshStandardMaterial color="#c4a882" transparent opacity={0.07} />
      </mesh>
      <mesh rotation={[-0.12, 0.6, 0]} geometry={geom2}>
        <meshStandardMaterial color="#c4a882" transparent opacity={0.04} />
      </mesh>
    </>
  );
}

function BackgroundParticles() {
  const mesh = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(70 * 3);
    for (let i = 0; i < 70; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.008;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.004;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.032}
        color="#9b8575"
        transparent
        opacity={0.22}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.012;
  });

  return (
    <group ref={groupRef}>
      <CoreSphere />
      <MainOrbitRings />
      {CATEGORIES.map((cat, i) => (
        <CategoryPlanet
          key={cat.title}
          category={cat}
          index={i}
          total={CATEGORIES.length}
        />
      ))}
    </group>
  );
}

function FallbackGrid() {
  return (
    <div className="py-12 space-y-6">
      {CATEGORIES.map((cat) => (
        <div key={cat.title} className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 w-28 shrink-0">
            {cat.title}
          </span>
          {cat.skills.map((s) => (
            <span
              key={s}
              className="text-[11px] px-3 py-1.5 border border-foreground/[0.08] text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkillsOrbit() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (webglSupported === null) return <div className="h-[540px]" />;
  if (!webglSupported) return <FallbackGrid />;

  return (
    <WebGLErrorBoundary fallback={<FallbackGrid />}>
      <div className="w-full h-[520px] lg:h-[600px]">
        <Canvas
          camera={{ position: [0, 2.5, 9.5], fov: 52 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.3} color="#fff5eb" />
          <pointLight position={[0, 0, 4]} intensity={0.5} color="#c4a882" />
          <BackgroundParticles />
          <SceneGroup />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
