import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial, Stars, Float, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return mouse;
}

// Neon glowing core sphere - cyberpunk focal point
function CyberSphere({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 1.5, 0.03);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 1.5, 0.03);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (glowRef.current) {
      glowRef.current.position.copy(meshRef.current!.position);
      glowRef.current.scale.setScalar(1.3 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Outer glow */}
        <Sphere ref={glowRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#ff6b00" transparent opacity={0.15} />
        </Sphere>
        {/* Main sphere */}
        <Sphere ref={meshRef} args={[1.2, 100, 100]} scale={1.5} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ff8c00"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            emissive="#ff4500"
            emissiveIntensity={0.6}
          />
        </Sphere>
      </group>
    </Float>
  );
}

// Cyberpunk floating octahedron
function CyberOctahedron({ mouse, offset, delay = 0 }: { mouse: { x: number; y: number }; offset: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2.5 + offset[0], 0.02);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2.5 + offset[1] + Math.sin(time * 0.5) * 0.4, 0.02);
      meshRef.current.rotation.x = time * 0.4;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <Octahedron ref={meshRef} args={[0.8]} position={offset}>
      <MeshDistortMaterial
        color="#ffd700"
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.15}
        metalness={0.8}
        emissive="#ff9500"
        emissiveIntensity={0.4}
        wireframe
      />
    </Octahedron>
  );
}

// Neon torus rings
function NeonTorus({ mouse, offset, scale = 1, color = "#ff6b00" }: { mouse: { x: number; y: number }; offset: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, -mouse.x * 2.5 + offset[0], 0.02);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -mouse.y * 2.5 + offset[1], 0.02);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Torus ref={meshRef} args={[1, 0.15, 32, 100]} position={offset} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.95}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </Torus>
    </Float>
  );
}

// Cyberpunk icosahedron
function CyberIcosahedron({ position, color, scale = 0.5 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.5 + position[0]) * 0.3;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[scale, 1]} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe
      />
    </Icosahedron>
  );
}

// Cyberpunk cubes with glowing edges
function GlowingCube({ mouse, offset, delay = 0, color = "#ffa500" }: { mouse: { x: number; y: number }; offset: [number, number, number]; delay?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2 + offset[0], 0.015);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2 + offset[1] + Math.sin(time * 0.6) * 0.3, 0.015);
      meshRef.current.rotation.x = time * 0.25;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={offset}>
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Box>
  );
}

// Cyberpunk particle field
function CyberParticles({ mouse }: { mouse: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Cyberpunk color palette: neon orange, gold, deep cream
    const colorPalette = [
      new THREE.Color('#ff6b00'), // Neon orange
      new THREE.Color('#ffa500'), // Orange
      new THREE.Color('#ffd700'), // Gold
      new THREE.Color('#fff4e6'), // Cream
      new THREE.Color('#ff8c00'), // Dark orange
      new THREE.Color('#ffb347'), // Light orange
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02 + mouse.x * 0.15;
      particlesRef.current.rotation.x = mouse.y * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={300}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors 
        transparent 
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

// Grid floor for cyberpunk effect
function CyberGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2;
    }
  });

  return (
    <group ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <gridHelper args={[50, 50, '#ff6b00', '#331a00']} />
    </group>
  );
}

function Scene() {
  const mouse = useMousePosition();
  
  return (
    <>
      {/* Cyberpunk starfield */}
      <Stars 
        radius={120} 
        depth={60} 
        count={4000} 
        factor={4} 
        saturation={0.3} 
        fade 
        speed={0.3} 
      />
      
      {/* Cyberpunk lighting setup */}
      <ambientLight intensity={0.3} color="#fff4e6" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ff8c00" />
      <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#ffd700" />
      <pointLight position={[0, 0, 5]} intensity={3} color="#ff6b00" distance={20} />
      <pointLight position={[-6, -6, 3]} intensity={2} color="#ff4500" distance={15} />
      <pointLight position={[6, 6, 2]} intensity={1.5} color="#ffa500" distance={12} />
      <spotLight position={[0, 12, 0]} intensity={2.5} color="#ff9500" angle={0.7} penumbra={0.5} />
      
      {/* Main cyber sphere */}
      <CyberSphere mouse={mouse} />
      
      {/* Floating octahedrons */}
      <CyberOctahedron mouse={mouse} offset={[-4, 2, -2]} delay={0} />
      <CyberOctahedron mouse={mouse} offset={[4, -2, -3]} delay={1.5} />
      
      {/* Neon torus rings */}
      <NeonTorus mouse={mouse} offset={[3, 2.5, -1.5]} scale={0.7} color="#ff6b00" />
      <NeonTorus mouse={mouse} offset={[-3.5, -1.5, -2.5]} scale={0.5} color="#ffd700" />
      <NeonTorus mouse={mouse} offset={[0, -3, -2]} scale={0.6} color="#ff8c00" />
      
      {/* Glowing cubes */}
      <GlowingCube mouse={mouse} offset={[-3, 1, -1.5]} delay={0} color="#ffa500" />
      <GlowingCube mouse={mouse} offset={[3.5, -1, -2]} delay={1} color="#ffd700" />
      <GlowingCube mouse={mouse} offset={[-2, -2.5, -1]} delay={2} color="#ff8c00" />
      
      {/* Cyber icosahedrons */}
      <CyberIcosahedron position={[5, 1, -2.5]} color="#ff6b00" scale={0.4} />
      <CyberIcosahedron position={[-5, 2.5, -3]} color="#ffd700" scale={0.35} />
      <CyberIcosahedron position={[2, -3.5, -1.5]} color="#ffa500" scale={0.3} />
      <CyberIcosahedron position={[-3, 3.5, -2]} color="#ff8c00" scale={0.38} />
      <CyberIcosahedron position={[4, -2, -2.5]} color="#fff4e6" scale={0.25} />
      
      {/* Cyberpunk particles */}
      <CyberParticles mouse={mouse} />
      
      {/* Grid floor */}
      <CyberGrid />
    </>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 70 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0d0604']} />
        <fog attach="fog" args={['#0d0604', 10, 30]} />
        <Scene />
      </Canvas>
    </div>
  );
};
