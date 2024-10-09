CREATE TABLE tarefas(
	id INT PRIMARY KEY,
	nomeDoResponsavel VARCHAR(100) NOT NULL,
	descricao TEXT NOT NULL,
	StatusTarefa VARCHAR(50) NOT NULL,
	dataCriacao TIMESTAMP 
	);

    	INSERT INTO tarefas (nomeDoResponsavel,descricao,statusTarefa) 
	    VALUES ('João','Estudar Docker','Pendente'); 