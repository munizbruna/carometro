// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario')

//retorna todos usuarios
router.get('/usuario', usuarioController.getAll)
router.get('/usuario/:id', usuarioController.getById)
//cria um usuario passando informação no body
router.post('/usuario', usuarioController.createUsuario)




/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */


/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasController.getById) */

/* router.get('/usuario', usuarioController.listarUsuarios) */

module.exports = router;
