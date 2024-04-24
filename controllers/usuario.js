const Usuario = require('../models/usuarios');
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async (req, res) => {
    //no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const usuarioEncontrado = await Usuario.findOne({ idUsuarios: idDoParam });
    res.json(usuarioEncontrado)
};

exports.createUsuario = async (req, res) => {
    console.log("req.body.cpf", req.body.cpf)

    const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });
    //verificacao duplicidade  de usuario cadasrtado
    if (usuarioCadastrado) {
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }

    const usuarioCriado = await Usuario.create(req.body)
    console.log("usuarioCriado", usuarioCriado)
    return res.send("Usuário Cadastrado")
    // res.json(usuarios)
};