// Dados de cada classe — índice corresponde ao onclick da linha do tempo
    const classes = [
      {
        nivel: 'Nível 1',
        titulo: 'Amigo',
        desc: 'A classe inicial do Clube de Desbravadores. O membro aprende os fundamentos do clube, a lei e o lema dos Desbravadores, e realiza suas primeiras atividades em grupo. É o primeiro passo de uma longa jornada de crescimento.',
        tags: ['Introdução aos ideais', 'Espiritualidade', 'habilidades básicas ao ar livre', 'Integração']
      },
      {
        nivel: 'Nível 2',
        titulo: 'Companheiro',
        desc: 'O Companheiro aprofunda o relacionamento com o clube e começa a desenvolver habilidades práticas. Aprende sobre trabalho em equipe e organização pessoal.',
        tags: ['Trabalho em equipe', 'crescimento no serviço comunitário', 'Organização']
      },
      {
        nivel: 'Nível 3',
        titulo: 'Pesquisador',
        desc: 'Neste nível o membro mergulha no estudo e na pesquisa. Desenvolve habilidades de estudo, conclui mais especialidades e começa a aprofundar conhecimentos em áreas de seu interesse.',
        tags: ['Pesquisa', 'Especialidades avançadas', 'Conhecimento']
      },
      {
        nivel: 'Nível 4',
        titulo: 'Pioneiro',
        desc: 'O Pioneiro é um membro com experiência de campo. Aprende técnicas de sobrevivência, acampamento e trabalho em ambientes naturais. Desenvolve autonomia e espírito de aventura.',
        tags: ['Sobrevivência', 'Acampamento', 'Autonomia', 'Natureza']
      },
      {
        nivel: 'Nível 5',
        titulo: 'Excursionista',
        desc: 'Focado em atividades ao ar livre e contato com a natureza. O Excursionista realiza trilhas, expedições e atividades ecológicas, aprofundando o respeito pelo meio ambiente.',
        tags: ['Trilhas', 'Natureza', 'Ecologia', 'Expedições']
      },
      {
        nivel: 'Nível 6',
        titulo: 'Guia',
        desc: 'O Guia começa a exercer um papel de referência dentro do clube. Orienta membros mais novos, lidera atividades e demonstra maturidade nas responsabilidades assumidas.',
        tags: ['Mentoria', 'Referência', 'Liderança prática']
      },
      {
        nivel: 'Nível 7',
        titulo: 'Líder',
        desc: 'A classe mais avançada do clube. O Líder possui pleno domínio das atividades e valores do ministério, exerce liderança com excelência e é exemplo para todos os membros do clube.',
        tags: ['Liderança plena', 'Excelência', 'Exemplo', 'Mentoria avançada']
      }
    ];

    // POP-UP
    function abrirModal(i) {
      const c = classes[i];
      document.getElementById('modalNivel').textContent = c.nivel;
      document.getElementById('modalTitulo').textContent = c.titulo;
      document.getElementById('modalDesc').textContent = c.desc;
      document.getElementById('modalTags').innerHTML = c.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
      document.getElementById('modalFundo').classList.add('aberto');
    }

    function fecharModal(e) {
      if (e === null || e.target === document.getElementById('modalFundo')) {
        document.getElementById('modalFundo').classList.remove('aberto');
      }
    }