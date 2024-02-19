class Funcionario {
    nome_funcionario: string;
    cargo_funcionario: string;
    especialidade: string;
    endereço_funcionario: string;
    idade_funcionario: number;
    matricula: number;
    ano_admissao: number;
    escolaridade_funcionario: string;

    constructor(
        nome_funcionario: string,
        cargo_funcionario: string,
        especialidade: string,
        endereço_funcionario: string,
        idade_funcionario: number,
        matricula: number,
        ano_admissao: number,
        escolaridade_funcionario: string) {
        this.nome_funcionario = nome_funcionario
        this.cargo_funcionario = cargo_funcionario
        this.especialidade = especialidade
        this.endereço_funcionario = endereço_funcionario
        this.idade_funcionario = idade_funcionario
        this.matricula = matricula
        this.ano_admissao = ano_admissao
        this.escolaridade_funcionario = escolaridade_funcionario
    }
}

class Consulta {

    paciente: Paciente;
    especialidade: string;
    medico: string;
    data_consulta: Date;
    constructor(
        paciente: Paciente,
        especialidade: string,
        medico: string,
        data_consulta: Date) {
        this.paciente = paciente
        this.especialidade = especialidade
        this.medico = medico
        this.data_consulta = data_consulta
    }
}

class Paciente {
    nome: string;
    idade: number;
    cpf: string;
    endereço: string;
    data_nascimento: Date;
    consultas: Consulta[];
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        endereço: string,
        data_nascimento: Date,
        consultas: Consulta[]){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.endereço = endereço
        this.data_nascimento = data_nascimento
        this.consultas = consultas
        }


}