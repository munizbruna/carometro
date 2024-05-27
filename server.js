// Importar o módulo do Express
const express = require('express');
const sequelize = require('./config/sequilize');
const router = require('./routes/router'); // Importe o módulo de rotas
const path = require('path');
const usuarioRoutes = require('./routes/usuarios');

require('dotenv').config();

// Testar a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');
        return sequelize.query("SHOW TABLES");
    })
    .then(([result, metadata]) => {
        console.log('Tabelas no banco de dados:');
        console.log(result);
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Criar uma instância do aplicativo Express
const app = express();

// Configura o servidor a aceitar requisições JSON usando express
app.use(express.json());

// Use o módulo de rotas como middleware principal
app.use(router);

// Configura o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página HTML de upload
app.get('/testes', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Definir a porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor e ouvir a porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Define o diretório onde os arquivos estáticos do front-end estão localizados
const frontEndPath = path.join(__dirname, 'src');

// Configura o Express.js para servir os arquivos estáticos
app.use(express.static(frontEndPath));

// Rota para servir a página login
app.get('/login', (req, res) => {
    res.sendFile(path.join(frontEndPath, 'login.html'));
});
// Rota para servir a página cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(frontEndPath, 'cadastroUsuarios.html'));
});