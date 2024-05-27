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
    //verificacao duplicidade  de usuario cadasrtado
    if (usuarioCadastrado) {
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }

    const usuarioCriado = await Usuario.create(req.body)
    console.log("usuarioCriado", usuarioCriado)
    if (usuarioCriado.id) {
        await UsuariosTurmas.create({

            Usuarios_idUsuarios: usuarioCriado.id,
            Turmas_idTurmas: req.body.idturma //idturma vem do front como informação de seleçaõ de turma
        })


    }
    return res.send("Usuário Cadastrado")
    // res.json(usuarios)
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


