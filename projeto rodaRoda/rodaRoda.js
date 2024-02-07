const palavras = [
    ['corinthians', 'Time'],
    ['hamilton', 'Piloto'],
    ['computador', 'Eletrônico'],
    ['montanha', 'Elevação'],
    ['travesseiro', 'Dormir'],
    ['correr', 'Movimento'],
    ['jardim', 'Plantas'],
    ['aventura', 'Emoção'],
    ['fotografia', 'Imagem'],
    ['biblioteca', 'Livros'],
    ['guitarra', 'Música'],
    ['astronauta', 'Espaço'],
    ['hamburguer', 'Comida'],
    ['escola', 'Ensino'],
    ['televisão', 'TV'],
    ['engenharia', 'Profissão'],
    ['dinossauro', 'Pré-história'],
    ['sapateiro', 'Conserto'],
    ['elefante', 'Animal'],
    ['tecnologia', 'Inovação'],
    ['cachoeira', 'Água'],
    ['bicicleta', 'Rodas'],
    ['supermercado', 'Compra'],
    ['espetáculo', 'Show'],
    ['aventureiro', 'Exploração'],
    ['computação', 'Ciência'],
    ['bibliotecário', 'Biblioteca'],
    ['crocodilo', 'Réptil'],
    ['paralelepípedo', 'Forma'],
    ['ventilador', 'Ar'],
    ['pássaro', 'Asas'],
    ['pernambuco', 'Estado'],
    ['camiseta', 'Roupa'],
    ['motorista', 'Carro'],
    ['arquitetura', 'Construção'],
    ['parque', 'Diversão'],
    ['hidroavião', 'Avião'],
    ['refrigerante', 'Bebida'],
    ['astronomia', 'Estrelas'],
    ['alface', 'Verde'],
    ['computador', 'Tecnologia'],
    ['sapateiro', 'Calçados'],
    ['espectador', 'Assistir'],
    ['caminhão', 'Transporte'],
    ['guitarra', 'Instrumento'],
    ['geladeira', 'Gelar']
];

// Declaração das variáveis necessárias para o jogo
var palavraEscolhida = []; // Armazena a palavra escolhida para o jogo
var dica = ''; // Armazena a dica associada à palavra
var letrasErradas = []; // Armazena as letras que foram escolhidas erroneamente pelo jogador
var letrasDescobertas = []; // Armazena as letras descobertas pelo jogador na palavra escolhida
var tentativasRestantes = 0; // Armazena o número de tentativas restantes para o jogador

function palavraAleatoria() {   // Função que retorna uma palavra aleatória e sua dica a partir do array 'palavras'
    var indiceAleatorio = Math.floor(Math.random() * palavras.length);  // Gera um índice aleatório dentro dos limites do array 'palavras'
    return palavras[indiceAleatorio];  // Retorna a palavra e a dica associada ao índice gerado aleatoriamente
}

function iniciarJogo() {
    var escolha = palavraAleatoria();
    palavraEscolhida = escolha[0].split('');
    dica = escolha[1];
    letrasErradas = [];
    letrasDescobertas = [];

    for (let i = 0; i < palavraEscolhida.length; i++) {  // Inicializa letrasDescobertas com underlines
        letrasDescobertas.push("_");
    }

    tentativasRestantes = Math.ceil(palavraEscolhida.length / 2) + 1;  // Define o número máximo de tentativas como metade do comprimento da palavra mais 1
    document.getElementById('dica').innerText = `Dica: ${dica}`;  // Exibe a dica na tela
    document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;  // Exibe a palavra com espaços entre as letras na tela
    document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;  // Exibe o número de tentativas restantes na tela
}

function iniciarJogo() {// Função que inicializa o jogo, escolhendo uma palavra aleatória e exibindo-a na tela
    var escolha = palavraAleatoria();// Escolhe uma palavra aleatória do array 'palavras'
    palavraEscolhida = escolha[0].split('');  // Divide a palavra em letras individuais e armazena em 'palavraEscolhida'
    dica = escolha[1]; // Armazena a dica associada à palavra
    letrasErradas = []; // Inicializa as listas de letras erradas e descobertas
    letrasDescobertas = [];

    for (let i = 0; i < palavraEscolhida.length; i++) {    // Inicializa letrasDescobertas com underlines
        letrasDescobertas.push("_");
    }
    tentativasRestantes = Math.ceil(palavraEscolhida.length / 2) + 1;  // Define o número máximo de tentativas como metade do comprimento da palavra mais 1

    document.getElementById('dica').innerText = `Dica: ${dica}`;   // Exibe a dica na tela
    document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;  // Exibe a palavra com espaços entre as letras na tela
    document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;    // Exibe o número de tentativas restantes na tela
}

function jogarRodada() {  // Função que processa uma rodada de jogo quando o jogador tenta adivinhar uma letra   
    if (tentativasRestantes <= 0) {  // Verifica se ainda há tentativas restantes
        alert("Você excedeu o número máximo de tentativas!");
        verificarPalavraCompleta();
        return;
    }

   var letra = document.getElementById('letra').value.toLowerCase();   // Obtém a letra digitada pelo jogador e a converte para minúsculas
    if (letrasDescobertas.includes("_")) {   // Verifica se ainda existem letras a serem descobertas na palavra    
        tentativasRestantes--;  // Decrementa o número de tentativas restantes

        if (palavraEscolhida.includes(letra)) {  // Verifica se a letra está presente na palavra escolhida  
            for (let i = 0; i < palavraEscolhida.length; i++) {    // Se sim, percorre a palavra e substitui os underlines pelas letras corretas
                if (palavraEscolhida[i] === letra) {  // ele analisa se é estritamente igual
                    letrasDescobertas[i] = letra;  // atribuiçao
                }
            }
        } else {
            letrasErradas.push(letra);  // Se não, adiciona a letra à lista de letras erradas
        }

        document.getElementById('palavra').innerText = `Palavra: ${letrasDescobertas.join(" ")}`;   // Atualiza a exibição da palavra na tela
        document.getElementById('letras-erradas').innerText = `Letras erradas: ${letrasErradas.join(", ")}`;  // Atualiza a exibição das letras erradas na tela
        document.getElementById('tentativas-restantes').innerText = `Tentativas restantes: ${tentativasRestantes}`;  // Atualiza o número de tentativas restantes na tela

        if (!letrasDescobertas.includes("_")) {  // Verifica se todas as letras foram descobertas
            alert("Parabéns! Você acertou a palavra!");
        }
    } else {
        alert("Todas as letras foram descobertas!");
    }
}

function verificarPalavraCompleta() {  // Função que verifica se o jogador excedeu o número de tentativas e tenta adivinhar a palavra completa
    var palavraDigitada = prompt("Você excedeu o número de tentativas! Digite a palavra completa:"); // Solicita ao jogador que digite a palavra completa
    if (palavraDigitada.toLowerCase() === palavraEscolhida.join("")) {      // Verifica se a palavra digitada pelo jogador está correta
        alert("Parabéns! Você acertou a palavra!");
    } else {
        alert("A palavra digitada está incorreta. Tente novamente!");
    }
}

iniciarJogo();  // Chamando a função para iniciar o jogo quando a página é carregada
document.getElementById('botao-jogar').addEventListener('click', jogarRodada);  // Adicionando evento de clique ao botão para processar uma rodada de jogo

