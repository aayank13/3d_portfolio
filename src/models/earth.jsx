import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three"; // Import THREE module

import EarthSpace from "../assets/3d/earthquakes_-_2000_to_2019.glb";

const Earth = ({ isRotating, setIsRotating, ...props }) => {
  const EarthRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(EarthSpace);
  const rotationSpeed = useRef(0);
  const dampingFactor = 1;

  const lastX = useRef(0);

  const rotateEarth = () => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.01) {
        rotationSpeed.current = 0;
      }

      EarthRef.current.rotation.y += rotationSpeed.current;
    } else {
      // Your current rotation logic here
    }
  };

  useEffect(() => {
    const handleAnimationFrame = () => {
      rotateEarth();
    };

    const animationFrameId = requestAnimationFrame(handleAnimationFrame);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating, rotateEarth]);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      EarthRef.current.rotation.y += delta * 0.09 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.1 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      EarthRef.current.rotation.y += 0.05 * Math.PI;
      rotationSpeed.current = 0.07;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      EarthRef.current.rotation.y -= 0.05 * Math.PI;
      rotationSpeed.current = -0.07;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Create a white material for the Earth
  const whiteMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  return (
    <a.group ref={EarthRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <points geometry={nodes.Object_2.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_3.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_4.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_5.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_6.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_7.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_8.geometry} material={whiteMaterial.clone()} />
        <points geometry={nodes.Object_9.geometry} material={whiteMaterial.clone()} />
      </group>
    </a.group>
  );
};

export default Earth;
