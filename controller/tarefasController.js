
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
const Deletartarefa = async (req, res) =>{
    let id = req.params.id;
    let dados = await database.executar(`SELECT FROM tarefas WHERE ${id}`);
    res.status(204).send(`Tarefa deletada com sucesso`);
}
const Criacaotarefas = async (req, res) =>{
    const {nomeDoResponsavel,descricao,StatusTarefa} = req.body;
    let dados = await database.executar(`INSERT INTO tarefas (nomeDoResponsavel,descricao,StatusTarefa) VALUES('${nomeDoResponsavel}','${descricao}', '${StatusTarefa}'))`);
    res.status(201).send(`Tarefa inserida com sucesso`)
}


module.exports = { listarTarefas,listarPorId,Deletartarefa };