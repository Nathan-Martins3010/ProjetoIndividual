CREATE DATABASE clubeDesbravadores;

USE clubeDesbravadores;

CREATE TABLE usuario (
		codigoUsuario INT PRIMARY KEY AUTO_INCREMENT,
        nomeUsuario VARCHAR (45),
        emailUsuario VARCHAR (45),
        senhaUsuario VARCHAR (20)
);

CREATE TABLE respostaFormulario (
		idResposta INT PRIMARY KEY AUTO_INCREMENT,
        fkUsuario INT,
        CONSTRAINT ctUsuario 
        FOREIGN KEY (fkUsuario) REFERENCES usuario (codigoUsuario),
        dtNascimentoUsuario DATE,
        sexo CHAR(1),
        tempoClube INT,
        classe VARCHAR (15),
        especialidadeFavorita VARCHAR (30),
        qtdEspecialidades INT,
        frequencia INT,
        participaAcampamento CHAR(3),
        interesseLideranca CHAR(3)
);

INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES
('Nathan Fioravanti', 'nathan@gmail.com', '123456'),
('Lucas Andrade', 'lucas@gmail.com', 'abc123'),
('Mariana Souza', 'mariana@gmail.com', 'senha456'),
('Giovanna Lima', 'giovanna@gmail.com', 'gio789'),
('Matheus Oliveira', 'matheus@gmail.com', 'mat123');

INSERT INTO respostaFormulario 
(fkUsuario, dtNascimentoUsuario, sexo, tempoClube, classe, especialidadeFavorita, qtdEspecialidades, frequencia, participaAcampamento, interesseLideranca)
VALUES
(1, '2007-05-12', 'M', 5, 'Amigo', 'Primeiros Socorros', 8, 9, 'Sim', 'Sim'),
(2, '2008-03-20', 'M', 3, 'Companheiro', 'Nós e Amarras', 5, 7, 'Sim', 'Nao'),
(3, '2007-11-02', 'F', 6, 'Pesquisador', 'Culinária', 10, 10, 'Sim', 'Sim'),
(4, '2008-08-15', 'F', 2, 'Amigo', 'Ordem Unida', 4, 6, 'Nao', 'Nao'),
(5, '2006-12-01', 'M', 7, 'Guia', 'Acampamento', 12, 10, 'Sim', 'Sim');
SELECT * FROM respostaFormulario;
SELECT * FROM usuario;
