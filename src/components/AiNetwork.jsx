import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function PremiumNode() {
  const coreRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    // Subtle, distinct rotations for the core and the ring
    coreRef.current.rotation.y += delta * 0.2;
    coreRef.current.rotation.x += delta * 0.1;
    ringRef.current.rotation.z -= delta * 0.15;
    ringRef.current.rotation.x += delta * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Inner Geometric Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#ffffff" wireframe={true} transparent opacity={0.3} />
      </mesh>
      
      {/* Sleek Orbital Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.8, 0.02, 32, 100]} />
        <meshStandardMaterial color="#a1a1aa" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

export default function AiNetwork() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PremiumNode />
      </Canvas>
    </div>
  );
}