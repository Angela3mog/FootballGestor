const { get } = require('mongoose-int32')
// const { parseId  } = require('')
const { parseDateTime } = require('xpress/lib/parser')
var modelo = require('../modelo/datosTemp')

exports.getData = (req, res) => {
    // res.send({data: 'viene de jugadores'})
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
    const {id} = req.params
    const body = req.body
    modelo.updateOne(
        {_id: parseId(req.params.id)},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}

exports.deleteSingle = (req, res) => {
    const {Npartido} = req.params
    const body = req.body
    modelo.deleteOne(
        {Npartido: req.params.Npartido},
        body,
    (err,docs) => {
        res.send({
            items : docs
        })
    })
}


