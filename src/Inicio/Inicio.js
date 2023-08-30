// Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <nav>
        <ul>
          <li>
            <Link to="/empresas">Empresas</Link>
          </li>
          <li>
            <Link to="/plantas">Plantas</Link>
          </li>
          <li>
            <Link to="/matrices">Matrices</Link>
          </li>
          <li>
            <Link to="/normas">Normas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Inicio;
