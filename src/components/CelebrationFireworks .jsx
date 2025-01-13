import React, { useEffect, useRef } from "react";
import Fireworks from "fireworks-js";

const CelebrationFireworks = () => {
  const fireworksContainerRef = useRef(null); // Creating a ref for the container

  useEffect(() => {
    // Check if the container element is available
    if (fireworksContainerRef.current) {
      const fireworks = new Fireworks({
        container: fireworksContainerRef.current, // Pass the container ref here
        speed: 2, // Controls the speed of the fireworks
        acceleration: 1.20, // Controls the acceleration
        friction: 0.97, // Controls the friction of the animation
        particles: 122, // Number of particles for each firework
        intensity: 50, // Controls the intensity of the fireworks
        // More customization can be added here if necessary
      });

      fireworks.start(); // Start the fireworks animation

      // Cleanup when the component is unmounted
      return () => fireworks.stop();
    }
  }, []);

  return (
    <div
      ref={fireworksContainerRef} // Attach the ref to the container element
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure it stays behind other content
      }}
    />
  );
};

export default CelebrationFireworks;
