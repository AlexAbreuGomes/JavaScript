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
}
const funcionario1 = new Funcionario("João Silva", "Médico", "Cardiologia", "Rua X, Potengi", 35, 123456, 2015, "Graduação em Medicina");
class Paciente {
    nome;
    idade;
    cpf;
    endereço;
    data_nascimento;
    consultas;
    constructor(nome, idade, cpf, endereço, data_nascimento, consultas) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.endereço = endereço;
        this.data_nascimento = data_nascimento;
        this.consultas = consultas;
    }
}
const paciente1 = new Paciente("Carlos Oliveira", 45, "789.123.456-78", "Rua Y, Igapó", new Date("1979-08-15"), funcionario1);
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
}
const consulta1 = new Consulta(paciente1, 'cardiologista', 'joão silva', new Date('2-22-2024'));
console.log(funcionario1, paciente1, consulta1);
