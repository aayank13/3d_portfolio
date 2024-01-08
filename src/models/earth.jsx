
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three';

import EarthSpace from '../assets/3d/earthquakes_-_2000_to_2019.glb';

const Earth = (props) => {
    const EarthRef = useRef();
  const { nodes, materials } = useGLTF(EarthSpace);
  return (
    <a.group ref={EarthRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_6.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_8.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_9.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </a.group>
  );
}


export default Earth;