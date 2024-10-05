'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MTLLoader, OBJLoader } from 'three-stdlib';

export default function ThreePointVis() {
  const materials = useLoader(MTLLoader, '/models/beacon.mtl');
  const beacon = useLoader(OBJLoader, '/models/beacon.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return (
    <Canvas camera={{ position: [0, 0, 30] }} style={{ height: '100vh' }}>
      <ambientLight color="#ffffff" intensity={0.1} />
      <hemisphereLight color="#ffffff" skyColor="#ffffbb" groundColor="#080820" intensity={1.0} />
      <primitive object={beacon} />
      <OrbitControls />
    </Canvas>
  );
}
