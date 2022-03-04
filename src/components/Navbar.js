import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list" onClick={toggleNav}>
          <li className="items">
            <Link to="/">Inicio</Link>
          </li>
          <li className="items">
            <Link to="/crear-cliente">Crear Cliente</Link>
          </li>
          <li className="items">
            <Link to="/listar-clientes">Listar Clientes</Link>
          </li>
          <li className="items">
            <Link to="/promedio-edades">Promedio Edades</Link>
          </li>
        </ul>
      )}

      <div onClick={toggleNav} className="btn">
        <div className="icon-container">
          <div className="hamburguer-icon"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
