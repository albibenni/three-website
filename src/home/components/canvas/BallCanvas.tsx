import { Technology } from '../../constants/recap.ts';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import Ball from './Ball.tsx';
import CanvasLoader from '../Loader.tsx';

interface BallCanvas {
  tech: Technology;
}
export default function BallCanvas({ tech }: BallCanvas) {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={tech.icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
