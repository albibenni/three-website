import { useGLTF } from '@react-three/drei';

export default function Earth() {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}
