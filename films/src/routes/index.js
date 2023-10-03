const {Router}    = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router   = Router();



router.get('/', controllers.getFilms);
router.get("/:id", controllers.getFilmById);
router.post('/', controllers.createFilm);
router.delete("/:id", controllers.deleteFilm);
router.put("/", controllers.updateFilm);

module.exports = router;