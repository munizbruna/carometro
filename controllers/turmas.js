const Turmas = require('../models/turmas');
const Usuario = require('../models/usuarios')
const UsuariosTurmas = require('../models/usuarios_turma')

//mostra todas as turmas
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

//retorna uma turma pelo id
/* exports.getById = async (req, res) => {
    try {
        const idDoParam = req.params.id;

        // Busca a turma pelo ID
        let turmaEncontrada = await Turmas.findOne({ where: { idTurmas: idDoParam } });

        // Se não encontrar a turma pelo ID, busca pelo código
        if (!turmaEncontrada) {
            turmaEncontrada = await Turmas.findOne({ where: { codigo: idDoParam } });
        }

        // Verifica se encontrou a turma e responde com os alunos dessa turma
        if (turmaEncontrada) {

            return res.json(turmaEncontrada);
        } else {
            return res.status(404).send('Não foi possível encontrar a turma.');
        }
    } catch (error) {
        console.error("Erro ao buscar turma:", error);
        return res.status(500).send('Ocorreu um erro ao buscar a turma.');
    }
}; */

//retorna os alunos da turma
exports.getById = async (req, res) => {
    try {
        const idDoParam = req.params.id;


        console.log("idDoParam", idDoParam)
        // Busca a turma pelo ID
        let turmaEncontrada = await Turmas.findOne({ where: { idTurmas: idDoParam }/* , include: Usuario  */});

        //turmaEncontrada.id
        //...titulo
        //turmaEncontrada.usuario: []


        // Se não encontrar a turma pelo ID, busca pelo código
        /*    if (!turmaEncontrada) {
               turmaEncontrada = await Turmas.findOne({ where: { codigo: idDoParam } });
           } */

        // Verifica se encontrou a turma e responde de acordo
        if (turmaEncontrada) {
            return res.json(turmaEncontrada);
        } else {
            console.log("entrou aqui")
            return res.status(404).send('Não foi possível encontrar a turma.');
        }
    } catch (error) {
        console.error("Erro ao buscar turma:", error);
        return res.status(500).send('Ocorreu um erro ao buscar a turma.');
    }
};


//cria turma

exports.createTurma = async (req, res) => {
    const turmaCadastrada = await Turmas.findOne({ where: { codigo: req.body.codigo } });
    //verificacao duplicidade  de usuario cadasrtado
    if (turmaCadastrada) {
        return res.send('Já existe uma turma cadastrada com este código.')
    }

    const turmaCriada = await Turmas.create(req.body)
    console.log("turmaCriada", turmaCriada)
    return res.send("Turma Cadastrada")
};


//update

exports.updateTurma = async (req, res) => {
    const codigoTurma = req.params.banana;
    try {
        const turmaCadastrada = await Turmas.findOne({ where: { codigo: codigoTurma } });

        if (turmaCadastrada) {
            delete req.body.codigo;
            const [numRowsUpdated] = await Turmas.update(req.body, {
                where: { codigo: codigoTurma }
            });
            if (numRowsUpdated > 0) {
                const turmaAtualizada = await Turmas.findOne({ where: { codigo: codigoTurma } });
                return res.send({ message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada });
            }
            else {
                return res.send('Turma encontrada, porem sem novos dados para atualizar')
            }
        }
        else {
            return res.status(404).send('Não existe uma turma cadastrada com este código.');
        }

    } catch (error) {
        console.error("Erro ao atualizar turma:", error);
        return res.status(500).send('Ocorreu um erro ao atualizar a turma.');
    }
};
