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
                COVER LABEL
                THE READING ROOM
            ========================= */}

            <Text
              position={[-1.05, -0.12, 0.43]}
              font="/fonts/DMMono-Regular.ttf"
              fontSize={0.09}
              color={book.textColor}
              anchorX="left"
              anchorY="middle"
              letterSpacing={0.08}
            >
              THE READING ROOM
            </Text>


            {/* =========================
                FRONT COVER TITLE
            ========================= */}

            <Text
              position={[-1.05, -0.42, 0.43]}
              font="/fonts/PlayfairDisplay-Regular.ttf"
              fontSize={
                book.title.length > 20
                  ? 0.22
                  : book.title.length > 15
                    ? 0.28
                    : 0.38
              }
              color={book.textColor}
              anchorX="left"
              anchorY="middle"
              maxWidth={2.35}
              lineHeight={0.85}
            >
              {book.title}
            </Text>


            {/* =========================
                FRONT COVER AUTHOR
            ========================= */}

            <Text
              position={[-1.05, -0.75, 0.43]}
              font="/fonts/DMMono-Regular.ttf"
              fontSize={0.10}
              color={book.textColor}
              anchorX="left"
              anchorY="middle"
            >
              {book.author}
            </Text>


            {/* =========================
                COVER FOOTER
            ========================= */}

            <Text
              position={[-1.05, -1.75, 0.43]}
              font="/fonts/DMMono-Regular.ttf"
              fontSize={0.065}
              color={book.textColor}
              anchorX="left"
              anchorY="middle"
              letterSpacing={0.05}
            >
              PERSONAL EDITION
            </Text>


            <Text
              position={[0.95, -1.75, 0.43]}
              font="/fonts/DMMono-Regular.ttf"
              fontSize={0.065}
              color={book.textColor}
              anchorX="right"
              anchorY="middle"
            >
              2026
            </Text>


            {/* =========================
                SPINE TITLE
            ========================= */}

            <Text
              position={[-1.72, -0.295, 0]}
              rotation={[0, -Math.PI / 2, -Math.PI / 2]}
              font="/fonts/DMMono-Regular.ttf"
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