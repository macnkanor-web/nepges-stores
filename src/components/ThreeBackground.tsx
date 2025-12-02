import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5} position={position}>
      <MeshDistortMaterial
        color="#ec4899"
        attach="material"
        distort={0.8}
        speed={4}
        roughness={0}
        metalness={1}
      />
    </Sphere>
  );
}

function AnimatedBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.getElapsedTime() * 0.8) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.5}
        speed={3}
        roughness={0.1}
        metalness={0.9}
      />
    </Box>
  );
}

function AnimatedTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.getElapsedTime() * 0.7) * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 32, 100]} position={position}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={3.5}
        roughness={0}
        metalness={1}
      />
    </Torus>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 15;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#a78bfa" transparent opacity={0.6} />
    </points>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ec4899" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#8b5cf6" />
        <pointLight position={[10, -10, 5]} intensity={1.5} color="#06b6d4" />
        <spotLight position={[0, 10, 0]} intensity={3} color="#a78bfa" angle={0.5} />
        
        <AnimatedSphere position={[0, 0, 0]} />
        <AnimatedBox position={[-3, 1, -2]} />
        <AnimatedTorus position={[3, -1, -1]} />
        <AnimatedSphere position={[2, 2, -3]} />
        <AnimatedBox position={[-2, -2, -2]} />
        
        <FloatingParticles />
      </Canvas>
    </div>
  );
};
