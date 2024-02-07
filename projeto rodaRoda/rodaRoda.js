const palavras = [
    ['corinthians', 'tristeza'],
    ['hamilton', 'Maior'],
    ['java', 'linguagem'],
    ['maçã', 'Fruta'],
    ['sol', 'Astro'],
    ['livro', 'Leitura'],
    ['gato', 'Animal'],
    ['azul', 'Cor'],
    ['piano', 'Música'],
    ['montanha', 'Elevação'],
    ['café', 'Bebida'],
    ['voo', 'Ação'],
    ['abraço', 'Carinho'],
    ['rio', 'Água'],
    ['inverno', 'Estação'],
    ['farol', 'Luz'],
    ['travesseiro', 'Apoio'],
    ['riso', 'Alegria'],
    ['correr', 'Velocidade'],
    ['jardim', 'Natureza'],
    ['lua', 'Celestial'],
    ['aventura', 'Jornada'],
    ['câmera', 'Fotografia'],
    ['poesia', 'Expressão'],
    ['suspiro', 'Respiração'],
    ['oceano', 'Mar'],
    ['lanterna', 'Luz'],
    ['desejo', 'Anseio'],
    ['estrela', 'Celestial'],
    ['sorriso', 'Felicidade'],
    ['silêncio', 'Quietude'],
    ['viagem', 'Jornada'],
    ['girassol', 'Flor'],
    ['serenidade', 'Calma'],
    ['arco-íris', 'Cores'],
    ['memória', 'Lembrança'],
    ['fragrância', 'Perfume'],
    ['brisa', 'Vento'],
    ['cachoeira', 'Cheiro'],
    ['castelo', 'Fortaleza'],
    ['rascunho', 'Esboço'],
    ['horizonte', 'Vista'],
    ['saudade', 'Sentimento'],
    ['canção', 'Música'],
    ['ternura', 'Carinho'],
    ['penumbra', 'Sombra'],
    ['imaginação', 'Criatividade'],
    ['amizade', 'Relação'],
    ['sonho', 'Sonhar']
];

// Declaração das variáveis necessárias para o jogo
let palavraEscolhida = []; // Armazena a palavra escolhida para o jogo
let dica = ''; // Armazena a dica associada à palavra
let letrasErradas = []; // Armazena as letras que foram escolhidas erroneamente pelo jogador
let letrasDescobertas = []; // Armazena as letras descobertas pelo jogador na palavra escolhida
let tentativasRestantes = 0; // Armazena o número de tentativas restantes para o jogador

// Função que retorna uma palavra aleatória e sua dica a partir do array 'palavras'
function palavraAleatoria() {
    // Gera um índice aleatório dentro dos limites do array 'palavras'
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    // Retorna a palavra e a dica associada ao índice gerado aleatoriamente
    return palavras[indiceAleatorio];
}


function iniciarJogo() {
    const escolha = palavraAleatoria();
    palavraEscolhida = escolha[0].split('');
    dica = escolha[1];
    letrasErradas = [];
    letrasDescobertas = [];

    // Inicializa letrasDescobertas com underlines
    for (let i = 0; i < palavraEscolhida.length; i++) {
        letrasDescobertas.push("_");
    }

    // Define o número máximo de tentativas como metade do comprimento da palavra mais 1
    tentativasRestantes = Math.ceil(palavraEscolhida.length / 2) + 1;

    // Exibe a dica na tela
    document.getElementById('dica').innerText = `Dica: ${dica}`;

    // Exibe a palavra com espaços entre as letras na tela
    document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;

    // Exibe o número de tentativas restantes na tela
    document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;
}

// Função que inicializa o jogo, escolhendo uma palavra aleatória e exibindo-a na tela
function iniciarJogo() {
    // Escolhe uma palavra aleatória do array 'palavras'
    const escolha = palavraAleatoria();
    // Divide a palavra em letras individuais e armazena em 'palavraEscolhida'
    palavraEscolhida = escolha[0].split('');
    // Armazena a dica associada à palavra
    dica = escolha[1];
    // Inicializa as listas de letras erradas e descobertas
    letrasErradas = [];
    letrasDescobertas = [];

    // Inicializa letrasDescobertas com underlines
    for (let i = 0; i < palavraEscolhida.length; i++) {
        letrasDescobertas.push("_");
    }

    // Define o número máximo de tentativas como metade do comprimento da palavra mais 1
    tentativasRestantes = Math.ceil(palavraEscolhida.length / 2) + 1;

    // Exibe a dica na tela
    document.getElementById('dica').innerText = `Dica: ${dica}`;

    // Exibe a palavra com espaços entre as letras na tela
    document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;

    // Exibe o número de tentativas restantes na tela
    document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;
}

// Função que processa uma rodada de jogo quando o jogador tenta adivinhar uma letra
function jogarRodada() {
    // Verifica se ainda há tentativas restantes
    if (tentativasRestantes <= 0) {
        alert("Você excedeu o número máximo de tentativas!");
        verificarPalavraCompleta();
        return;
    }

    // Obtém a letra digitada pelo jogador e a converte para minúsculas
    const letra = document.getElementById('letra').value.toLowerCase();

    // Verifica se ainda existem letras a serem descobertas na palavra
    if (letrasDescobertas.includes("_")) {
        // Decrementa o número de tentativas restantes
        tentativasRestantes--;

        // Verifica se a letra está presente na palavra escolhida
        if (palavraEscolhida.includes(letra)) {
            // Se sim, percorre a palavra e substitui os underlines pelas letras corretas
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    letrasDescobertas[i] = letra;
                }
            }
        } else {
            // Se não, adiciona a letra à lista de letras erradas
            letrasErradas.push(letra);
        }

        // Atualiza a exibição da palavra na tela
        document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;

        // Atualiza a exibição das letras erradas na tela
        document.getElementById('letras-erradas').innerText = `Letras erradas: ${letrasErradas.join(", ")}`;

        // Atualiza o número de tentativas restantes na tela
        document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;

        // Verifica se todas as letras foram descobertas
        if (!letrasDescobertas.includes("_")) {
            alert("Parabéns! Você acertou a palavra!");
        }
    } else {
        alert("Todas as letras foram descobertas!");
    }
}

// Função que verifica se o jogador excedeu o número de tentativas e tenta adivinhar a palavra completa
function verificarPalavraCompleta() {
    // Solicita ao jogador que digite a palavra completa
    const palavraDigitada = prompt("Você excedeu o número de tentativas! Digite a palavra completa:");
    // Verifica se a palavra digitada pelo jogador está correta
    if (palavraDigitada.toLowerCase() === palavraEscolhida.join("")) {
        alert("Parabéns! Você acertou a palavra!");
    } else {
        alert("A palavra digitada está incorreta. Tente novamente!");
    }
}

// Chamando a função para iniciar o jogo quando a página é carregada
iniciarJogo();

// Adicionando evento de clique ao botão para processar uma rodada de jogo
document.getElementById('botao-jogar').addEventListener('click', jogarRodada);

