import React from 'react'
import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";

const categ = () => 

<div class="hero is-primary is-fullheight">
<section class="section">
    
   <div class="container is-2">
   <div class="columns is-left">
  <div class="column is-6"> 
    <p class="title is-2">Crear categoría</p>
                <form class="box">
  <div class="field">
    <label class="label">Año:</label>
    <div class="field">
  <div class="select">
  <select>
    <option value="Sub07">Sub07</option>
    <option value="Sub08">Sub08</option>
    <option value="Sub09">Sub09</option>
    <option value="Sub10">Sub10</option>
    <option value="Sub11">Sub11</option>
  </select>
</div>
  </div>
  </div>

  <div class="field">
    <label class="label">Cantidad de equipos:</label>
    <div class="field">
  <div class="select">
  <select>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
  </select>
</div>
  </div>
  </div>

  <div class="field">
  <label class="label">Seleccionar equipos:</label>
    <div class="field">
  <div class="select is-multiple">
  <select>
    <option>Equipos</option>
    <option value="MENCA SPORT">MENCA SPORT</option>
    <option value="JESUS YENDIS">JESUS YENDIS</option>
    <option value="TALENTO DE ANZ">TALENTO DE ANZ</option>
    <option value="DINAMO PUERTO">DINAMO PUERTO</option>
    <option value="JUVENIL SPORT">JUVENIL SPORT</option>
    <option value="WUILLY CALLESTER">WUILLY CALLESTER</option>
    <option value="LIGA METROPOLITANA">LIGA METROPOLITANA</option>
    <option value="ORIENTE F.C">ORIENTE F.C</option>
    <option value="ANZ. S.C">ANZ. S.C</option>
    <option value="CC CULTURAL ESPAÑOL">CC CULTURAL ESPAÑOL</option>
    <option value="PLAYA EL ANGEL">PLAYA EL ANGEL</option>
    <option value="PIRITU SPORT">PIRITU SPORT</option>
    <option value="FUND. MENCA SPORT">FUND. MENCA SPORT</option>
    <option value="DYNAMO MARGARITA">DYNAMO MARGARITA</option>
    <option value="VENALUM">VENALUM</option>
    <option value="PUMA CARABALLO">PUMA CARABALLO</option>
    <option value="ELITE MARGARITA">ELITE MARGARITA</option>
    <option value="BANCO OBRERO">BANCO OBRERO</option>
    <option value="REVELACIÓN">REVELACIÓN</option>
    <option value="KARIÑA SPORT">KARIÑA SPORT</option>
    <option value="AIFI">AIFI</option>
    <option value="REAL VICTORIA">REAL VICTORIA</option>
    <option value="PORTUGUES">PORTUGUES</option>
    <option value="UD. PUEBLO NUEVO">UD. PUEBLO NUEVO</option>
    <option value="REAL BARCELONA">REAL BARCELONA</option>
    <option value="SUR AEREOPUERTO">SUR AEREOPUERTO</option>
    <option value="OROPEZA CASTILLO">OROPEZA CASTILLO</option>
    <option value="UDPN">UDPN</option>
    <option value="AT. MARGARITA">AT. MARGARITA</option>
  </select>
  </div>
</div>


  </div>

  <button class="button is-primary">Guardar</button>
</form>
             </div>
         </div>
     </div> 
     </section>
</div>

export default categ
