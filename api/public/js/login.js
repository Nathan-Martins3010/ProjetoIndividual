function LogEntrar() {
    var email = document.getElementById("inpEmail").value;
    var senha = document.getElementById("inpSenha").value;

    // Verifica se os campos estão vazios
    if (email == "" || senha == "") {
      alert("Preencha todos os campos!");
      return false;
    }

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
      })
    }).then(function (resposta) {

      if (resposta.ok) {
        resposta.json().then(function (json) {
          // Salva os dados do usuário na sessão do navegador
          sessionStorage.ID_USUARIO   = json.id;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.EMAIL_USUARIO = json.email;

          // Redireciona para a home após login
          window.location = "/index.html";
        });
      } else {
        resposta.text().then(function (erro) {
          alert("Email ou senha inválidos!");
          console.error(erro);
        });
      }

    }).catch(function (erro) {
      console.log(erro);
      alert("Erro ao conectar com o servidor!");
    });
  }