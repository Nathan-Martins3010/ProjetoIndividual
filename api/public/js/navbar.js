// Atualiza a navbar com base na sessão do usuário
function atualizarNavbar() {
    let nome      = sessionStorage.NOME_USUARIO;
    let linkLogin = document.getElementById('navLogin');
    let usuarioElemento = document.getElementById('navUsuario');

    if (nome) {
        // Usuário logado — troca Login por Logout
        linkLogin.textContent = 'Logout';
        linkLogin.href = '#';
        linkLogin.onclick= function () {
            sessionStorage.clear();
            window.location = '/index.html';
        };

        // Mostra o ícone com o nome do usuário
        usuarioElemento.style.display = 'flex';
        document.getElementById('nomeUsuario').textContent = nome;
    }
}

// Executa quando a página carrega
window.addEventListener('load', atualizarNavbar);