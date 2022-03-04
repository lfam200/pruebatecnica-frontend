import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/ListarClientes.css";
import Container from "./Container";
import { REACT_APP_API } from "../utils/constants";

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const response = await axios.get(`${REACT_APP_API}/clientes`);
    return response.data;
  };

  useEffect(() => {
    const getAllClientes = async () => {
      const allClientes = await getClientes();
      if (allClientes) setClientes(allClientes);
    };
    getAllClientes();
  }, []);

  console.log(clientes);
  return (
    <div className="App">
      <Container>
        <div className="card">
          <div className="card-title">
            <h2>Lista de Clientes</h2>
          </div>
          <div className="card-content">
            <table className="table">
              <thead>
                <tr>
                  <th>#Id</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>
                {clientes &&
                  clientes.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.apellido}</td>
                      <td>{item.nacimiento}</td>
                      <td>{item.edad}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListarClientes;
