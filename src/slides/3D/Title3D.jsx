"use client";
import { init } from "@masabando/easy-three";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/Loading";

export default function Page() {
  const ref = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { animate, create, camera, controls, load, destroy } = init(
      ref.current
    );

    controls.connect();
    controls.minPolarAngle = Math.PI * 0.4;
    controls.maxPolarAngle = Math.PI * 0.6;
    camera.position.set(0, 1.5, 3);
    controls.target.set(0, 1.5, 0);
    // camera.position.set(1, 1.5, 0.5);
    // controls.target.set(3, 1.5, 0.5)

    create.ambientLight();
    create.directionalLight({
      position: [-2, 2, 2],
      // helper: 1,
    })

    load.background(
      "/mie-academic-seminar-2025/texture/sky/kloofendal_48d_partly_cloudy_puresky_2k.hdr"
    );

    let room;
    load
      .gltf(
        "/mie-academic-seminar-2025/gltf/white_modern_living_room/scene.gltf",
        {
          rotation: [0, -Math.PI / 2, 0],
          receiveShadow: true,
        }
      )
      .then((gltf) => {
        room = gltf;
      });

    create.group({
      position: [0, 1, -1],
      children: [
        create.text("Webがほどく境界の", {
          position: [0, 1.3, 0],
          fontSize: 27,
          size: [3, 0.36],
          resolution: 3,
          color: "#000000",
          autoAdd: false,
        }),
        create.text("先にあるもの", {
          position: [0, 0.9, 0],
          fontSize: 27,
          size: [3, 0.36],
          resolution: 3,
          color: "#000000",
          autoAdd: false,
        }),
        create.text("坂東 将光", {
          position: [0, 0.3, 0],
          fontSize: 18,
          size: [3, 0.29],
          resolution: 3,
          color: "#000000",
          autoAdd: false,
        }),
        create.text("近畿大学工業高等専門学校", {
          position: [0, 0, 0],
          fontSize: 18,
          size: [3, 0.29],
          resolution: 3,
          color: "#000000",
          autoAdd: false,
        }),
        create.cube({
          size: [3, 2, 0.3],
          position: [0, 0.65, -0.16],
          autoAdd: false,
          option: {
            transmission: 0.9,
            roughness: 0.1,
            metalness: 0.1,
            color: "#ffffff",
            thickness: 1.5,
          },
        }),
      ],
    });

    create.group({
      position: [2.4, 1.7, 0.46],
      rotation: [0, -Math.PI / 2, 0],
      children: [
        create.text('"White Modern Living Room"', {
          textAlign: "center",
          position: [0, 0, 0],
          fontSize: 13,
          size: [1.86, 0.17],
          resolution: 3,
          color: "#ffffff",
          autoAdd: false,
        }),
        create.text("(https://skfb.ly/oCoML) by dylanheyes", {
          position: [0, -0.3, 0],
          fontSize: 10,
          size: [1.86, 0.17],
          resolution: 3,
          color: "#ffffff",
          autoAdd: false,
        }),
        create.text("is licensed under Creative Commons Attribution.", {
          position: [0, -0.55, 0],
          fontSize: 8,
          size: [1.86, 0.14],
          resolution: 3,
          color: "#ffffff",
          autoAdd: false,
        }),
        create.text("(http://creativecommons.org/licenses/by/4.0/).", {
          position: [0, -0.7, 0],
          fontSize: 8,
          size: [1.86, 0.14],
          resolution: 3,
          color: "#ffffff",
          autoAdd: false,
        }),
      ],
    });

    let model;
    load
      .vrm("/mie-academic-seminar-2025/character/ktc-uniform_female_v5.vrm", {
        position: [0, -0.7, 2],
        rotation: [0, Math.PI, 0],
        bvh: "/mie-academic-seminar-2025/motion/motion_mm11.bvh",
      })
      .then((vrm) => {
        model = vrm;
      });

    animate(({ delta }) => {
      if (model && room) {
        model.updateWithAnimation(delta);
      }
    });
    return () => {
      destroy();
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div ref={ref} style={{ width: "100%", height: "100%" }} />
  );
}
