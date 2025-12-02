import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.3;
      meshRef.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={3}>
      <MeshDistortMaterial
        color="#a78bfa"
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0}
        metalness={1}
      />
    </Sphere>
  );
}

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#c084fc" />
        <pointLight position={[10, -10, -5]} intensity={1.2} color="#a78bfa" />
        <spotLight position={[0, 10, 0]} intensity={2} color="#8b5cf6" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};
