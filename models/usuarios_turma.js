const Sequelize = require('sequelize');
const sequelize = require('../config/sequilize');
const UsuariosTurmas = sequelize.define('usuarios_turmas', {
    //define as informações da tabela colunas
    Turmas_idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: false
    },
    Usuarios_idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: false 
    },
    },
    {//precisa disso pq nao tem as colunas createdAt e updatedAt no bd
        timestamps: false // Adiciona colunas createdAt e updatedAt automaticamente
    });
UsuariosTurmas.removeAttribute("id")
module.exports = UsuariosTurmas;