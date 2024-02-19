class Pessoa {
    nome: string;
    idade: number;
    genero?: string;
    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}

class Carro {
    nome: string;
    modelo: string;
    marca: string;
    ano: number;
    valor: number;
    cor: string;
    motor: number;
    constructor(
        nome: string,
        modelo: string,
        marca: string,
        ano: number,
        valor: number,
        cor: string,
        motor: number) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.valor = valor;
        this.cor = cor;
        this.motor = motor;
    }
}

const pessoa1 = new Pessoa('Valtemir', 18, 'masculino');
const pessoa2 = new Pessoa('Alex', 28, 'masculino');
const pessoa3 = new Pessoa('Flávio', 20, 'masculino');
const carro1 = new Carro('Mercedes AMG petronas', 'amg', 'mercedes', 2024, 100000, 'azul', 2023);


console.log(pessoa2.nome + ' e ' + pessoa1.nome);
console.log(pessoa3.idade);