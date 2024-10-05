'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Beacon from '@/components/Beacon';

export default function ThreePointVis() {
  return (
    <Canvas camera={{ position: [0, 0, 30] }} style={{ height: '100vh' }}>
      <ambientLight color="#9999ff" intensity={0.3} />
      <hemisphereLight color="#ffffff" groundColor="#080820" intensity={0.8} />
      <Beacon />
      <OrbitControls />
    </Canvas>
  );
}
