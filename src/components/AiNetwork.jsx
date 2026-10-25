import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function AbstractNode() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  // This hook runs every single frame (60fps) to calculate rotation
  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta * 0.1;
    meshRef.current.rotation.y -= delta * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        {/* Icosahedron creates a beautiful geometric "neural node" shape */}
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : "#52525b"} 
          wireframe={true} 
          transparent={true}
          opacity={hovered ? 0.8 : 0.3}
        />
      </mesh>
    </Float>
  );
}

export default function AiNetwork() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractNode />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}