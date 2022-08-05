var express = require('express');
var router = express.Router();
const controller = require('../controllers/datosTemp');

router.get('/',
    controller.getData
)

router.post('/',
    controller.insertData
)

router.put('/',
            controller.updateSingle
)

router.delete('/',
            controller.deleteSingle
)


module.exports = router
