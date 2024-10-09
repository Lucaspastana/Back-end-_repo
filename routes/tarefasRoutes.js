const express = require('express');
const router = express.Router();
const tarefasController = require ('../controller/tarefasController');

router.get('/',tarefasController.listarTarefas);
router.get('/:id',tarefasController.listarTarefas);

module.exports = router;