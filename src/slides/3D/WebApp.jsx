import { Canvas } from "@react-three/fiber";
import { Html, Float, Environment, Plane, useTexture } from "@react-three/drei";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function PC({ scale }) {
  const texture = useTexture("./img/spreadsheet.png");
  return (
    <Plane args={[1066 * 0.01 * scale, 1057 * 0.01 * scale]}>
      <meshBasicMaterial map={texture} alphaTest={0.5} />
    </Plane>
  );
}

export default function Web05() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 25], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff);
      }}
      style={{ zIndex: 100 }}
    >
      <Environment preset="lobby" background backgroundBlurriness={0.7} />
      <Html
        center
        prepend
        style={{
          color: "#333",
          fontSize: "1rem",
          textAlign: "left",
          width: "100vw",
          userSelect: "none",
        }}
      >
        <Container
          fluid
          style={{
            padding: "1rem 1rem",
            textShadow: "0 0 10px #fff",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "2rem",
            }}
          >
            Web「ページ」を超えて
          </div>
          <div className="mt-3 d-inline-block">
            <ul className="text-start mt-5">
              <li>Webアプリ</li>
              <li>ゲーム</li>
              <li>仮想現実 (VR、AR)</li>
              <li>
                <Button
                  href="https://alice.helixcode.net/~bando/pub/KUTC3D/"
                  target="_blank"
                  style={{
                    fontSize: "1rem",
                  }}
                  size="sm"
                >
                  VR近大高専
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </Html>
      <Float
        floatIntensity={10}
        speed={3}
        rotationIntensity={0}
        position={[3, 0, 0]}
      >
        <PC scale={1.7} />
      </Float>
    </Canvas>
  );
}
