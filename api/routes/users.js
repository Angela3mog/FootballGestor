var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

// // /* GET users listing. */
// router.get('user/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',
    controller.getData
)

router.get('/',
    controller.getDatauser
)



router.post('/',
    controller.insertData
)

router.put('/:correo',
    controller.updateSingle
)

router.delete('/:correo',
    controller.deleteSingle
)


module.exports = router
