import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function Torus() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={1}
          metalness={0.8}
          roughness={0.2}
          wireframe={true}
          distort={0.3}
          speed={2}
          opacity={0.15}
          transparent={true}
        />
      </mesh>
    </Float>
  );
}

export default function DataTorus() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Torus />
      </Canvas>
    </div>
  );
}