// Atualiza a navbar com base na sessão do usuário
function atualizarNavbar() {
    var nome      = sessionStorage.NOME_USUARIO;
    var linkLogin = document.getElementById('navLogin');
    var usuarioEl = document.getElementById('navUsuario');

    if (nome) {
        // Usuário logado — troca Login por Logout
        linkLogin.textContent = 'Logout';
        linkLogin.href        = '#';
        linkLogin.onclick     = function () {
            sessionStorage.clear();
            window.location = '/index.html';
        };

        // Mostra o ícone com o nome do usuário
        usuarioEl.style.display = 'flex';
        document.getElementById('nomeUsuario').textContent = nome;
    }
}

// Executa quando a página carrega
window.addEventListener('load', atualizarNavbar);