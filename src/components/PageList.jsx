"use client";

import Title from "@/slides/Title";
import { About1, About2, AboutLab1, AboutLab2 } from "@/slides/About";
import Intro from "@/slides/3D/Intro";
// import Sample from "@/slides/3D/Sample";
// import Fin from "@/slides/Fin";
import VRMPose from "@/slides/VRMPose";
import KtcWeb from "@/slides/3D/KtcWeb";
import Web from "@/slides/3D/Web";
import Responsive from "@/slides/3D/Responsive";
import WebApp from "@/slides/3D/WebApp";
import Real from "@/slides/3D/Real";
import Pose from "@/slides/Pose";
import Future from "@/slides/3D/Future";
import Epilogue from "@/slides/3D/Epilogue";
import { Web01, Web02, Web03, Web04, Web05, Web06, Web07, Web08, Web09 } from "@/slides/Web";
import { WebIntro01, WebIntro02, WebIntro03, WebIntro04 } from "@/slides/3D/WebIntro";
import { MenuOutlined, QrcodeOutlined, CopyOutlined } from "@ant-design/icons";
import { Drawer, Input, Menu, Modal, Popover, QRCode } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const PageList = [
  { title: "タイトル", slide: <Title /> },
  { title: "Introduction", slide: <Intro />, reload: true },
  { title: "Web", slide: <Web />, reload: true },
  { title: "自己紹介1", slide: <About1 /> },
  { title: "自己紹介2", slide: <About2 /> },
  { title: "近大高専Webサイト", slide: <KtcWeb />, reload: true },
  { title: "研究室紹介1", slide: <AboutLab1 />, reload: true },
  { title: "研究室紹介2", slide: <AboutLab2 /> },
  { title: "1769年", slide: <WebIntro01 />, reload: false },
  { title: "人類最初の自動車", slide: <WebIntro02 />, reload: false },
  { title: "1990年12月20日", slide: <WebIntro03 />, reload: false },
  { title: "人類最初のWebページ", slide: <WebIntro04 />, reload: false },
  { title: "Webページの歴史", slide: <Web01 /> },
  { title: "Webページ誕生「前」", slide: <Web02 /> },
  { title: "Webページ誕生「後」", slide: <Web03 /> },
  { title: "Google検索結果もリンク", slide: <Web04 /> },
  { title: "リンクによる体験", slide: <Web05 /> },
  { title: "スマホの誕生", slide: <Web06 /> },
  { title: "スマホとレスポンシブデザイン", slide: <Web07 /> },
  { title: "レスポンシブデザインの例", slide: <Responsive />, reload: true },
  { title: "Webアプリケーション", slide: <WebApp />, reload: true },
  { title: "リアルな3D表現", slide: <Real />, reload: true },
  { title: "姿勢推定", slide: <Pose />, reload: true },
  { title: "VRMと姿勢推定", slide: <VRMPose />, reload: true },
  { title: "Webページを作る技術1", slide: <Web08 /> },
  { title: "Webページを作る技術2", slide: <Web09 /> },
  { title: "Webページのこれから", slide: <Future />, reload: true },
  { title: "最後に", slide: <Epilogue />, reload: true },
];

export function PageListMenu({ setPageIndex, pageIndex, controlsShow }) {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, [params]);
  if (!controlsShow) {
    return null;
  }
  return (
    <>
      <div
        className="d-inline-block"
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          borderRadius: "16%",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "0.1rem",
          zIndex: 999,
        }}
        onClick={() => setOpenQr(true)}
      >
        <QrcodeOutlined
          style={{
            fontSize: "max(1.2rem, 30px)",
            color: "rgba(255, 255, 255, 0.7)",
            padding: "0.2rem",
          }}
        />
      </div>
      <Modal
        title="QR Code"
        open={openQr}
        onOk={() => setOpenQr(false)}
        onCancel={() => setOpenQr(false)}
        footer={null}
      >
        <div className="d-flex justify-content-center align-items-center flex-column my-5 gap-3">
          <QRCode value={url} />
          <Input
            value={url}
            readOnly
            addonAfter={
              <Popover
                content="Copy"
                trigger="click"
              >
                <CopyOutlined
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                  }}
                />
              </Popover>
            }
          />
        </div>
      </Modal>
      <div
        className="d-inline-block"
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          borderRadius: "16%",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "0.1rem",
          zIndex: 999,
        }}
        onClick={() => setOpen(true)}
      >
        <MenuOutlined
          style={{
            fontSize: "max(1.2rem, 30px)",
            color: "rgba(255, 255, 255, 0.7)",
            padding: "0.2rem",
          }}
        />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        width="24rem"
        styles={{
          body: {
            padding: "1rem 0",
          },
        }}
      >
        <Menu
          mode="vertical"
          items={PageList.map((item, index) => ({
            key: index,
            label: `${index}. ${item.title}`,
          }))}
          onClick={({ key }) => {
            setOpen(false);
            setPageIndex(key);
          }}
          selectedKeys={[`${pageIndex}`]}
        />
      </Drawer>
    </>
  );
}

export default PageList;