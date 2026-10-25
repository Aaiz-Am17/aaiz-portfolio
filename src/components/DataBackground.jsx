import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function RotatingParticles() {
  const groupRef = useRef();
  
  // This smoothly rotates the entire particle field
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.03;
    groupRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={50} 
        depth={50} 
        count={3500} 
        factor={3} 
        saturation={0} // Keeps it monochrome/professional
        fade={true} 
        speed={0.5} 
      />
    </group>
  );
}

export default function DataBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingParticles />
      </Canvas>
    </div>
  );
}