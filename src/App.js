import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import "./App.css";
import Home from "./components/Home";
import CrearCliente from "./components/CrearCliente";
import ListarClientes from "./components/ListarClientes";
import PromedioEdades from "./components/PromedioEdades";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-cliente" element={<CrearCliente />} />
        <Route path="/listar-clientes" element={<ListarClientes />} />
        <Route path="/promedio-edades" element={<PromedioEdades />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
