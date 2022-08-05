import React from 'react'
import './Admin.css';
//import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import Nav from './Componentes/Home';
import Categ8 from './Vistas/Categ8.jsx';
import CrearCateg from './Vistas/CrearCateg.jsx';
import RegUser from './Vistas/RegUser.jsx';
import CrearMatch from './Vistas/CrearMatch.jsx';

const Elemento = () => <h1>casas</h1>


function Admin() {

  return (

    
  <div className="Admin">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>


    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      OPCIONES
    </a>

    <div className="navbar-dropdown">
      <a class="navbar-item">
      <Link className="navbar-item" to="categ">
      Crear categorías
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="regUser">
      Registrar usuario
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="match">
      Crear partidos
      </Link>
      </a>
      <hr class="navbar-divider"></hr>
      <div class="navbar-item">
      </div>
      </div>
    </div>
</nav>
  <body>
  <Routes>
      <Route path='/categ8' element={ <Categ8/ >} />
      <Route path='/categ' element={ <CrearCateg/>} />
      <Route path='/regUser' element={ <RegUser/>} />
      <Route path='/match' element={ <CrearMatch/>} />
    </Routes>

</body>

  </div>
  );
}

export default Admin;
