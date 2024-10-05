import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { MTLLoader, OBJLoader } from 'three-stdlib';

export default function Beacon() {
  const materials = useLoader(MTLLoader, '/models/beacon.mtl');
  const beacon = useLoader(OBJLoader, '/models/beacon.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={beacon} />;
}

useGLTF.preload('/models/beacon.glb');
