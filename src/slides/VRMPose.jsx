"use client";
import { Slide } from "@/components/Base.jsx";
import Button from "react-bootstrap/Button";

export default function VRMPose() {
  return (
    <Slide title="姿勢推定とVRM">
      <Button
        className="mt-5"
        href="https://masabando.github.io/mediapipe-vrm-pose/"
        target="_blank"
        rel="noopener"
        >デモサイト</Button>
    </Slide>
  );
}
