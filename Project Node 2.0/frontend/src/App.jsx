import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tos from './components/Tos';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <Router>
       <div className="linea-negra"></div>
<nav>
        
       <p className="sensive">Sensive</p>
      <menu>
       
          <li>
            <Link to="/home" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tos" className="tos">
              ToS
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="contacto">
              Contacto
            </Link>
          </li>
       
      </menu>
</nav>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
