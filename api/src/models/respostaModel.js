var database = require("../database/config");

function salvarResposta(fkUsuario, dtNascimento, sexo, tempoClube, classe, especialidade, 
    qtdEspecialidades, frequencia, acampamento, lideranca) {
    var instrucaoSql = `
        INSERT INTO respostaFormulario 
        (fkUsuario, dtNascimentoUsuario, sexo, tempoClube, classe, especialidadeFavorita, 
         qtdEspecialidades, frequencia, participaAcampamento, interesseLideranca)
        VALUES 
        ('${fkUsuario}', '${dtNascimento}', '${sexo}', '${tempoClube}', '${classe}', 
         '${especialidade}', '${qtdEspecialidades}', '${frequencia}', '${acampamento}', '${lideranca}')
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Busca os dados para o gráfico de distribuição por sexo
function buscarDistribuicaoSexo() {
    var instrucaoSql = `
        SELECT sexo, COUNT(*) AS total
        FROM respostaFormulario
        GROUP BY sexo
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Busca os dados para o gráfico de membros por classe
function buscarMembrosPorClasse() {
    var instrucaoSql = `
        SELECT classe, COUNT(*) AS total
        FROM respostaFormulario
        GROUP BY classe
        ORDER BY FIELD(classe, 'Amigo', 'Companheiro', 'Pesquisador', 
                       'Pioneiro', 'Excursionista', 'Guia', 'Líder')
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Busca os dados para o gráfico de frequência mensal
function buscarFrequenciaMensal() {
    var instrucaoSql = `
        SELECT frequencia, COUNT(*) AS total
        FROM respostaFormulario
        GROUP BY frequencia
        ORDER BY frequencia ASC
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Busca o ranking das especialidades favoritas
function buscarRankingEspecialidades() {
    var instrucaoSql = `
        SELECT especialidadeFavorita, COUNT(*) AS total
        FROM respostaFormulario
        GROUP BY especialidadeFavorita
        ORDER BY total DESC
        LIMIT 8
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Busca os KPIs gerais: média de idade, tempo no clube e especialidades por pessoa
function buscarKpis() {
    var instrucaoSql = `
        SELECT 
            ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNascimentoUsuario, CURDATE())), 1) AS mediaIdade,
            ROUND(AVG(tempoClube), 1) AS tempoMedio,
            ROUND(AVG(qtdEspecialidades), 1) AS mediaEspecialidades,
            ROUND(AVG(frequencia), 1) AS mediaFrequencia,
            ROUND(SUM(participaAcampamento = 'Sim') / COUNT(*) * 100, 0) AS pctAcampamento,
            ROUND(SUM(interesseLideranca = 'Sim') / COUNT(*) * 100, 0) AS pctLideranca
        FROM respostaFormulario
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDistribuicaoSexo,
    buscarMembrosPorClasse,
    buscarFrequenciaMensal,
    buscarRankingEspecialidades,
    buscarKpis,
    salvarResposta
}