
const database = require('../config/conection');

const listarTarefas = async (req, res) =>{
    let dados = await database.executar(`SELECT * FROM tarefas`);
    res.send(dados);
}


module.exports = { listarTarefas };