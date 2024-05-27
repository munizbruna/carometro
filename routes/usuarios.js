const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuario');

// Rota para obter todos os usuários
router.get('/usuarios', usuariosController.getAll);

// Rota para obter um usuário pelo ID
router.get('/usuarios/:id', usuariosController.getById);

// Rota para criar um novo usuário
router.post('/usuario', usuariosController.createUsuario);

// Rota para atualizar um usuário
router.put('/usuario', usuariosController.updateUsuario);

module.exports = router;
