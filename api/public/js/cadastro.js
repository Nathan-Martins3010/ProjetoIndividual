function CadCadastrar() {
    let nome = document.getElementById("inpNome").value;
    let email = document.getElementById("inpEmail").value;
    let senha = document.getElementById("inpSenha").value;
    let senhaConf = document.getElementById("inpSenhaConf").value;

    // Verifica se os campos estão vazios
    if (nome == "" || email == "" || senha == "" || senhaConf == "") {
      alert("Preencha todos os campos!");
      return false;
    }

    // Nome deve ter mais de 1 caractere
    if (nome.length <= 1) {
      alert("Nome deve ter mais de 1 caractere!");
      return false;
    }

    // Email deve conter @ e .
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email inválido! Deve conter @ e .");
      return false;
    }

    // Senha deve ter mais de 6 caracteres
    if (senha.length <= 6) {
      alert("A senha deve ter mais de 6 caracteres!");
      return false;
    }

    // Confirmação deve ser igual à senha
    if (senha != senhaConf) {
      alert("As senhas não coincidem!");
      return false;
    }

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nomeServer:  nome,
        emailServer: email,
        senhaServer: senha
      })
    }).then(function (resposta) {

      if (resposta.ok) {
        // Só redireciona se o cadastro deu certo
        alert("Cadastro realizado com sucesso!");
        window.location = "/login.html";
      } else {
        resposta.text().then(function (erro) {
          alert("Erro ao cadastrar: " + erro);
          console.error(erro);
        });
      }

    }).catch(function (erro) {
      console.log(erro);
      alert("Erro ao conectar com o servidor!");
    });
  }