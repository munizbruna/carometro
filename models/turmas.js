// models/turmas.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequilize');
const Usuario = require('../models/usuarios')

const Turmas = sequelize.define('Turmas', {
  //define as informações da tabela colunas
  idTurmas: {
    type: Sequelize.INTEGER,
    primaryKey: true, // Define essa coluna como a chave primária
    autoIncrement: true // Indica que é uma chave primária autoincrementável
  },

  codigo: Sequelize.STRING,
  descricao: Sequelize.STRING,
  inicio: Sequelize.DATE,
  fim: Sequelize.DATE,
  imagem: Sequelize.STRING,
},
  {
    //precisa disso pq nao tem as colunas createdAt e updatedAt no bd
    timestamps: false // Adiciona colunas createdAt e updatedAt automaticamente
  });


/*  Turmas.belongsToMany(Usuario, { through: 'UsuariosTurmas', foreignKey: 'Turmas_idTurmas' });  */


module.exports = Turmas;