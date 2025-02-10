"use client";
import { Slide, Contents, Head, SubHead, Note } from "@/components/Base.jsx";
import { useRef, useEffect } from "react";
import { init } from "@masabando/easy-three";

export function About1() {
  return (
    <Slide title="自己紹介">
      <Contents>
        <h2 className="text-center">坂東 将光</h2>
        <div className="mt-4">
          近畿大学工業高等専門学校
          <br />
          総合システム工学科 制御情報コース 准教授
          <div style={{ fontSize: "0.83em" }}>
            教務主事補 / 入試主事補 / 企画広報主事補 /
            情報処理教育センター長補佐
          </div>
        </div>
        <Head className="mt-4">Web</Head>
        <div className="mt-1 ps-4">
          デザイン、3D、Webアプリケーション、インタラクション
        </div>
        <Head className="mt-3">量子コンピュータ</Head>
        <div className="mt-1 ps-4">
          量子ビット操作のエラー耐性、幾何学的位相による量子計算
        </div>
      </Contents>
    </Slide>
  );
}


export function About2() {
  return (
    <Slide title="自己紹介">
      <Contents
        className="d-flex justify-content-center align-items-center h-100 flex-column"
        style={{
          fontSize: "1.4rem",
        }}
      >
        <div className="text-center">
          <Note>近大高専のWebサイト</Note>を作っています！
        </div>
        <div className="text-center mt-4">
          (デザイン、コーディング、運用、…)
        </div>
      </Contents>
    </Slide>
  );
}

export function AboutLab1() {
  const ref = useRef();
  useEffect(() => {
    const { load, camera, create, controls, animate, destroy, THREE } = init(ref.current);
    controls.connect();
    camera.position.set(0, 0, 0.001)
    controls.enablePan = false;
    controls.enableZoom = false;
    const texture = load.texture("texture/lab/LabPic.jpg");
    texture.flipY = false;
    create.sphere({
      rotation: [0, -Math.PI / 2, Math.PI],
      material: "Basic",
      option: {
        map: texture,
        side: THREE.BackSide,
      },
    });
    animate()
    return () => {
      destroy();
    };
  }, []);
  return (
    <Slide title="研究室紹介">
      <div style={{
        width: "100%",
        height: "100%",
      }} ref={ref}></div>
    </Slide>
  );
}

export function AboutLab2() {
  return (
    <Slide title="研究室紹介">
      <Contents>
        <h2 className="text-center">今年度の卒業研究</h2>
        <div className="mt-4">
          <ul style={{ fontSize: "0.9rem" }}>
            <li>
              深度推定とフラクタル次元を用いた<Note>デザイン評価手法</Note>
              の検討
            </li>
            <li>ジェスチャー認識を用いたスライド操作の提案</li>
            <li>
              自宅で楽しむ3D絵画　<Note>Web技術を用いた新たな美術鑑賞</Note>
              の提案
            </li>
            <li>
              <Note>プロジェクターと黒板の融合</Note>
              による新しい授業支援システムの開発
            </li>
            <li>
              プロジェクターを用いた次世代授業支援システムの開発
            </li>
            <li>
              バスケットボールのシュート精度向上を目的としたリアルタイムフィードバックシステムの開発
            </li>
            <li>
              複雑な演奏を可能にする<Note>Web楽器</Note>の開発
            </li>
            <li>
              <Note>学校案内用3D空間と現実を連動</Note>させるシステム
            </li>
          </ul>
        </div>
      </Contents>
    </Slide>
  );
}

