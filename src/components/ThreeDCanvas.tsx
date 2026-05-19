import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlowingMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      // Rotation based on time
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.08;

      // Mouse parallax shift
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 1.5, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 1.5, 0.1);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Holographic Sphere (Symbolizing Attention & Virality) */}
      <Sphere args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#D4AF37"
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2}
          wireframe={true}
        />
      </Sphere>

      {/* Orbiting Satellite Particle Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 450 }, () => (Math.random() - 0.5) * 6)
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

const ThreeDCanvas: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

        <GlowingMesh />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDCanvas;
