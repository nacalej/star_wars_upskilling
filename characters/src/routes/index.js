const { Router }    = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router   = Router();


router.get('/', controllers.getCharacters);
router.get("/:id", controllers.getCharacterById);
router.post('/', controllers.createCharacter);
router.delete("/:id", controllers.deleteCharacter);
router.put("/", controllers.updateCharacter);

module.exports = router;