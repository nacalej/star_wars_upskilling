const { Router }        = require('express');
const store             = require('../database');
const controllers       = require('../controllers');
const { validateModel } = require('../middlewares');


const router = Router();

router.get("/:model", validateModel, controllers.getRequest);

router.get("/:model/:id", validateModel, controllers.getRequestById);

router.post("/:model", validateModel, controllers.createRequest);


module.exports = router;