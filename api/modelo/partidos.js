const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);


// Categoria  Categoria a la que pertenece el equipo
// Grupo    Grupo de equipos al que pertence dentro de la division
// Equipo       Nombre del equipo


var PartidoScheme = new mongoose.Schema(

   

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
        Jugados: {
            type: Int32
        },
        Ganados: {
            type: Int32
        },
        Empates: {
            type: Int32
        },
        Perdidos: {
            type: Int32
        },
        GF: {
            type: Int32
        },
        GC: {
            type: Int32
        },
        DG: {
            type: Int32
        },
        PTS: {
            type: Int32
        },
        Npartido: {
            type: Int32
        }
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model( 'partidos' ,PartidoScheme)