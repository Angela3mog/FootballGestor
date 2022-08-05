var express = require('express');
var router = express.Router();
const controller = require('../controllers/equipos');

router.get('/equipos',
    controller.getData
)

router.post('/equipos',
    controller.insertData
)

router.put('/:id',
            controller.updateSingle
)

router.delete('/:id',
        controller.deleteSingle
)


module.exports = router

