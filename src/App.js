// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Empresas from './Inicio/Empresas';
import Plantas from './Inicio/Plantas';
import Matrices from './Inicio/Matrices';
import Normas from './Inicio/Normas';

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<Inicio/>} />
        <Route path="/empresas" element={<Empresas/>} />
        <Route path="/plantas" element={<Plantas/>} />
        <Route path="/matrices" element={<Matrices/>} />
        <Route path="/normas" element={<Normas/>} />
      </Routes >
    </Router>
  );
}

export default App;





















