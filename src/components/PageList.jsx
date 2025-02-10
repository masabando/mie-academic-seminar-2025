"use client";

import Title from "@/slides/Title";
import { About1, About2, AboutLab1, AboutLab2 } from "@/slides/About";
import Intro from "@/slides/3D/Intro";
import Sample from "@/slides/3D/Sample";
import Fin from "@/slides/Fin";
import KtcWeb from "@/slides/3D/KtcWeb";
import Web from "@/slides/3D/Web";
import { WebIntro01, WebIntro02, WebIntro03, WebIntro04 } from "@/slides/3D/WebIntro";
import { MenuOutlined, QrcodeOutlined, CopyOutlined } from "@ant-design/icons";
import { Drawer, Input, Menu, Modal, QRCode } from "antd";
import { useState } from "react";

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
  { title: "Sample", slide: <Sample triggerTime={30} />, reload: true },
  { title: "最後に", slide: <Fin /> },
];

export function PageListMenu({ setPageIndex, pageIndex, controlsShow }) {
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
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
          <QRCode value={window.location.href} />
          <Input
            value={window.location.href}
            readOnly
            addonAfter={
              <CopyOutlined
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              />
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