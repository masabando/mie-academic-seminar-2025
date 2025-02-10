"use client"
import { Slide, Contents } from "@/components/Base.jsx";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <Slide simple bg="#000" className="text-white">
      <Contents className="d-flex flex-column justify-content-center align-items-center">
        <Spinner
          animation="border"
          variant="white"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <div className="mt-4 text-center">データをロード中...</div>
      </Contents>
    </Slide>
  );
}