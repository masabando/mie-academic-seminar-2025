"use client";
import { Slide, Name, Affiliation } from "@/components/Base.jsx";

export default function Title() {
  return (
    <Slide
      simple
      bg="img/title-background.jpg"
      filter="blur(5px)"
      filterColor="rgba(255, 255, 255, 0.6)"
    >
      <h1
        style={{
          textShadow: "0 0 0.5rem rgba(255, 255, 255, 0.8)",
        }}
      >
        Web技術の進歩がもたらす
        <br />
        変化と可能性
      </h1>
      <Name className="mt-5">坂東 将光</Name>
      <Affiliation className="mt-3 text-center">
        <div>近畿大学工業高等専門学校</div>
        <div>総合システム工学科 制御情報コース</div>
      </Affiliation>
    </Slide>
  );
}
