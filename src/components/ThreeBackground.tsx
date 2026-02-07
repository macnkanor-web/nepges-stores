import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial, Stars, Float, Environment } from '@react-three/drei';
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

// Warm glowing sphere - main focal point
function WarmSphere({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 1.5, 0.03);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 1.5, 0.03);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.2, 100, 100]} scale={1.5} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#f97316"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.8}
          emissive="#f97316"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

// Cream colored floating cubes
function CreamCube({ mouse, offset, delay = 0 }: { mouse: { x: number; y: number }; offset: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2 + offset[0], 0.02);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2 + offset[1] + Math.sin(time * 0.5) * 0.3, 0.02);
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={offset}>
      <MeshDistortMaterial
        color="#fef3c7"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.6}
      />
    </Box>
  );
}

// Orange torus rings
function OrangeTorus({ mouse, offset, scale = 1 }: { mouse: { x: number; y: number }; offset: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, -mouse.x * 2 + offset[0], 0.025);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -mouse.y * 2 + offset[1], 0.025);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[0.8, 0.3, 32, 100]} position={offset} scale={scale}>
        <MeshDistortMaterial
          color="#ea580c"
          attach="material"
          distort={0.25}
          speed={2.5}
          roughness={0.15}
          metalness={0.9}
          emissive="#ea580c"
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
}

// Warm floating particles
function WarmParticles({ mouse }: { mouse: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Warm color palette: orange, cream, coral
    const colorPalette = [
      new THREE.Color('#f97316'), // Orange
      new THREE.Color('#fef3c7'), // Cream
      new THREE.Color('#fb923c'), // Light orange
      new THREE.Color('#fcd34d'), // Warm yellow
      new THREE.Color('#f59e0b'), // Amber
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03 + mouse.x * 0.2;
      particlesRef.current.rotation.x = mouse.y * 0.15;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.12} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Small decorative spheres
function DecoSphere({ position, color, scale = 0.3 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.7}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
}

function Scene() {
  const mouse = useMousePosition();
  
  return (
    <>
      {/* Warm starfield background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={3} 
        saturation={0.5} 
        fade 
        speed={0.5} 
      />
      
      {/* Warm lighting setup */}
      <ambientLight intensity={0.4} color="#fef3c7" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#f97316" />
      <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#fcd34d" />
      <pointLight position={[0, 0, 5]} intensity={2} color="#f97316" distance={15} />
      <pointLight position={[-5, -5, 3]} intensity={1.5} color="#ea580c" distance={12} />
      <pointLight position={[5, 5, 2]} intensity={1.2} color="#fef3c7" distance={10} />
      <spotLight position={[0, 10, 0]} intensity={2} color="#fb923c" angle={0.6} penumbra={0.5} />
      
      {/* Main elements */}
      <WarmSphere mouse={mouse} />
      
      {/* Floating cubes */}
      <CreamCube mouse={mouse} offset={[-3, 1.5, -2]} delay={0} />
      <CreamCube mouse={mouse} offset={[3.5, -1.5, -3]} delay={1} />
      <CreamCube mouse={mouse} offset={[-2.5, -2, -1.5]} delay={2} />
      
      {/* Torus rings */}
      <OrangeTorus mouse={mouse} offset={[2.5, 2, -1.5]} scale={0.8} />
      <OrangeTorus mouse={mouse} offset={[-3, -1, -2.5]} scale={0.6} />
      
      {/* Small decorative spheres */}
      <DecoSphere position={[4, 0, -2]} color="#f97316" scale={0.25} />
      <DecoSphere position={[-4, 2, -3]} color="#fcd34d" scale={0.2} />
      <DecoSphere position={[1, -3, -1]} color="#fb923c" scale={0.18} />
      <DecoSphere position={[-2, 3, -2]} color="#fef3c7" scale={0.22} />
      <DecoSphere position={[3, -2, -2.5]} color="#ea580c" scale={0.15} />
      
      {/* Warm particles */}
      <WarmParticles mouse={mouse} />
    </>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#1a0f08']} />
        <fog attach="fog" args={['#1a0f08', 8, 25]} />
        <Scene />
      </Canvas>
    </div>
  );
};
