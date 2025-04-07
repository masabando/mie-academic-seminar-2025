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
    <Slide title="Webページの歴史 - 幼少期編">
      <Contents>
        1990年12月20日、スイスのジュネーブ郊外(CERN)で生まれる。
        <ul className="mt-4">
          <li>
            シンプルなテキスト
          </li>
          <li>
            リンク (相互作用)
          </li>
        </ul>
        まだ <Note>静的なテキストページ</Note> であり、<br />
        情報をただ表示するだけの赤子であった。
      </Contents>
      <img
        src="img/baby.png" alt="赤子"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "10rem",
        }}
      />
    </Slide>
  )
}


export function Web01_95() {
  return (
    <Slide title="Webページの歴史 - 思春期編">
      <Contents>
        <div>
          1995年頃〜2005年頃 (5歳〜15歳)
        </div>
        <div className="mt-4">JavaScriptによって、少しずつ <Note>動きを持ち始める</Note> 。</div>
        <div className="mt-2">
          CSSによって、<Note>ファッション (デザイン) が洗練</Note> される。
        </div>
        <div className="mt-2">
          Ajax(非同期処理)でさらに <Note>インタラクティブ</Note> になる。
        </div>
      </Contents>
      <img
        src="img/student.png"
        alt="思春期"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "10rem",
        }}
      />
    </Slide>
  );
}


export function Web01_05() {
  return (
    <Slide title="Webページの歴史 - 社会人デビュー編">
      <Contents>
        <div>2005年頃〜2015年頃 (15歳〜25歳)</div>
        <div className="mt-4">
          SNSやブログが普及し、<Note>情報の共有</Note> が進む。
        </div>
        <div className="mt-2">
          「一部の人が書いて、多くの人が読む」から、<br />
          <Note>「多くの人が書いて、多くの人が読む」</Note> へ。
        </div>
        <div className="mt-2">
          政府や企業にも頼られ、<br />
          <Note>重要な社会的役割 (情報発信)</Note> を担う。
        </div>
      </Contents>
      <img
        src="img/businessman.png"
        alt="社会人デビュー"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "10rem",
        }}
      />
    </Slide>
  );
}


export function Web01_15() {
  return (
    <Slide title="Webページの歴史 - 成熟期編">
      <Contents>
        <div>2015年頃〜現在 (25歳〜)</div>
        <div className="mt-4">
          モバイルファーストの時代、<Note>スマホでの閲覧が主流</Note> 。
        </div>
        <div className="mt-2">
          AIで <Note>パーソナライズ</Note> された情報が提供される。
        </div>
        <div className="mt-2">
          Webアプリケーションが普及し、
          <br />
          <Note>デスクトップアプリを置き換える</Note>。
        </div>
        <div className="mt-2">
          33歳となった今、より重要な社会基盤へと <Note>成長</Note> 。
        </div>
      </Contents>
      <img
        src="img/now.png"
        alt="成熟期"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "10rem",
        }}
      />
    </Slide>
  );
}


export function Web02() {
  return (
    <Slide title="Webページ誕生「前」">
      <Contents className="d-flex justify-content-center">
        <img
          src="img/web0_old-Df4g13Ww.png"
          alt="Webページ誕生「前」"
          style={{ width: "90%" }}
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
          style={{ width: "70%" }}
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
          className="d-flex justify-content-around mt-0"
          style={{
            fontSize: "120%",
          }}
        >
          <Box name="React" icon={<SiReact />} highlight />
          <Box name="Vue" icon={<SiVuedotjs />} />
        </div>
        <Head className="mt-2">フレームワーク</Head>
        <div
          className="d-flex justify-content-around mt-0"
          style={{
            fontSize: "120%",
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