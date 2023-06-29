import { Suspense, useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import Info from "./components/Info";
import Notifications from "./components/Notifications";
import { SocketContext } from "./utils/SocketContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Room from "./pages/Room";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-l from-slate-800 to-violet-900 min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room" element={<Room />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
