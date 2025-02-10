"use client";
import { init } from "@masabando/easy-three";
import { Water } from "three/addons/objects/Water.js";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/Loading";

function randomPosition(range, padding) {
  const r = Math.random() * range + padding;
  const theta = Math.random() * 2 * Math.PI / 3;
  const phi = Math.random() * Math.PI * 2;
  return [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.cos(theta),
    r * Math.sin(theta) * Math.sin(phi),
  ];
}

export default function Slide({ triggerTime = 30 }) {
  const ref = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { animate, create, camera, controls, load, scene, THREE, destroy } =
      init(ref.current);
    controls.connect();
    controls.enablePan = false;
    controls.enableZoom = false;
    const alight = create.ambientLight({ intensity: 0 });
    const dlight = create.directionalLight({
      intensity: 0,
      position: [2, 2, 2],
    });
    const plight = create.pointLight({ intensity: 0, position: [2, 2, 2] });
    camera.position.set(-2, 0, -2);

    // water ====================
    const waterGeometry = new THREE.PlaneGeometry(100, 100);
    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "texture/water/waternormals.jpeg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 1.3,
      fog: scene.fog !== undefined,
    });
    water.position.y = -1;
    water.rotation.x = -Math.PI / 2;

    scene.add(water);
    water.visible = false;
    // ==========================

    const sphere = create.sphere({
      size: 6,
      segments: 64,
      material: "Basic",
      rotation: [0, Math.PI, 0],
      option: {
        map: load.texture(
          "texture/sky/kloofendal_48d_partly_cloudy_puresky.png"
        ),
        side: THREE.DoubleSide,
      },
    });
    sphere.scale.set(0, 0, 0);

    const background = load.background(
      "texture/sky/kloofendal_48d_partly_cloudy_puresky_2k.hdr",
      {
        background: false,
        environment: false,
      }
    );

    const cube = create.cube();

    const base = {
      cube: create.cube({
        size: 0.1,
        rounded: true,
        radius: 0.02,
        segments: 4,
        option: { color: 0xff6666 },
        autoAdd: false,
      }),
      sphere: create.sphere({
        size: 0.07,
        option: { color: 0x66ff66 },
        autoAdd: false,
      }),
      mCone: create.cone({
        size: [0.07, 0.14],
        option: { color: 0x6666ff },
        autoAdd: false,
      }),
    };

    const groups = {};
    Object.keys(base).forEach((k) => {
      groups[k] = create.group();
      new Array(18).fill(0).forEach((_, i) => {
        const c = base[k].clone();
        c.position.set(...randomPosition(5, 1.3));
        c.scale.set(...new Array(3).fill(Math.random() * 1 + 0.5));
        c.userData = {
          rotation: {
            x: Math.random() * Math.PI,
            y: Math.random() * Math.PI,
            z: Math.random() * Math.PI,
          },
          v: {
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1,
            z: Math.random() * 2 - 1,
          },
          basePosition: { x: c.position.x, y: c.position.y, z: c.position.z },
          h: Math.random() * 0.3 + 0.1,
          phase: Math.random() * Math.PI * 2,
        };
        groups[k].add(c);
      });
      groups[k].visible = false;
    });

    animate(({ time, delta }) => {
      const t = time + 0;
      cube.rotation.x += delta;
      cube.rotation.y += delta;
      switch (true) {
        case t < triggerTime:
          alight.intensity = Math.min(0.3, t / 100);
          // dlight.intensity = Math.min(2, time / 10);
          plight.intensity = Math.min(3, t / 10);
          plight.position.set(Math.sin(t) * 1.5, 1.5, Math.cos(t) * 1.5);
          break;
        case t < triggerTime + 0.7:
          const tm = 3 * (t - 30) - 3;
          sphere.scale.set(...Array(3).fill(Math.exp(tm)));
          break;
        default:
          water.visible = true;
          water.material.uniforms.time.value += delta;
          alight.intensity = 0.5;
          dlight.intensity = 2;
          plight.intensity = 0;
          scene.background = background;
          scene.environment = background;
          cube.material.metalness = 0.9;
          cube.material.roughness = 0.1;
          cube.material.color.set(0xffffff);
          sphere.visible = false;
          Object.keys(groups).forEach((k) => {
            groups[k].visible = true;
            groups[k].children.forEach((c) => {
              ["x", "y", "z"].forEach((a) => {
                c.position[a] =
                  c.userData.basePosition[a] +
                  c.userData.h *
                  Math.sin(c.userData.v[a] * time + c.userData.phase);
                c.rotation[a] += c.userData.rotation[a] * delta;
              });
            });
          });
          break;
      }
    });
    return () => {
      destroy();
    };
  }, []);

  return loading ? (<Loading />) :
    (<div ref={ref} style={{ width: "100%", height: "100%" }} />);
}
