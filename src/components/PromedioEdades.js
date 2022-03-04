import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/PromedioEdades.css";
import Container from "./Container";
import { REACT_APP_API } from "../utils/constants";

const PromedioEdades = () => {
  const [promedio, setPromedio] = useState("");

  const getPromedio = async () => {
    const response = await axios.get(`${REACT_APP_API}/clientes/promedio-edad`);
    return response.data;
  };

  useEffect(() => {
    const getPromEdad = async () => {
      const promEdad = await getPromedio();
      if (promEdad) setPromedio(promEdad);
    };
    getPromEdad();
  }, []);

  return (
    <div className="App">
      <Container>
        <div className="card">
          <div className="card-title">
            <h2>Promedio Edades</h2>
          </div>
          <div className="card-content">
            <div className="badge">
              <div className="badge-label">{promedio}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromedioEdades;
