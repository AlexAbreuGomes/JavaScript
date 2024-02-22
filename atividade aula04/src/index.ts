class Pessoa {
    nome: string;
    endereco: string;
    email: string;
    data_nascimento: Date;
    telefone: string;
    cpf: string;
    genero?: string;

    constructor(
        nome: string,
        endereco: string,
        email: string,
        data_nascimento: Date,
        telefone: string,
        cpf: string,
        genero?: string) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.cpf = cpf;
        this.genero = genero;
    }

    mostrarDados() {
        console.log(`----------------------------Dados Pessoa--------------------------------`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`CPF: ${this.cpf}`);
        if (this.genero){
        console.log(`Genero: ${this.genero}`);
        console.log(`------------------------------------------------------------------------`);
        }

    }
}

class Funcionario extends Pessoa {
    cargo_funcionario: string;
    especialidade: string;
    matricula: number;
    ano_admissao: Date;
    formacao: string;

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
        genero: string){

          super (nome, endereco, email, data_nascimento, telefone, cpf, genero);
          this.cargo_funcionario = cargo_funcionario
          this.especialidade = especialidade
          this.matricula = matricula
          this.ano_admissao = ano_admissao
          this.formacao = formacao
            

        } 
    

    mostrarDados() {
        console.log(`----------Dados do Funcionario--------------------------------`);
        console.log(`Nome do Funcionario: ${this.nome}`);
        console.log(`email: ${this.email}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Cargo: ${this.cargo_funcionario}`);
        console.log(`Especialidade: ${this.especialidade}`);
        console.log(`Endereço ${this.endereco}`);
        console.log(`Idade: ${this.data_nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Admissão: ${this.ano_admissao.toLocaleDateString('pt-BR')}`);
        console.log(`Formação: ${this.formacao}`);
        console.log('--------------------------------------------------------------');
    }

}
const funcionario1 = new Funcionario("João Silva", "123.456.789-00", "joao@example.com", "(00) 1234-5678", "Medico", "Cadiologista", "Rua das Flores, 123", new Date('1990-5-15'), 1001, new Date('2018-8-1'), "Medicina", "");

console.log(funcionario1.mostrarDados())

class Paciente extends Pessoa {
    consultas: Funcionario;

    constructor(
        nome: string,
        endereco: string,
        email: string,
        data_nascimento: Date,
        telefone: string,
        cpf: string,
        consultas: Funcionario,
        genero: string) {

            super (nome, endereco, email, data_nascimento, telefone, cpf, genero);
            this.consultas = consultas

        }
    
    mostrarDados2() {
        console.log(`---------------Dados do Paciente------------------------------`);
        console.log(`Nome do Paciente: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.data_nascimento.toLocaleDateString('pt-BR')}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Consulta: ${(funcionario1.especialidade)}`);
        console.log(`Nome do Médico: ${this}`)
        console.log('-------------------------------------------------------------');
    }

}
const paciente1 = new Paciente("Ana Silva", "Rua das Flores, 123", "ana@example.com", new Date(1995, 3, 10), "(00) 1234-5678", "987.654.321-00", funcionario1, "Feminino");

console.log(paciente1.mostrarDados2());

/*class Consulta {

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

//console.log(funcionario1,paciente1,consulta1)*/