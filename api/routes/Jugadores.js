var express = require('express');
var router = express.Router();
const controller = require('../controllers/jugadores');

router.get('/',
    controller.getData
)

router.get('/jugadores2',
    controller.getDatav2
)

router.post('/',
    controller.insertData
)

router.put('/:NequiNjugador',
            controller.updateSingle
)

router.delete('/:NequiNjugador')


module.exports = router

