"use client"
import { Progress, ConfigProvider } from "antd";

export default function PageProgress({ current, total }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          lineHeight: 0,
        },
      }}
    >
      <Progress
        className="py-0 my-0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          width: "100%",
          padding: 0,
        }}
        size="small"
        showInfo={false}
        strokeColor="rgba(100, 100, 100, 0.5)"
        percent={Math.round((current / (total - 1)) * 100)}
        strokeLinecap="square"
      />
    </ConfigProvider>
  );
}