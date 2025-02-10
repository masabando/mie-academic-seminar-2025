"use client";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Webcam from "react-webcam";
import {
  PoseLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";
import { useEffect, useRef, useState } from "react";
import { Slide } from "@/components/Base.jsx";

export default function Pose() {
  const [cameraMode, setCameraMode] = useState("user");
  const webcam = useRef();
  const [detectFlag, setDetectFlag] = useState(false);
  const poseLandmarker = useRef();
  const drawingUtils = useRef();
  const canvasRef = useRef();
  const ctxRef = useRef();
  const [cameraOK, setCameraOK] = useState(false);
  const [settingOK, setSettingOK] = useState(false);
  useEffect(() => {
    const createPoseLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );
      poseLandmarker.current = await PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "./models/pose_landmarker_lite.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numPoses: 2,
      });
      setSettingOK(true);
    };
    createPoseLandmarker();
  }, []);

  function loop() {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    let startTime = performance.now();
    poseLandmarker.current.detectForVideo(
      webcam.current.video,
      startTime,
      (result) => {
        for (const landmark of result.landmarks) {
          drawingUtils.current.drawLandmarks(landmark, {
            radius: (data) => DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1),
          });
          drawingUtils.current.drawConnectors(
            landmark,
            PoseLandmarker.POSE_CONNECTIONS
          );
        }
      }
    );
    requestAnimationFrame(loop);
  }

  useEffect(() => {
    if (detectFlag) {
      canvasRef.current.width = webcam.current.video.clientWidth;
      canvasRef.current.height = webcam.current.video.clientHeight;
      ctxRef.current = canvasRef.current.getContext("2d");
      drawingUtils.current = new DrawingUtils(ctxRef.current);
      loop();
    }
    // eslint-disable-next-line
  }, [detectFlag]);

  return (
    <Slide simple>
      <div className="py-2 d-flex align-items-center gap-2">
        <Button
          className="ms-3"
          onClick={() => setDetectFlag(true)}
          disabled={!(cameraOK && settingOK)}
          size="sm"
        >
          姿勢検出を開始
        </Button>
        <Form.Select
          size="sm"
          defaultValue={cameraMode}
          disabled={detectFlag}
          onChange={(e) => setCameraMode(e.target.value)}
          style={{
            width: "12rem",
          }}
        >
          <option value="user">フロントカメラ</option>
          <option value="environment">リアカメラ</option>
        </Form.Select>
      </div>
      <div className="text-center">
        <div className="position-relative d-inline-block" style={{
          maxWidth: "80%",
        }}>
          <Webcam
            style={{
              width: "100%",
              maxWidth: "800px",
            }}
            audio={false}
            ref={webcam}
            videoConstraints={{
              facingMode:
                cameraMode === "environment"
                  ? { exact: "environment" }
                  : "user",
            }}
            onUserMedia={() => {
              setCameraOK(true);
            }}
          />
          <canvas className="position-absolute top-0 start-0" ref={canvasRef} />
        </div>
      </div>
    </Slide>
  );
}
