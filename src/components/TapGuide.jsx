"use client"
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import styles from "./TapGuide.module.scss";

export default function TapGuide() {
  return (
    <div className={styles.tapGuide}>
      <div className="tap-guide-left">
        <LeftOutlined />
      </div>
      <div className="tap-guide-right">
        <RightOutlined />
      </div>
    </div>
  );
}
