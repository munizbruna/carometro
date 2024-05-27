// routes/router.js
//nesse arquivo estarão todas as rotas
//no caso de um proj com muitas rotas é possível quebrar as rotas em mais arquivos

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');
const tiposController = require('../controllers/tiposusuarios');
const turmasController = require('../controllers/turmas');
const { handleFileUpload } = require('../controllers/uploadController');

//////////////         R O T A S    U S U A R I O S         \\\\\\\\\\\\\\\\\\

//retorna todos usuarios

//deleta usuario
/* router.delete('/usuario/:id', usuarioController.deleteUsuario);
router.delete('/usuarios', usuarioController.deleteAll); */

//cria um usuario ptiposassando informação no body



// Defina a rota para o upload de arquivo
router.post('/upload', handleFileUpload);

//////////////         R O T A S    tipos         \\\\\\\\\\\\\\\\\\
/* 
router.get('/tipos', tiposController.getAll)
router.get('/:id', tiposController.getById)

router.post('/tipos', tiposController.createTipoUsuario) */

//////////////         R O T A S    turmas         \\\\\\\\\\\\\\\\\\

router.get('/turma', turmasController.getAll)
router.get('/turma/:id', turmasController.getById)

router.post('/turma', turmasController.createTurma)

///criar update

router.put('/usuario/:cpf', usuarioController.updateUsuario)
router.put('/turma/:banana', turmasController.updateTurma)


///criar pesquisa

module.exports = router;
