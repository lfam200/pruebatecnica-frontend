import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="App">
      <Container>
        <div className="menu">
          <Link to="/crear-cliente">
            <Button>Crear Cliente</Button>
          </Link>
          <Link to="/listar-clientes">
            <Button>Listar Clientes</Button>
          </Link>
          <Link to="/promedio-edades">
            <Button>Promedio de Edades</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
