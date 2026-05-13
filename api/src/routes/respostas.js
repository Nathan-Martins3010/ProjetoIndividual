var express = require("express");
var router = express.Router();
var respostaController = require("../controllers/respostaController");

// Cada URL chama uma função do controller
router.get("/sexo", function (req, res) {
    respostaController.buscarDistribuicaoSexo(req, res);
});

router.get("/classes", function (req, res) {
    respostaController.buscarMembrosPorClasse(req, res);
});

router.get("/frequencia", function (req, res) {
    respostaController.buscarFrequenciaMensal(req, res);
});

router.get("/especialidades", function (req, res) {
    respostaController.buscarRankingEspecialidades(req, res);
});

router.get("/kpis", function (req, res) {
    respostaController.buscarKpis(req, res);
});

module.exports = router;