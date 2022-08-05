import React from 'react'
import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";

const regUser = () => 



<div class="hero is-primary is-fullheight">
<section class="section">
    <div class="container">
        <div class="columns is-left">
            <div class="column is-4">
            <p class="title is-2">Registrar usuario </p>
                <form action="" class="box">
                <div class="field">
    <label class="label">Tipo de usuario:</label>
    <div class="field">
  <div class="select">
  <select>
    <option value="admin">Administrador</option>
    <option value="representante">Representante</option>
  </select>
</div>
  </div>
  </div>
                <div class="field">
  <label class="label">Nombre completo</label>
  <div class="control">
    <input class="input" type="text" placeholder="Ejm: Sergio Pérez"></input>
  </div>
</div>
<div class="field">
  <label class="label">Correo electrónico</label>
    <input class="input is-danger" type="email" placeholder="Ejm: checoperez@gmail.com" value="fulano@gmail.com"></input>
  <p class="help is-danger">This email is invalid</p>
</div>
                    <div class="field">
                        <label class="label">Contraseña</label>
                            <input type="password" class="input" placeholder="***********"/>
                    </div>
                    <div class="field">
  <label class="label">Equipo al que pertenece:</label>
  <div class="control">
    <div class="select">
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
                    <div class="field">
                        <label class="label">
                            <input type="checkbox" class="checkbox"/>
                            Remember me
                        </label>
                    </div>
                    <div class="field">
                        <button class="button is-success">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</div>
    
export default regUser