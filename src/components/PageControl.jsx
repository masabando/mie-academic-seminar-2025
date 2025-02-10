"use client";
import { useEffect } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import styles from "./PageControl.module.scss";

export default function PageControl({
  setPageIndex,
  maxPageIndex = 0,
  controlsShow,
  setControlsShow,
}) {

  // function pageTouchChange(e) {
  //   const x = e.touches[0].clientX;
  //   if (x < window.innerWidth / 2) {
  //     // left
  //     setPageIndex((prev) => Math.max(prev - 1, 0));
  //   } else {
  //     // right
  //     setPageIndex((prev) => Math.min(prev + 1, maxPageIndex));
  //   }
  // }
  function pageKeyChange(e) {
    switch (e.key) {
      case "ArrowLeft":
      case "PageUp":
        setPageIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "ArrowRight":
      case "PageDown":
      case "Enter":
      case " ":
        setPageIndex((prev) => Math.min(prev + 1, maxPageIndex));
        break;
      case "c":
        setControlsShow((prev) => !prev);
        break
      default:
        break;
    }
  }
  useEffect(() => {
    // document.body.addEventListener("touchstart", pageTouchChange);
    window.addEventListener("keydown", pageKeyChange);
    // eslint-disable-next-line
  }, []);
  return <div className={styles.pageControl} hidden={!controlsShow}>
    <LeftCircleOutlined
      onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
    />
    <RightCircleOutlined
      onClick={() => setPageIndex((prev) => Math.min(prev + 1, maxPageIndex))}
    />
  </div>;
}
