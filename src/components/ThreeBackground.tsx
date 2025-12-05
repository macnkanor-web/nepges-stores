import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Torus, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    });
  }
  
  return mouse;
}

function AnimatedSphere({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse with smooth lerp
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 2, 0.05);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#ec4899"
        attach="material"
        distort={0.6}
        speed={4}
        roughness={0}
        metalness={1}
      />
    </Sphere>
  );
}

function AnimatedBox({ mouse, offset }: { mouse: { x: number; y: number }; offset: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse with offset and delay
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 3 + offset[0], 0.03);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 3 + offset[1], 0.03);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={offset}>
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

function AnimatedTorus({ mouse, offset }: { mouse: { x: number; y: number }; offset: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse inversely for contrast
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, -mouse.x * 2.5 + offset[0], 0.04);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, -mouse.y * 2.5 + offset[1], 0.04);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.6;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 32, 100]} position={offset}>
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

function FloatingParticles({ mouse }: { mouse: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05 + mouse.x * 0.3;
      particlesRef.current.rotation.x = mouse.y * 0.2;
    }
  });

  const count = 150;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 25;
    positions[i + 1] = (Math.random() - 0.5) * 25;
    positions[i + 2] = (Math.random() - 0.5) * 20;
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
      <pointsMaterial size={0.15} color="#a78bfa" transparent opacity={0.8} />
    </points>
  );
}

function Scene() {
  const mouse = useMousePosition();
  
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ec4899" />
      <pointLight position={[-10, -10, -5]} intensity={2.5} color="#8b5cf6" />
      <pointLight position={[10, -10, 5]} intensity={2} color="#06b6d4" />
      <spotLight position={[0, 10, 0]} intensity={4} color="#a78bfa" angle={0.5} />
      
      <AnimatedSphere mouse={mouse} />
      <AnimatedBox mouse={mouse} offset={[-3, 1, -2]} />
      <AnimatedBox mouse={mouse} offset={[3, -2, -3]} />
      <AnimatedTorus mouse={mouse} offset={[2, 2, -1]} />
      <AnimatedTorus mouse={mouse} offset={[-2, -1, -2]} />
      
      <FloatingParticles mouse={mouse} />
    </>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
