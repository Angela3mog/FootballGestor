import React from 'react'
//import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import CrearCateg from './CrearCateg.jsx';
import Categ8 from './Categ8.jsx';
import Categ9 from './Categ9.jsx';
import Categ10 from './Categ10.jsx';
import Categ11 from './Categ11.jsx';
import Categ12 from './Categ12.jsx';

const Elemento = () => <h1>casas</h1>


function admin() {

  return (

    
  <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>


    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      OPCIONES
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
      <Link className="navbar-item" to="categ">
      Crear categorias
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="categ8">
      Registrar usuario
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="categ8">
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
      <Route path='/categ9' element={ <Categ9/ >} />
      <Route path='/categ10' element={ <Categ10/ >} />
      <Route path='/categ11' element={ <Categ11/ >} />
      <Route path='/categ12' element={ <Categ12/ >} />
    </Routes>

</body>

  </div>
  );
}

export default admin;

{/* <nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      OPCIONES
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
      <Link className="navbar-item" to="categ">
      Crear categorias
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="categ8">
      Registrar usuario
      </Link>
      </a>
      <a class="navbar-item">
      <Link className="navbar-item" to="categ8">
      Crear partidos
      </Link>
      </a>
      <hr class="navbar-divider"></hr>
      <div class="navbar-item">
      </div>
    </div>
  <Routes>
      <Route path='/categ' element={ <CrearCateg/ >} />
      <Route path='/categ8' element={ <Categ8/ >} />
    </Routes>
</nav> */}
