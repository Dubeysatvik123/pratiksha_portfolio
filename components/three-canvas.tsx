"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null)

  // Subtle mouse movement reaction
  useFrame((state) => {
    if (sphereRef.current) {
      const { x, y } = state.mouse
      sphereRef.current.rotation.x = THREE.MathUtils.lerp(sphereRef.current.rotation.x, y * 0.5, 0.1)
      sphereRef.current.rotation.y = THREE.MathUtils.lerp(sphereRef.current.rotation.y, x * 0.5, 0.1)
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={1.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#4F46E5" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#10B981" />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]} scale={1.2}>
          <MeshDistortMaterial color="#4F46E5" speed={3} distort={0.4} radius={1} roughness={0.1} metalness={0.8} />
        </Sphere>
      </Float>
    </>
  )
}

export function ThreeCanvas() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none opacity-40">
      <Canvas dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  )
}
