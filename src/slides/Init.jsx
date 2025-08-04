"use client"
import { useEffect } from "react";
import styles from "./Init.module.scss";

export default function Init() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `/mie-academic-seminar-2025/?page=${1}`;
    }, 10000);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url(/mie-academic-seminar-2025/bg/bg_black.png)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 3,
        }}
        className={styles.bgBlack}
      >
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url(/mie-academic-seminar-2025/bg/bg_white.png)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{
          fontSize: "min(7vw, 80px)",
          color: "rgba(0, 0, 0, 0.8)",
          textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.8)",
          lineHeight: "1.2",
        }}>
          Webがほどく境界の<br />
          先にあるもの
        </div>
      </div>
    </div>
    // <Slide
    //   simple
    //   bg="bg/bg_black.png"
    //   bgSize="30%"
    //   // filter="blur(5px)"
    //   // filterColor="rgba(255, 255, 255, 0.6)"
    // >
    //   <h1
    //     style={{
    //       textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.8)",
    //     }}
    //   >
    //     Webがほどく境界の<br />先にあるもの
    //   </h1>
    //   <Name className="mt-5">坂東 将光</Name>
    //   <Affiliation className="mt-3 text-center">
    //     <div>近畿大学工業高等専門学校</div>
    //     <div>総合システム工学科 制御情報コース</div>
    //   </Affiliation>
    // </Slide>
  );
}
