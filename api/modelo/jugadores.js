const mongoose = require ('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);




// var PlayerScheme = new mongoose.Schema(

//     {
//         id: {
//             type: Int32,
//             unique:true
//         },
//         nombre: {
//             type: String,
//             minLength: 3
//         },
//         apellido: {
//             type: String,
//             minLength: 3
//         },
//         numero: {
//             type:  Int32
//         },
//         goles: {
//             type: Int32
//         },
//         division: {
//             type: Int32
//         }
//     },
//     {
//         versionKey: false,
//         timestamps: true
//     }
// )

var PlayerScheme = new mongoose.Schema(

    //   "Categoria" division a la que pertenece el jugador
    //   "N" numero de jugadores totales segun ingreso
    //   "Nequipo" identificador del equipo
    //   "Equipo" Nombre del equipo
    //   "Njugador" Numero del jugador dentro de su equipo
    //   "NequiNjugador" identificador unico de numero de jugador junto con identificador de equipo
    //   "nombeJugador" Nombre del jugador
    //   "Nacimiento" Fecha de nacimiento

    {
        id: {
            type: Int32,
            unique:true
        },
        Categoria: {
            type: String
        },
        Equipo: {
            type: String
        },
        Goles: {
            type: String
        },
        N: {
            type: Int32
        },
        Nacimiento: {
            type: String
        },
        NequipoNjugador: {
            type: String
        },
        Nequipo: {
            type: String
        },
        Njugador: {
            type: Int32
        },
        Rank: {
            type: Int32
        },
        nombreJugador: {
            type: String
        },
        RematesA: {
            type: Int32
        },
        Asistencias: {
            type: Int32
        },
        MinutosJu: {
            type: Int32
        },
        Faltas: {
            type: Int32
        }
    },
    {
        versionKey: false,
        timestamps: true
    },
    {
        versionKey: false,
        timestamps: false
    }
)

module.exports = mongoose.model( 'jugadores' ,PlayerScheme)
