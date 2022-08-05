const { Timestamp } = require('mongodb');
const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);


// Categoria  Categoria a la que pertenece el equipo
// Grupo    Grupo de equipos al que pertence dentro de la division
// Equipo       Nombre del equipo


var TemporadaScheme = new mongoose.Schema(

   

    {
        Categoria: {
            type: String
        },
        Jornada: {
            type: String
        },
        Grupo: {
            type: String
        },
        PartidaJornada: {
            type: Int32
        },
        GEquipo1: {
            type: Int32
        },
        GEquipo2: {
            type: Int32
        },
        Equipo1: {
            type: Int32
        },
        Golese1: {
            type: Int32
        },
        Equipo2: {
            type: Int32
        },
        Golese2: {
            type: Int32
        },
        Campo: {
            type: String
        },
        Fecha: {
            type: Date
        },
        hora: {
            type: String
        },
        TiempoJuego: {
            type: Int32
        },
        RematesA1: {
            type: Int32
        },
        RematesA2: {
            type: Int32
        },
        TarjetasAE1: {
            type: Int32
        },
        TarjetasAE2: {
            type: Int32
        },
        TarjetasAE1: {
            type: Int32
        },
        TarjetasRe2: {
            type: Int32
        }
    }
)

module.exports = mongoose.model( 'datosTemp' ,TemporadaScheme)