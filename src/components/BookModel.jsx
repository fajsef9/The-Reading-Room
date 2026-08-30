import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";

import {
  Bounds,
  Center,
  OrbitControls,
  Text,
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
          <group>

            {/* =========================
                BOOK MODEL
            ========================= */}

            <primitive object={scene} scale={1} />


            {/* =========================
                FRONT COVER TITLE
            ========================= */}

            <Text
              position={[0, -0.295, 0.43]}
              fontSize={0.32}
              color={book.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={2.4}
            >
              {book.title}
            </Text>


            {/* =========================
                FRONT COVER AUTHOR
            ========================= */}

            <Text
              position={[0, -0.6, 0.43]}
              fontSize={0.14}
              color={book.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={2.2}
            >
              {book.author}
            </Text>


            {/* =========================
                SPINE TITLE
            ========================= */}

            <Text
              position={[-1.72, -0.295, 0]}
              rotation={[0, -Math.PI / 2, -Math.PI / 2]}
              fontSize={0.16}
              color={book.textColor}
              anchorX="center"
              anchorY="middle"
              maxWidth={3.5}
            >
              {book.title}
            </Text>

          </group>
        </Center>
      </Bounds>


      {/* =========================
          LIGHTING
      ========================= */}

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[0, -5, 3]}
        intensity={1}
      />


      {/* =========================
          BOOK CONTROLS
      ========================= */}

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