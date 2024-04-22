const Usuario = require('../models/usuarios');




exports.getAll = async (req, res) => {

    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async (req, res) => {

    //no router vc chamou de id o que vem depois do usuario/
    const idDoParam = req.params.id;

    const usuarioEncontrado = await Usuario.findOne({ idUsuarios:idDoParam });
    res.json(usuarioEncontrado)
};

//cão,cao, cão / guia
//gera a mesma versao com acento
//mesma versao acento
//tira os duplicados
//noticias.find( titulo)
//noticias.find( resumo)
//noticias.find( texto)
//noticias.find( quizz)
//noticias.find( quizz)
//noticias.find( quizz)
//[]
//push


//Usuario.findAll({nome: Like(%req.body.termopesquisado%) })
//Usuario.findAll({email: Like(%req.body.termopesquisado%) })
//


exports.createUsuario = async (req, res) => {

    /*   console.log("passei", req.body) */
    /*   const usuarios = await Usuario.findAll(); */
    /* const usuarioCriado = mysql.query('insert into table Usuarios valures nome, cpf, ......., [red.body.idusuario, .....]') */


    const usuarioCadastrado = await Usuario.findOne({ cpf: req.body.cpf });


    //verificacao duplicidade  de usuario cadasrtado
    if (usuarioCadastrado) {
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }



    const usuarioCriado = await Usuario.create(req.body)

    console.log("usuarioCriado", usuarioCriado)

    return res.send("oi")

    // res.json(usuarios)
};

/* exports.postExemplo = (req, res) => {
    const { corpo } = req.body;
    res.send(`Rota de exemplo POST com corpo: ${corpo}`);
};
 */