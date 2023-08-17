import { useGLTF } from '@react-three/drei';

interface ComputersProps {
  isMobile: boolean;
}
export default function Computers({ isMobile }: ComputersProps): JSX.Element {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        // eslint-disable-next-line react/no-unknown-property
        position={[-20, 50, 10]}
        // eslint-disable-next-line react/no-unknown-property
        angle={0.12}
        // eslint-disable-next-line react/no-unknown-property
        penumbra={1}
        // eslint-disable-next-line react/no-unknown-property
        intensity={1}
        // eslint-disable-next-line react/no-unknown-property
        castShadow
        // eslint-disable-next-line react/no-unknown-property
        shadow-mapSize={1024}
      />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <pointLight intensity={1} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <primitive
        // eslint-disable-next-line react/no-unknown-property
        object={computer.scene}
        // eslint-disable-next-line react/no-unknown-property
        scale={isMobile ? 0.7 : 0.75}
        // eslint-disable-next-line react/no-unknown-property
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // eslint-disable-next-line react/no-unknown-property
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}
