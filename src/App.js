import React, { useEffect, useRef, useState } from "react";
import { Fireworks } from "@fireworks-js/react";
import Home from "./Home";
import FormModal from "./components/FormModal"; // Make sure this is the correct path
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import MessagesViewer from "./components/MessagesViewer";
import ProtectRouter from "./components/ProtectRouter";

export default function App() {
  // const ref = useRef(null);

  // const fireworkSound = new Audio("path_to_sound_file.mp3"); // Path to your sound file

  // const toggle = () => {
  //   if (!ref.current) return;
  //   if (ref.current.isRunning) {
  //     ref.current.stop();
  //   } else {
  //     ref.current.start();
  //     fireworkSound.play(); // Play the sound when fireworks start
  //   }
  // };

  return (
    <>
      <BrowserRouter basename="/Engagement">
        <Routes>
          <Route path="Engagement" element={<Home />} />
          <Route path="/private-login-boyka-fulla" element={<Login />} />
          <Route
            path="/messageViewer"
            element={
              <ProtectRouter>
                <MessagesViewer />
              </ProtectRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
