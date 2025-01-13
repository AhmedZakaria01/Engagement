import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Auth/Login";
import MessagesViewer from "./components/MessagesViewer";
import ProtectRouter from "./components/ProtectRouter";
import Layout from "./components/Layout"; // Assuming Layout is your parent component

export default function App() {
  return (
    <>
      <BrowserRouter basename="/Engagement">
        {/* Set basename for GH Pages */}
        <Routes>
          {/* Parent route (Layout) */}
          <Route path="/" element={<Layout />}>
            {/* Child routes (relative paths) */}
            <Route index element={<Home />} />
            <Route path="/private-login" element={<Login />} />
            <Route
              path="/messageViewer"
              element={
                <ProtectRouter>
                  <MessagesViewer />
                </ProtectRouter>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
