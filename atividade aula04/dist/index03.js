"use strict";
class Conta {
    tipo_conta;
    constructor(tipo_conta) { }
    mostrarDados() {
        console.log(`Conta: ${this.tipo_conta}`);
    }
}
class CadastroUser extends Conta {
    nome;
    cpf;
    endereco;
    data_nasc;
    profissao;
    tipo_conta;
    saldo_pessoal;
    receita;
    despesas;
    historico_transacao;
    valor_meta;
    constructor(nome, cpf, endereco, data_nasc, profissao, tipo_conta, saldo_pessoal, receita, despesas, historico_transacao, valor_meta) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.data_nasc = data_nasc;
        this.profissao = profissao;
        this.tipo_conta = tipo_conta;
        this.saldo_pessoal = saldo_pessoal;
        this.receita = receita;
        this.despesas = despesas;
        this.historico_transacao = historico_transacao;
        this.valor_meta = valor_meta;
    }
}
const cliente1 = new CadastroUser('Maria Silva', '123.456.789-10', 'Potengi', new Date('1985-5-15'), 'Professora', 'corrente', 20000, 2000, 1000, 2, 100000);
class Transacao {
    cliente;
    descricao;
    valor;
    categoria;
    data;
    constructor(cliente, descricao, valor, categoria, data) {
        this.cliente = cliente;
        this.descricao = descricao;
        this.valor = valor;
        this.categoria = categoria;
        this.data = data;
    }
}
const transacao1 = new Transacao(cliente1, 'mercado', 20, 'alimentos', new Date("2023-2-25"));
class MetaFinanceira {
    cliente;
    progresso;
    constructor(cliente, progresso) {
        this.cliente = cliente;
        this.progresso = progresso;
    }
}
const meta1 = new MetaFinanceira(cliente1, 20000);
console.log(meta1, transacao1);
