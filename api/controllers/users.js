var modelo = require('../modelo/users')

exports.getData = (req, res) => {
    
    modelo.find({}, (err,docs) => {
        res.send({
            docs
        })
    })
}

exports.getDatauser = (req, res) => {
    
    modelo.find({}, (err,docs) => {
        res.send({
            docs
        })
    })
}

exports.insertData = (req, res) => {
    const data = req.body
    // res.send({data})

    // res.send({ data })
    modelo.create(data, (err,docs) => {
        if(err){
            console.log('Error',err)
            // res.send({ error: 'eror'} , 422)sss
        }else
        res.send({data : docs})
    })
}

exports.updateSingle = (req, res) => {
    const {correo} = req.params
    const body = req.body
    modelo.updateOne(
        {correo: req.params.correo},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}

exports.deleteSingle = (req, res) => {
    const {correo} = req.params
    const body = req.body
    modelo.deleteOne(
        {correo: req.params.correo},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}
