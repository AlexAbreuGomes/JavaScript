
    const palavras = [
        [['c','o','r','i','n','t','h','i','a','n','s'],'tristeza'],
        [['h','a','m','i','l','t','o','n'],'Maior'],
        [['j','a','v','a'],'linguagem'],
        [['m','a','ç','ã'],'Fruta'],
        [['s','o','l'],'Astro'],
        [['l','i','v','r','o'],'Leitura'],
        [['g','a','t','o'],'Animal'],
        [['a','z','u','l'],'Cor'],
        [['p','i','a','n','o'],'Música'],
        [['m','o','n','t','a','n','h','a'],'Elevação'],
        [['c','a','f','é'],'Bebida'],
        [['v','o','o'],'Ação'],
        [['a','b','r','a','ç','o'],'Carinho'],
        [['r','i','o'],'Água'],
        [['i','n','v','e','r','n','o'],'Estação'],
        [['f','a','r','o','l'],'Luz'],
        [['t','r','a','v','e','s','s','e','i','r','o'],'Apoio'],
        [['r','i','s','o'],'Alegria'],
        [['c','o','r','r','e','r'],'Velocidade'],
        [['j','a','r','d','i','m'],'Natureza'],
        [['l','u','a'],'Celestial'],
        [['a','v','e','n','t','u','r','a'],'Jornada'],
        [['c','â','m','e','r','a'],'Fotografia'],
        [['p','o','e','s','i','a'],'Expressão'],
        [['s','u','s','p','i','r','o'],'Respiração'],
        [['o','c','e','a','n','o'],'Mar'],
        [['l','a','n','t','e','r','n','a'],'Luz'],
        [['d','e','s','e','j','o'],'Anseio'],
        [['e','s','t','r','e','l','a'],'Celestial'],
        [['s','o','r','r','i','s','o'],'Felicidade'],
        [['s','i','l','ê','n','c','i','o'],'Quietude'],
        [['v','i','a','g','e','m'],'Jornada'],
        [['g','i','r','a','s','s','o','l'],'Flor'],
        [['s','e','r','e','n','i','d','a','d','e'],'Calma'],
        [['a','r','c','o','-','í','r','i','s'],'Cores'],
        [['m','e','m','ó','r','i','a'],'Lembrança'],
        [['f','r','a','g','r','â','n','c','i','a'],'Perfume'],
        [['b','r','i','s','a'],'Vento'],
        [['e','s','p','e','r','a','n','ç','a'],'Esperança'],
        [['c','a','c','h','o','e','i','r','a'],'Cheiro'],
        [['c','a','s','t','e','l','o'],'Fortaleza'],
        [['r','a','s','c','u','n','h','o'],'Esboço'],
        [['h','o','r','i','z','o','n','t','e'],'Vista'],
        [['s','a','u','d','a','d','e'],'Sentimento'],
        [['c','a','n','ç','ã','o'],'Música'],
        [['t','e','r','n','u','r','a'],'Carinho'],
        [['p','e','n','u','m','b','r','a'],'Sombra'],
        [['i','m','a','g','i','n','a','ç','ã','o'],'Criatividade'],
        [['a','m','i','z','a','d','e'],'Relação'],
        [['s','o','n','h','o'],'Sonhar']
    ];
    

function palavraAleatoria() {
    // Gera um índice aleatório entre 0 e o comprimento da matriz
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);

    // Retorna a submatriz na posição do índice aleatório
    return palavras[indiceAleatorio];
}

// Exemplo de uso
const palavraEscolhida = palavraAleatoria();
const palavra = palavraEscolhida[0]; // A palavra está no índice 0 da submatriz
const dica = palavraEscolhida[1]; // A dica está no índice 1 da submatriz

console.log("Palavra:", palavra);
console.log("Dica:", dica);
