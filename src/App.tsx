import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./Routes/Game";
import Home from "./Routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:type" element={<Game />} />
    </Routes>
  );
}

export default App;
