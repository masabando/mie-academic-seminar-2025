"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Noto_Sans_JP } from "next/font/google"
import "./globals.scss";
import { Suspense } from "react";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#000000" />
        <title>Web技術の進歩がもたらす変化と可能性</title>
      </head>
      <body className={noto.className}>
        <AntdRegistry>
          <Suspense>
            {children}
          </Suspense>
        </AntdRegistry>
      </body>
    </html>
  );
}
