const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);


// Categoria  Categoria a la que pertenece el equipo
// Grupo    Grupo de equipos al que pertence dentro de la division
// Equipo       Nombre del equipo


var TeamScheme = new mongoose.Schema(

   

    {
        Categoria: {
            type: String
            
        },
        Grupo: {
            type: String
        },
        Equipo: {
            type: String
        },
        Gfavor: {
            type: Int32
        },
        Gcontra: {
            type: Int32
        },
        Tamarilla: {
            type: Int32
        },
        Trojas: {
            type: Int32
        },
        RematesA: {
            type: Int32
        },
        TirosE: {
            type: Int32
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model( 'equipos' ,TeamScheme)