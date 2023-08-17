import { Decal, Float, useTexture } from '@react-three/drei';

interface BallProps {
  icon: string;
}
export default function Ball({ icon }: BallProps) {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={0.25} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <directionalLight position={[0, 0, 0.05]} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <mesh castShadow scale={2.75} receiveShadow>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          //eslint-disable-next-line react/no-unknown-property
          polygonOffset
          //eslint-disable-next-line react/no-unknown-property
          polygonOffsetFactor={-5}
          //eslint-disable-next-line react/no-unknown-property
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          flatShading
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
}
