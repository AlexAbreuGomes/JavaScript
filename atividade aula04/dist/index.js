"use strict";
class Funcionario {
    nome_funcionario;
    cargo_funcionario;
    especialidade;
    endereço_funcionario;
    idade_funcionario;
    matricula;
    ano_admissao;
    escolaridade_funcionario;
    constructor(nome_funcionario, cargo_funcionario, especialidade, endereço_funcionario, idade_funcionario, matricula, ano_admissao, escolaridade_funcionario) {
        this.nome_funcionario = nome_funcionario;
        this.cargo_funcionario = cargo_funcionario;
        this.especialidade = especialidade;
        this.endereço_funcionario = endereço_funcionario;
        this.idade_funcionario = idade_funcionario;
        this.matricula = matricula;
        this.ano_admissao = ano_admissao;
        this.escolaridade_funcionario = escolaridade_funcionario;
    }
    mostrarDados() {
        console.log(`----------Dados do Funcionario--------------------------------`);
        console.log(`Nome do Funcionario: ${this.nome_funcionario}`);
        console.log(`Cargo: ${this.cargo_funcionario}`);
        console.log(`Especialidade: ${this.especialidade}`);
        console.log(`Endereço ${this.endereço_funcionario}`);
        console.log(`Idade: ${this.idade_funcionario.toLocaleDateString('pt-BR')}`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Admissão: ${this.ano_admissao.toLocaleDateString('pt-BR')}`);
        console.log(`Formação: ${this.escolaridade_funcionario}`);
        console.log('--------------------------------------------------------------');
    }
}
const funcionario1 = new Funcionario("João Silva", "Médico", "Cardiologista", "Rua X, Potengi", new Date('1970-2-20'), 123456, new Date('2022-2-2'), "Graduação em Medicina");
console.log(funcionario1.mostrarDados());
class Paciente {
    nome;
    idade;
    cpf;
    endereço;
    consultas;
    constructor(nome, idade, cpf, endereço, consultas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereço = endereço;
        this.consultas = consultas;
    }
    mostrarDados2() {
        console.log(`---------------Dados do Paciente------------------------------`);
        console.log(`Nome do Paciente: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.idade.toLocaleDateString('pt-BR')}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Endereço: ${this.endereço}`);
        console.log(`Consulta: ${funcionario1.especialidade}`);
        console.log('-------------------------------------------------------------');
    }
}
const paciente1 = new Paciente("Carlos Oliveira", new Date('1988-2-5'), "789.123.456-78", "Rua Y, Igapó", funcionario1);
console.log(paciente1.mostrarDados2());
class Consulta {
    paciente;
    especialidade;
    medico;
    data_consulta;
    constructor(paciente, especialidade, medico, data_consulta) {
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.medico = medico;
        this.data_consulta = data_consulta;
    }
    mostrarDados3() {
        console.log(`---------------Dados da Consulta-----------------------------`);
        console.log(`Nome do Paciente: ${paciente1.nome}`);
        console.log(`Especialidade: ${funcionario1.especialidade}`);
        console.log(`Médico: ${funcionario1.nome_funcionario}`);
        console.log(`Data da Consulta: ${this.data_consulta.toLocaleDateString('pt-BR')}`);
        console.log(`Consulta: ${funcionario1.especialidade}`);
        console.log('-------------------------------------------------------------');
    }
}
const consulta1 = new Consulta(paciente1, 'cardiologista', 'joão silva', new Date('2024-2-2'));
console.log(consulta1.mostrarDados3());
//console.log(funcionario1,paciente1,consulta1)
