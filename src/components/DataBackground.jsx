import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function MovingGrid() {
  const gridRef = useRef();

  // Moves the grid seamlessly towards the user every frame
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    gridRef.current.position.z = (time * 0.5) % 1;
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      {/* Creates a massive 100x100 wireframe floor */}
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial color="#52525b" wireframe transparent opacity={0.2} />
    </mesh>
  );
}

export default function DataBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 60 }}>
        {/* Fog perfectly matches the Tailwind dark mode background to fade the grid out */}
        <fog attach="fog" args={['#09090b', 2, 15]} />
        <MovingGrid />
      </Canvas>
    </div>
  );
}