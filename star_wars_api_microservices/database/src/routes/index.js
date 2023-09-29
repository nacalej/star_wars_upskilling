const { Router }        = require('express');
const store             = require('../database');
const controllers       = require('../controllers');
const { validateModel } = require('../middlewares');


const router = Router();

// router.post("/:model",        validateModel, controllers.createRequest);

router.post("/:model",        validateModel, controllers.createRequest);

router.get("/:model",         validateModel, controllers.getRequest);

router.get("/:model/:id",     validateModel, controllers.getRequestById);

router.delete("/:model/:_id", validateModel,controllers.deleteRequest);

router.put("/:model/:id",    validateModel,controllers.updateRequest);


module.exports = router;