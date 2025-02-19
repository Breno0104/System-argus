import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SplashScreen from "./pages/SplashScreen";
import HomePage from "./pages/HomePage";
import Ocorrencia from "./pages/Ocorrencia";
import Comunicados from "./pages/Comunicados";
import Reserva from "./pages/Reserva";
import ReservaForm from "./pages/ReservaForm";
import CadastroPage from "./pages/CadastroPage";
import ComunicadosSindico from "./pages/ComunicadosSindico";
import OcorrenciaSindico from "./pages/OcorrenciaSindico";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/manu" element={<Ocorrencia />} />
        <Route path="/comu" element={<Comunicados />} />
        <Route path="/rese" element={<Reserva />} />
        <Route path="/reservar" element={<ReservaForm />} />
        <Route path="/register" element={<CadastroPage />} />
        <Route path="/comusin" element={<ComunicadosSindico />} />
        <Route path="/manusin" element={<OcorrenciaSindico />} />
      </Routes>
    </Router>
  </StrictMode>
);
