"use strict";
/* import { Funcionario } from './index'

const funcionario2 = new Funcionario("João", "123.456.789-10", "joaoM@example.com", "(00) 1234-5578", "Desenvolvedor ", "front end", "Rua das tulipas, 12", new Date('1980-5-15'), 1100, new Date('2020-8-1'), "engenheiro de software", "Masculino")

funcionario2.mostrarDados()

class Desenvolvedor extends Funcionario {
    habilidades: string[];
    ano_experiencia: number;
    constructor(
        nome: string,
        cpf: string,
        email: string,
        telefone: string,
        cargo_funcionario: string,
        especialidade: string,
        endereco: string,
        data_nascimento: Date,
        matricula: number,
        ano_admissao: Date,
        formacao: string,
        habilidades: string[],
        ano_experiencia: number,
        genero: string) {
        super(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, genero);
        this.habilidades = habilidades
        this.ano_experiencia = ano_experiencia
    }
    DadosDev() {
        super.mostrarDados()
        console.log(`Tempo de Experiência: ${this.ano_experiencia}`)
        console.log(`Habilidades: ${this.habilidades}`)
    }
}
const dev1 = new Desenvolvedor('Alex', '111.111.111-66', 'al@gmail.com', '849999999', 'Dev Back end', 'bd', 'rua tal n°10', new Date('1995-8-24'), 1, new Date('2025-1-20'), 'Ciência de dados', ['mysql'], 1, 'masculino');
dev1.DadosDev()

class FrontEnd extends Desenvolvedor {
    frameworks_ui: string[]
    testes_frontend: boolean;
    integracao_api: boolean;
    versionamento_frontend: boolean;

    constructor(
        nome: string,
        cpf: string,
        email: string,
        telefone: string,
        cargo_funcionario: string,
        especialidade: string,
        endereco: string,
        data_nascimento: Date,
        matricula: number,
        ano_admissao: Date,
        formacao: string,
        habilidades: string[],
        ano_experiencia: number,
        frameworks_ui: string[],
        testes_frontend: boolean,
        integracao_api: boolean,
        versionamento_frontend: boolean,
        genero: string) {
        super(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, habilidades, ano_experiencia, genero);
        this.frameworks_ui = frameworks_ui
        this.testes_frontend = testes_frontend
        this.integracao_api = integracao_api
        this.versionamento_frontend = versionamento_frontend
    }
    DadosFrontEnd() {
        super.DadosDev()
        console.log(`Frameworks: ${this.frameworks_ui}`);
        if (this.testes_frontend) {
            console.log(`Conhecimento em testes front-end: SIM`);
        } else {
            console.log(`Conhecimento em testes front-end: Não possui conhecimento`);
        }
        if (this.integracao_api) {
            console.log(`Conhecimentos em integrações de API: SIM`);
        } else {
            console.log(`Conhecimento em integtrações API front-end: Não possui conhecimento`);
        }
        if (this.versionamento_frontend) {
            console.log(`Conhenhecimento em versionamento de git: SIM`);
        } else {
            console.log(`Conhecimento em versionamento git: Não possui conhecimento`);
        }
    }
}

const dev_front1 = new FrontEnd(
    'Ana Souza',
    '987.654.321-00',
    'ana@example.com',
    '(21) 9876-5432',
    'Front-end Developer',
    'UI/UX Design',
    'Rua B, 456',
    new Date('1995-05-15'),
    654321,
    new Date('2021-03-01'),
    'Graduação em Design Digital',
    ['HTML', 'CSS', 'JavaScript', 'React'],
    3,
    ['React', 'Angular'],
    false,
    true,
    true,
    'Feminino');
dev_front1.DadosFrontEnd()


class BackEnd extends Desenvolvedor {
    linguagens_servidor: string[];
    banco_de_dados: boolean;
    integracao_api: boolean;
    seguranca_web: boolean;
    versionamento_backend: boolean;

    constructor(
        nome: string,
        cpf: string,
        email: string,
        telefone: string,
        cargo_funcionario: string,
        especialidade: string,
        endereco: string,
        data_nascimento: Date,
        matricula: number,
        ano_admissao: Date,
        formacao: string,
        habilidades: string[],
        ano_experiencia: number,
        linguagens_servidor: string[],
        banco_de_dados: boolean,
        integracao_api: boolean,
        seguranca_web: boolean,
        versionamento_backend: boolean,
        genero: string) {
        super(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, habilidades, ano_experiencia, genero);
        this.linguagens_servidor = linguagens_servidor;
        this.banco_de_dados = banco_de_dados;
        this.integracao_api = integracao_api;
        this.seguranca_web = seguranca_web;
        this.versionamento_backend = versionamento_backend;
    }
    DadosBackend() {
        super.DadosDev()
        console.log(`Linguagens de Servidor: ${this.linguagens_servidor}`);
        if (this.banco_de_dados) {
            console.log(`Conhecimento em Banco de Dados: SIM`);
        } else {
            console.log(`Conhecimento em Banco de Dados: Não possui conhecimento`);
        }
        if (this.integracao_api) {
            console.log(`Conhecimentos em integrações de API: SIM`);
        } else {
            console.log(`Conhecimento em integtrações API Back-end: Não possui conhecimento`);
        }
        if (this.seguranca_web) {
            console.log(`Conhenhecimento em segurança web: SIM`);
        } else {
            console.log(`Conhecimento em segurança web: Não possui conhecimento`);
        }
        if (this.versionamento_backend) {
            console.log(`Conhenhecimento em versionamento de git: SIM`);
        } else {
            console.log(`Conhecimento em versionamento git: Não possui conhecimento`);
        }
    }
}
const dev_back1 = new BackEnd(
    'José Silva',
    '111.222.333-44',
    'jose@example.com',
    '(11) 9876-5432',
    'Back-end Developer',
    'Desenvolvimento de Aplicações Web',
    'Rua C, 789',
    new Date('1980-03-25'),
    987654,
    new Date('2018-06-01'),
    'Bacharelado em Ciência da Computação',
    ['Node.js', 'Python', 'Java'],
    7,
    ['Node.js', 'Python'],
    true,
    true,
    true,
    true,
    'Masculino');

dev_back1.DadosBackend();

class FullStack extends Desenvolvedor {
    frontend_backend: boolean;
    visao_holistica: boolean;
    colaborativo: boolean;
    frameworks_ui: string[];
    linguagens_servidor: boolean;
    banco_de_dados: boolean;
    seguranca_web: boolean;
    integracao_api: boolean;
    versionamento: boolean;


    constructor(
        nome: string,
        cpf: string,
        email: string,
        telefone: string,
        cargo_funcionario: string,
        especialidade: string,
        endereco: string,
        data_nascimento: Date,
        matricula: number,
        ano_admissao: Date,
        formacao: string,
        habilidades: string[],
        ano_experiencia: number,
        frontend_backend: boolean,
        visao_holistica: boolean,
        colaborativo: boolean,
        frameworks_ui: string[],
        linguagens_servidor: boolean,
        banco_de_dados: boolean,
        seguranca_web: boolean,
        integracao_api: boolean,
        versionamento: boolean,
        genero: string) {
        super(nome, cpf, email, telefone, cargo_funcionario, especialidade, endereco, data_nascimento, matricula, ano_admissao, formacao, habilidades, ano_experiencia, genero);
        this.frontend_backend = frontend_backend;
        this.visao_holistica = visao_holistica;
        this.colaborativo = colaborativo;
        this.frameworks_ui = frameworks_ui;
        this.linguagens_servidor = linguagens_servidor;
        this.banco_de_dados = banco_de_dados;
        this.seguranca_web = seguranca_web;
        this.integracao_api = integracao_api;
        this.versionamento = versionamento;
    }
    DadosFullStack(){
        super.DadosDev()
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
        console.log(``);
    }
} */ 
