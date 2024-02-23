"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const funcionario2 = new index_1.Funcionario("João", "123.456.789-10", "joaoM@example.com", "(00) 1234-5578", "Desenvolvedor ", "front end", "Rua das tulipas, 12", new Date('1980-5-15'), 1100, new Date('2020-8-1'), "engenheiro de software", "Masculino");
funcionario2.mostrarDados();
class Desenvolvedor extends index_1.Funcionario {
    habilidades;
    ano_experiencia;
    constructor(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, habilidades, ano_experiencia, genero) {
        super(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, genero);
        this.habilidades = habilidades;
        this.ano_experiencia = ano_experiencia;
    }
    DadosDev() {
        super.mostrarDados();
        console.log(`Tempo de Experiência: ${this.ano_experiencia}`);
        console.log(`Habilidades: ${this.habilidades}`);
    }
}
const funcionario3 = new Desenvolvedor('Alex', '111.111.111-66', 'al@gmail.com', '849999999', 'Dev Back end', 'bd', 'rua tal n°10', new Date('1995-8-24'), 1, new Date('2025-1-20'), 'Ciência de dados', ['mysql'], 1, 'masculino');
funcionario3.DadosDev();
