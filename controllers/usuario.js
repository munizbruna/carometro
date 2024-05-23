const Usuario = require('../models/usuarios');
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async (req, res) => {
//no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam } });
    res.json(usuarioEncontrado)
};

// CRIAÇÃO DE USUARIO
exports.createUsuario = async (req, res) => {
    const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });

    // Verificação de duplicidade de usuário cadastrado
    if (usuarioCadastrado) {
        return res.send('Já existe um usuário cadastrado neste CPF.');
    }

    // Aqui você pode acessar o caminho do arquivo enviado junto com outros dados
    const filePath = req.body.filePath;

    // Crie um objeto para armazenar os dados do usuário, incluindo o caminho do arquivo
    const userData = {
        // Adicione outros campos conforme necessário
        nome: req.body.nome,
        email: req.body.email,
        filePath: filePath // Adicione o caminho do arquivo
    };

    try {
        // Crie o usuário com os dados fornecidos
        const usuarioCriado = await Usuario.create(userData);

        // Se o usuário for criado com sucesso, crie uma entrada na tabela de UsuariosTurmas
        if (usuarioCriado.id) {
            await UsuariosTurmas.create({
                Usuarios_idUsuarios: usuarioCriado.id,
                Turmas_idTurmas: req.body.idturma // idturma vem do front como informação de seleção de turma
            });
        }

        return res.send("Usuário Cadastrado");
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        return res.status(500).send("Erro ao cadastrar usuário.");
    }
};


//update
exports.updateUsuario = async (req, res) => {
    
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });
//verificacao duplicidade  de usuario cadasrtado
        if (usuarioCadastrado) {
            const usuarioAtualizado = await Usuario.update(req.body)
            console.log("usuarioAtualizado", usuarioAtualizado)
            if (usuarioAtualizado.id) {
                await UsuariosTurmas.update({
                    
                Usuarios_idUsuarios: usuarioCriado.id,
                    Turmas_idTurmas: req.body.idturma //idturma vem do front como informação de seleçaõ de turma
                })


        }
        const message = "Usuário Atualizado"
            return res.send(usuarioAtualizado, message)
        // 
    };
        return res.send('Não existe um usuario cadastrado neste CPF.');
    };


