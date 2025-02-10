import { Canvas } from "@react-three/fiber";
import { Environment, Html, Float, OrbitControls } from "@react-three/drei";

export default function KtcWeb() {
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
      <Environment preset="dawn" background backgroundBlurriness={0.7} />
      <Float floatIntensity={10} rotationIntensity={4}>
        <Html
          className="mw-100"
          style={{ userSelect: "none", pointerEvents: "none" }}
          transform
        >
          <iframe
            title="embed_alice"
            src="https://alice.helixcode.net/~bando/"
            width={500}
            height={700}
          />
        </Html>
        <Html
          className="mw-100"
          style={{ userSelect: "none", pointerEvents: "none" }}
          transform
          rotation={[0, Math.PI, 0]}
          position={[0, 0, -0.1]}
        >
          <iframe
            title="embed"
            src="https://www.ktc.ac.jp"
            width={500}
            height={700}
          />
        </Html>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}