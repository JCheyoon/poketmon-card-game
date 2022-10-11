import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./Routes/Game";
import Home from "./Routes/Home";
import Modal from "./Component/UI/Modal.component";

function App() {
  return (
    <>
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
