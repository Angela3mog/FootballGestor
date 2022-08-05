const mongoose = require('mongoose')
// const URI = 'mongodb://localhost:27017/Football'
const URI = 'mongodb+srv://Jays:302514@basecluster.npp1vzk.mongodb.net/Base'

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            URI,
            {
              keepAlive: true,
              useNewUrlParser: true,
              useUnifiedTopology: true  
            },
            (err) => {
                if(err){
                    console.log('Error de conexion a la base de datos')
                }else {
                    console.log('Conexion correcta a la base de datos')
                }
            }
        )
    }

    connect();
}
// mongoose.connect(URI)

// const connection = mongoose.connection;

// connection.once('open', () =>{
//     console.log('la base de datos ha sido conectada',URI)
// })
