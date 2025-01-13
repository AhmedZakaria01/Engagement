import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import FormModal from "./components/FormModal";
import Login from "./components/Auth/Login";
import MessagesViewer from "./components/MessagesViewer";
import ProtectRouter from "./components/ProtectRouter";
import { Outlet } from "react-router-dom"; // For child route rendering

export default function App() {
  return (
    <>
      <BrowserRouter basename="/Engagement">
        {" "}
        {/* Set basename for GH Pages */}
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Define child routes under Home */}
            <Route path="/private-login-boyka-fulla" element={<Login />} />
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
