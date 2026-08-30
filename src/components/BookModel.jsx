import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BookScene() {
  const { scene } = useGLTF("/models/book.glb");

  return (
    <>
      <primitive
        object={scene}
        scale={1}
        position={[0, 0, 0]}
      />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minAzimuthAngle={-0.8}
        maxAzimuthAngle={0.8}
        minPolarAngle={Math.PI / 2 - 0.3}
        maxPolarAngle={Math.PI / 2 + 0.3}
      />
    </>
  );
}

function BookModel() {
  return (
    <div className="book-model">
      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 40,
        }}
      >
        <BookScene />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/book.glb");

export default BookModel;