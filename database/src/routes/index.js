const { Router }        = require('express');
const store             = require('../database');
const controllers       = require('../controllers');
const { validateModel, validate } = require('../middlewares');


const router = Router();


router.post("/:model",        validateModel, validate, controllers.createRequest);

router.get("/:model",         validateModel, controllers.getRequest);

router.get("/:model/:id",     validateModel, controllers.getRequestById);

router.delete("/:model/:_id", validateModel,controllers.deleteRequest);

router.put("/:model/:id",    validateModel,controllers.updateRequest);


module.exports = router;