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
const funcionario1 = new Funcionario("João Silva", "Médico", "Cardiologia", "Rua X, Potengi", 35, 123456, 2015, "Graduação em Medicina");

class Paciente {
    nome: string;
    idade: number;
    cpf: string;
    endereço: string;
    data_nascimento: Date;
    consultas: Funcionario;
    constructor(
        nome: string,
        idade: number,
        cpf: string,
        endereço: string,
        data_nascimento: Date,
        consultas: Funcionario) { 
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.endereço = endereço
        this.data_nascimento = data_nascimento
        this.consultas = consultas
    }
}
const paciente1 = new Paciente("Carlos Oliveira", 45, "789.123.456-78", "Rua Y, Igapó", new Date("1979-08-15"),funcionario1);

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
const consulta1 = new Consulta(paciente1, 'cardiologista', 'joão silva', new Date('2-22-2024'))

console.log(funcionario1,paciente1,consulta1)