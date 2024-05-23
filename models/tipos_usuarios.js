const Sequelize = require('sequelize');
const sequelize = require('../config/sequilize');

const TipoUsuario = sequelize.define('tipos_usuarios', {
  //define as informações da tabela colunas
  idTipos_Usuarios: {
    type: Sequelize.INTEGER,
    primaryKey: true, // Define essa coluna como a chave primária
    autoIncrement: true // Indica que é uma chave primária autoincrementável
  },

  descricao: Sequelize.STRING,
  //precisa disso pq nao tem as colunas createdAt e updatedAt no bd
  timestamps: false
});

module.exports = TipoUsuario;