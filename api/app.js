const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

const cors = require('cors');

const config = require('./dbase/config');

const initdb = require('./dbase/Database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jugadoresRouter = require('./routes/jugadores');
var equiposRouter = require('./routes/equipos');
var partidosRouter = require('./routes/partidos');
var datosTempRouter = require('./routes/datosTemp');
//Rutas personales
const userRouter = require ('./routes/users')
const jugadorRouter = require ('./routes/jugadores')
const EquipoRouter = require ('./routes/equipos')
const PartidosRouter = require('./routes/partidos')
const DatosTempRouter = require('./routes/datosTemp')


var app = express();

initdb()

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/jugador', jugadoresRouter);
app.use('/equipos',equiposRouter);
app.use('/partidos',partidosRouter);
app.use('/datosTemp',datosTempRouter);
app.use(userRouter);
app.use(jugadorRouter);
app.use(EquipoRouter);
app.use(PartidosRouter);
app.use(DatosTempRouter)

module.exports = app;
