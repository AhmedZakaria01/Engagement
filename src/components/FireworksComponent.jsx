// components/FireworksComponent.jsx
import React, { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";

export default function FireworksComponent() {
  const ref = useRef(null);

  return (
    <>
      <Fireworks
        ref={ref}
        options={{
          opacity: 1,
          particleCount: 20,
          life: 6,
          explosionRadius: 200,
          gravity: 0.1,
          acceleration: 1,
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ff9900"],
          explosion: 1,
          intensity: 20,
          particles: 200,
          traceLength: 1,
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
          zIndex: 1,
        }}
      />
    </>
  );
}
