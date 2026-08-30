import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

function BookScene({ book }) {
  const { scene } = useGLTF("/models/book.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (
        child.isMesh &&
        child.material &&
        child.material.name === "BaseColor"
      ) {
        child.material.color.set(book.color);
      }
    });
  }, [scene, book]);

  return (
    <>
      <Bounds fit clip observe margin={1.4}>
        <Center>
          <primitive object={scene} scale={1} />
        </Center>
      </Bounds>

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[0, -5, 3]}
        intensity={1}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </>
  );
}

function BookModel({ book }) {
  return (
    <div className="book-model">
      <Canvas camera={{ fov: 40 }}>
        <BookScene book={book} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/book.glb");

export default BookModel;