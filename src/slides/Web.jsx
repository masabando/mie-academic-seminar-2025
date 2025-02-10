"use client"
import { Slide, Contents, Head, Note } from "@/components/Base.jsx";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiVuedotjs,
} from "react-icons/si";

export function Web01() {
  return (
    <Slide title="Webページの歴史">
      <Contents>
        1990年代初頭に <Note>静的なテキストページ</Note> が誕生
        <ul className="mt-4">
          <li>
            シンプルなテキスト
          </li>
          <li>
            リンク (相互作用)
          </li>
        </ul>
        Google検索、Wikipedia、近大高専のWebサイト
      </Contents>
    </Slide>
  )
}

export function Web02() {
  return (
    <Slide title="Webページ誕生「前」">
      <Contents className="d-flex justify-content-center">
        <img
          src="img/web0_old-Df4g13Ww.png"
          alt="Webページ誕生「前」"
          style={{ width: "100%" }}
        />
      </Contents>
    </Slide>
  )
}


export function Web03() {
  return (
    <Slide title="Webページ誕生「後」">
      <Contents className="d-flex justify-content-center">
        <img
          src="img/web0_new-cjc1pZIr.png"
          alt="Webページ誕生「後」"
          style={{ width: "80%" }}
        />
      </Contents>
    </Slide>
  );
}

export function Web04() {
  return (
    <Slide title="Google検索結果もリンク">
      <Contents className="d-flex justify-content-center">
        <img
          src="img/google-ByntfKx1.png"
          alt="Webページ誕生「後」"
          style={{ width: "100%" }}
        />
      </Contents>
    </Slide>
  );
}

export function Web05() {
  return (
    <Slide title="リンクによる体験">
      <Contents>
        <Note>情報をリンク</Note>したことにより生まれる体験
        <Head className="mt-4">SNS</Head>
        ミクシィ、X(Twitter)、Facebook、Instagram、…
        <Head className="mt-4">ネットショッピング</Head>
        Amazon、楽天、Yahoo!ショッピング、…
      </Contents>
    </Slide>
  );
}

export function Web06() {
  return (
    <Slide title="スマホの誕生">
      <Contents>
        カメラもマイクもある <Note>持ち運べる小さなコンピュータ</Note><br />
        SNSとも相性バッチリ
        <Head className="mt-4">どこでもWebページを閲覧できる</Head>
        <ul>
          <li>ビーチ</li>
          <li>公園</li>
          <li>カフェ</li>
        </ul>
      </Contents>
    </Slide>
  );
}

export function Web07() {
  return (
    <Slide title="スマホとレスポンシブデザイン">
      <Contents>
        スマホの画面に合わせ、<Note>縦長のWebページが登場</Note>。<br />
        レスポンシブデザインも。
        <Head className="mt-4">例えば…</Head>
        <ul>
          <li>PCだとサイドメニューあり</li>
          <li>スマホだとメニューボタンに</li>
        </ul>
      </Contents>
    </Slide>
  );
}


function Box({ name, icon, highlight }) {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        color: highlight ? "crimson" : "black",
      }}
    >
      <div style={{ fontSize: "150%", textAlign: "center" }}>{icon}</div>
      <div className="text-center">{name}</div>
    </div>
  );
}

export function Web08() {
  return (
    <Slide title="Webページを作る技術">
      <Contents>
        <Head>従来からの方法</Head>
        <div
          className="d-flex justify-content-around mt-4"
          style={{
            fontSize: "130%",
          }}
        >
          <Box
            name={
              <p className="text-center">
                <span className="fw-bold text-primary">HTML</span>
                <br />
                構造
              </p>
            }
            icon={<SiHtml5 />}
          />
          <Box
            name={
              <p className="text-center">
                <span className="fw-bold text-primary">CSS</span>
                <br />
                デザイン
              </p>
            }
            icon={<SiCss3 />}
          />
          <Box
            name={
              <p className="text-center">
                <span className="fw-bold text-primary">JavaScript</span>
                <br />
                機能
              </p>
            }
            icon={<SiJavascript />}
          />
        </div>
      </Contents>
    </Slide>
  );
}


export function Web09() {
  return (
    <Slide title="Webページを作る技術">
      <Contents>
        <Head>フロントエンドUIライブラリ</Head>
        <div
          className="d-flex justify-content-around mt-2"
          style={{
            fontSize: "130%",
          }}
        >
          <Box name="React" icon={<SiReact />} highlight />
          <Box name="Vue" icon={<SiVuedotjs />} />
        </div>
        <Head className="mt-4">フレームワーク</Head>
        <div
          className="d-flex justify-content-around mt-2"
          style={{
            fontSize: "130%",
          }}
        >
          <Box name="Next.js" icon={<SiNextdotjs />} highlight />
          <Box name="Gatsby" icon={<SiGatsby />} />
          <Box name="Nuxt.js" icon={<SiNuxtdotjs />} />
        </div>
      </Contents>
    </Slide>
  );
}