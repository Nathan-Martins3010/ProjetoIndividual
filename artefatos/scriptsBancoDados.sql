CREATE DATABASE clubeDesbravadores;

USE clubeDesbravadores;

CREATE TABLE usuario (
		idUsuario INT PRIMARY KEY AUTO_INCREMENT,
        nomeUsuario VARCHAR (45),
        emailUsuario VARCHAR (45),
        senhaUsuario VARCHAR (20),
        tipoUsuario VARCHAR (10)
);

CREATE TABLE respostaFormulario (
		idResposta INT PRIMARY KEY AUTO_INCREMENT,
        fkUsuario INT,
        CONSTRAINT ctUsuario 
        FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
        dtNascimentoUsuario DATE,
        sexo CHAR(1),
        tempoClube VARCHAR (10),
        classe VARCHAR (15),
        especialidadeFavorita VARCHAR (30),
        qtdEspecialidades INT,
        frequencia INT,
        participaAcampamento CHAR(3),
        interesseLideranca CHAR(3),
        fkEspecialidade INT,
        CONSTRAINT ctRespostaEsp
        FOREIGN KEY (fkEspecialidade) REFERENCES especialidades (idEspecialidade),
        fkClasse INT,
        CONSTRAINT ctRespostaCla
        FOREIGN KEY (fkClasse) REFERENCES classes (idClasse)
);

CREATE TABLE especialidades (
		idEspecialidade INT PRIMARY KEY AUTO_INCREMENT,
        nomeEspecialidade VARCHAR (30),
        categoriaEspecialidade VARCHAR (30)
);

CREATE TABLE classes (
		idClasse INT PRIMARY KEY AUTO_INCREMENT,
        nomeClasse VARCHAR (15)
);
