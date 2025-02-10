"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Float } from "@react-three/drei";
import { useState } from "react";
import CugnotAppleton from "@/assets/CugnotAppleton.jpg";
import firstWebpage from "@/assets/firstWebpage.png";

function Years() {
  const [idx, setIdx] = useState(0);
  const { camera } = useThree();
  useFrame(() => {
    if (idx === 0 && camera.position.z < 0) setIdx(1);
    if (idx === 1 && camera.position.z > 0) setIdx(0);
  });
  return (
    <Html
      center
      prepend
      style={{
        color: "#333",
        fontSize: "min(26vw, 240px)",
        textAlign: "center",
        width: "100vw",
        userSelect: "none",
        pointerEvents: "none",
      }}
      transform
      rotation={[0, idx % 2 === 0 ? 0 : Math.PI, 0]}
    >
      {idx === 0 ? (
        <div>1769年</div>
      ) : (
        <div
          style={{
            fontSize: "min(15vw, 200px)",
            lineHeight: "1.1",
          }}
        >
          人類最初の
          <br />
          <span className="fw-bold text-primary">自動車</span>が誕生
        </div>
      )}
    </Html>
  );
}

export function WebIntro01() {
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
      <Years />
      <OrbitControls />
    </Canvas>
  );
}



export function WebIntro02() {
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
      <Html
        center
        prepend
        style={{
          color: "#333",
          fontSize: "min(8vw, 50px)",
          textAlign: "center",
          width: "100vw",
          userSelect: "none",
          pointerEvents: "none",
        }}
        transform
      >
        <div className="text-center w-100">
          <div>人類最初の自動車</div>
          <div>キュニョーの砲車 (蒸気)</div>
          <img
            style={{
              width: "min(80vw, 1200px)",
            }}
            src={CugnotAppleton.src}
            alt="CugnotAppleton"
          />
          <div>255年前</div>
        </div>
      </Html>
      <OrbitControls />
    </Canvas>
  );
}


function Years2() {
  const [idx, setIdx] = useState(0);
  const { camera } = useThree();
  useFrame(() => {
    if (idx === 0 && camera.position.z < 0) setIdx(1);
    if (idx === 1 && camera.position.z > 0) setIdx(0);
  });
  return (
    <Html
      center
      prepend
      style={{
        color: "#333",
        fontSize: "min(22vw, 220px)",
        textAlign: "center",
        width: "100vw",
        lineHeight: "1.1",
        userSelect: "none",
        pointerEvents: "none",
      }}
      transform
      rotation={[0, idx % 2 === 0 ? 0 : Math.PI, 0]}
    >
      {idx === 0 ? (
        <div>
          1990年
          <br />
          12月20日
        </div>
      ) : (
        <div
          style={{
            fontSize: "min(11vw, 160px)",
            lineHeight: "1.1",
          }}
        >
          人類最初の
          <br />
          <span className="fw-bold text-danger">Webページ</span>
          が誕生
        </div>
      )}
    </Html>
  );
}

export function WebIntro03() {
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
      <Years2 />
      <OrbitControls />
    </Canvas>
  );
}


export function WebIntro04() {
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
      {/* <Environment preset="forest" background backgroundBlurriness={0.7} /> */}
      <Float floatIntensity={6} rotationIntensity={2}>
        <Html
          center
          prepend
          style={{
            color: "#333",
            fontSize: "min(8vw, 50px)",
            textAlign: "center",
            width: "100vw",
            userSelect: "none",
            pointerEvents: "none",
          }}
          transform
        >
          <div style={{ lineHeight: "1.1" }}>もう少しで34年前 (33歳)</div>
          <img className="mw-100" src={firstWebpage.src} alt="firstWebpage" />
        </Html>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}