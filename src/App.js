import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./Preview";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__body">
          <Routes>
          <Route path="/preview" element={<Preview />}></Route>
            <Route path="/" element={<WebcamCapture />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
