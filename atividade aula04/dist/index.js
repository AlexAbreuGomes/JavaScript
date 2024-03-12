"use strict";
class Pessoa {
    nome;
    endereco;
    email;
    data_nascimento;
    telefone;
    cpf;
    genero;
    constructor(nome, endereco, email, data_nascimento, telefone, cpf, genero) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.cpf = cpf;
        this.genero = genero;
    }
}
class Funcionario extends Pessoa {
    cargo_funcionario;
    //especialidade: string;
    matricula;
    //ano_admissao: Date;
    //formacao: string;
    constructor(nome, cpf, email, telefone, cargo_funcionario, 
    //especialidade: string,
    endereco, data_nascimento, matricula, 
    //ano_admissao: Date,
    //formacao: string,
    genero) {
        super(nome, endereco, email, data_nascimento, telefone, cpf, genero);
        this.cargo_funcionario = cargo_funcionario;
        //this.especialidade = especialidade
        this.matricula = matricula;
        //this.ano_admissao = ano_admissao
        //this.formacao = formacao
    }
}
/*const funcionario1 = new Funcionario("João Silva", "123.456.789-00", "joao@example.com", "(00) 1234-5678", "Medico", "Rua das Flores, 123", new Date('1990-5-15'), 1001, "masculino");


funcionario1.mostrarDados();*/
class Paciente extends Pessoa {
    //consultas: Funcionario;
    constructor(nome, endereco, email, data_nascimento, telefone, cpf, 
    // consultas: Funcionario,
    genero) {
        super(nome, endereco, email, data_nascimento, telefone, cpf, genero);
        //this.consultas = consultas
    }
}
/*const paciente1 = new Paciente("Ana Silva", "Rua das Flores, 123", "ana@example.com", new Date('1995-3-10'), "(00) 1234-5678", "987.654.321-00", funcionario1, "Feminino");

paciente1.mostrarDados2();*/
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
//const consulta1 = new Consulta(paciente1, 'cardiologista', 'joão silva', new Date('2024-2-2'));
//consulta1.mostrarDados3();
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#formFuncionario');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            const cargo = document.getElementById('cargo').value;
            const matricula = document.getElementById('matricula').value;
            const dataNascimentoFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR'); // formatar a data formato brasileiro
            //armazenar os dados do funcionario no localStorege
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimentoFormatada);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            localStorage.setItem('cargo', cargo);
            localStorage.setItem('matricula', matricula);
            //redirecionar para a pagina da tabela
            window.location.href = './funcionario.html';
        });
    }
    else {
        console.error('O formulário não foi encontrado.');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#formPaciente');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const endereco = document.getElementById('endereco').value;
            const cpf = document.getElementById('cpf').value;
            const genero = document.getElementById('genero').value;
            //const cargo = (document.getElementById('cargo') as HTMLInputElement).value;
            //const matricula = (document.getElementById('matricula') as HTMLInputElement).value;
            const dataNascimentoFormatada = new Date(dataNascimento).toLocaleDateString('pt-BR'); // formatar a data formato brasileiro
            //armazenar os dados do funcionario no localStorege
            localStorage.setItem('nome', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('telefone', telefone);
            localStorage.setItem('dataNascimento', dataNascimentoFormatada);
            localStorage.setItem('endereco', endereco);
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('genero', genero);
            //localStorage.setItem('cargo', cargo);
            //localStorage.setItem('matricula', matricula);
            //redirecionar para a pagina da tabela
            window.location.href = './paciente.html';
        });
    }
    else {
        console.error('O formulário não foi encontrado.');
    }
});
