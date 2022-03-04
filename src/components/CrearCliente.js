import { useState, useEffect } from "react";
import axios from "axios";

import "../styles/CrearCliente.css";
import Container from "./Container";
import Button from "./Button";
import { REACT_APP_API } from "../utils/constants";

const CrearCliente = () => {
  const initialValues = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
  };

  const errors = {
    name: "",
    description: "",
    rating: "",
  };
  const [cliente, setCliente] = useState(initialValues);
  const [estado, setEstado] = useState("");
  const [error, setError] = useState(errors);

  const validate = (data) => {
    let res = true;
    let nombre = "";
    let apellido = "";
    let fechaNacimiento = "";

    if (data.nombre === "") {
      nombre = "El nombre es requerido";
      res = false;
    }
    if (data.apellido === "") {
      apellido = "El apellido es requerido";
      res = false;
    }
    if (data.fechaNacimiento === "") {
      fechaNacimiento = "La fecha de nacimiento es requerida";
      res = false;
    }
    let fechaNacimientoFormat = new Date(data.fechaNacimiento);
    let hoy = new Date();
    if (fechaNacimientoFormat > hoy) {
      fechaNacimiento =
        "La fecha de nacimiento no puede ser mayor a la fecha actual";
      res = false;
    }

    setError({
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
    });

    return res;
  };

  const createCliente = async (e) => {
    e.preventDefault();
    if (validate(cliente)) {
      const data = {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        fechaNacimiento: cliente.fechaNacimiento,
      };
      const response = await axios.post(`${REACT_APP_API}/clientes`, data);
      setEstado(response.data);
      setCliente(initialValues);
    }
  };

  const handleInputChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {}, [estado]);

  return (
    <div className="App">
      <Container>
        <form onSubmit={createCliente}>
          <div className="card">
            <div className="card-title">
              <h2>Crear Cliente</h2>
            </div>
            <div className="card-content">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  value={cliente.nombre}
                  onChange={handleInputChange}
                  type="text"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  value={cliente.apellido}
                  onChange={handleInputChange}
                  type="text"
                  name="apellido"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input
                  value={cliente.fechaNacimiento}
                  onChange={handleInputChange}
                  type="date"
                  name="fechaNacimiento"
                />
              </div>
            </div>
            <div className="form-submit">
              <Button>Guardar</Button>
            </div>
            <div className="form-messages">
              <ul className="success">{estado ? <li>{estado}</li> : null}</ul>
              <ul className="error">
                {error.nombre ? <li>{error.nombre}</li> : null}
                {error.apellido ? <li>{error.apellido}</li> : null}
                {error.fechaNacimiento ? (
                  <li>{error.fechaNacimiento}</li>
                ) : null}
              </ul>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default CrearCliente;
