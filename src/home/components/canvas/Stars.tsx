import { useRef, useState } from 'react';
import { random } from 'maath';
import { useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';

export default function Stars() {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  useFrame((_state, delta) => {
    if (ref !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.rotation.x -= delta / 10;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
