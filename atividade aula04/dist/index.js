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
class Consulta {
    paciente;
    especialidade;
    medico;
    data_consulta;
    constructor(paciente, especialidade, medico, data_consulta) {
        this.paciente = Paciente;
        this.especialidade = especialidade;
        this.medico = medico;
        this.data_consulta = data_consulta;
    }
}
class Paciente {
    nome;
    idade;
    cpf;
    endereço;
    data_nascimento;
    consultas;
}
