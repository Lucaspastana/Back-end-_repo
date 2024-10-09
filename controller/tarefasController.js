
const database = require('../config/conection');

const listarTarefas = async (req, res) =>{
    let dados = await database.executar(`SELECT * FROM tarefas`);
    res.send(dados);
}

const listarPorId = async (req, res) =>{
    let id = req.params.id;
    let dados = await database.executar(`SELECT * FROM tarefas WHERE ${id}`);
    res.send(dados);
}


module.exports = { listarTarefas,listarPorId };