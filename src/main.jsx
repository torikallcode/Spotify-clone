import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiseaseDetail from "./pages/DiseaseDetail";
import "./index.css"; // Untuk Tailwind CSS atau CSS lainnya
import SpotifyClone from "./pages/SpotifyClone";
import SpotifyClone2 from "./pages/SpotifyClone2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={< SpotifyClone />} />
        <Route path="/test" element={< SpotifyClone2 />} />
        <Route path="/disease/:id" element={<DiseaseDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
