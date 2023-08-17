import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Stars from './Stars.tsx';
import { Preload } from '@react-three/drei';

export default function StarsCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
