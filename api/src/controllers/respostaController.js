        var respostaModel = require("../models/respostaModel");

        function salvarResposta(req, res){
            var fkUsuario = req.body.fkUsuarioServer;
            var dtNascimento = req.body.dtNascimentoServer;
            var sexo = req.body.sexoServer;
            var tempoClube = req.body.tempoClubeServer;
            var classe = req.body.classeServer;
            var especialidade = req.body.especialidadeServer;
            var qtdEspecialidades = req.body.qtdEspecialidadesServer;
            var frequencia = req.body.frequenciaServer;
            var acampamento = req.body.acampamentoServer;
            var lideranca = req.body.liderancaServer;

            if (!fkUsuario || !dtNascimento || !sexo || !tempoClube || !classe ||
                !especialidade || !qtdEspecialidades || !frequencia || !acampamento || !lideranca) {
                    res.status(400).send("Preencha todos os campos!");
                    return;
            }

            respostaModel.salvarResposta(fkUsuario, dtNascimento, sexo, tempoClube, classe,
            especialidade, qtdEspecialidades, frequencia, acampamento, lideranca)
            .then(function (resultado) {
                res.status(201).json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
        }

        function buscarDistribuicaoSexo(req, res) {
            respostaModel.buscarDistribuicaoSexo()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }

        function buscarMembrosPorClasse(req, res) {
            respostaModel.buscarMembrosPorClasse()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }

        function buscarFrequenciaMensal(req, res) {
            respostaModel.buscarFrequenciaMensal()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }

        function buscarRankingEspecialidades(req, res) {
            respostaModel.buscarRankingEspecialidades()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }

        function buscarKpis(req, res) {
            respostaModel.buscarKpis()
                .then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }

module.exports = {
    buscarDistribuicaoSexo,
    buscarMembrosPorClasse,
    buscarFrequenciaMensal,
    buscarRankingEspecialidades,
    buscarKpis,
    salvarResposta
}