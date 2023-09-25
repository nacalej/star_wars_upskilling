const {Router}    = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router   = Router();

router.post('/', middlewares.characterValidation, controllers.createCharacter);
router.get('/', controllers.getCharacters);
router.get("/:id", controllers.getCharacterById);

//router.get("/:name", controllers.getCharacterByName);

router.delete("/:id", controllers.deleteCharacter);
router.put("/", controllers.updateCharacter);

module.exports = router;