import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { clock, pointer } = useThree();

  const particleCount = 1000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < particleCount; i++) {
      // Golden spiral / spherical distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2 + (Math.random() * 1.5);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      // Mix between gold and soft white
      color.setHex(Math.random() > 0.3 ? 0xD4AF37 : 0xf5f5f5);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.02;
      
      // Parallax effect based on mouse
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, (pointer.x * 0.5), 0.1);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, (pointer.y * 0.5), 0.1);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
