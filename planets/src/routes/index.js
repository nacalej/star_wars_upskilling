const {Router}    = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router   = Router();



router.get('/', controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);
router.post('/', middlewares.validateDataPlanet, controllers.createPlanet);

router.delete("/:id", controllers.deletePlanet);
router.put("/", controllers.updatePlanet);

module.exports = router;