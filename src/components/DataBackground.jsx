import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function RotatingParticles() {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.03;
    groupRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade={true} 
        speed={1} 
      />
    </group>
  );
}

export default function DataBackground() {
  return (
    // This wrapper spans the entire height of the middle sections
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      {/* This sticky div pins the 3D canvas to your screen while you scroll */}
      <div className="sticky top-0 w-full h-screen opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <RotatingParticles />
        </Canvas>
      </div>
    </div>
  );
}