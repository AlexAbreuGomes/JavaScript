class Conta {
    private tipo_conta: string;
    private data_abertuta: Date;

    constructor(
        tipo_conta: string) {}
        
    mostrarDados(){
    console.log(`Conta: ${this.tipo_conta}`)
    }
}


class CadastroUser extends Conta
{
    nome: string;
    private cpf: string;
    public endereco: string;
    public data_nasc: Date;
    public profissao: string;
    private saldo_pessoal: number;
    private receita: number;
    private despesas: number;
    private historico_transacao: number;
    public valor_meta: number;

    constructor(
        nome: string,
        cpf: string,
        endereco: string,
        data_nasc: Date,
        profissao: string,
        tipo_conta: string,
        saldo_pessoal: number,
        receita: number,
        despesas: number,
        historico_transacao: number,
        valor_meta: number) {

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
        this.valor_meta = valor_meta
    }
}
const cliente1 = new CadastroUser('Maria Silva', '123.456.789-10', 'Potengi', new Date('1985-5-15'), 'Professora', 'corrente', 20000, 2000, 1000, 2, 100000);



class Transacao {
    cliente: CadastroUser;
    descricao: string;
    valor: number;
    categoria: string;
    data: Date;

    constructor(
        cliente: CadastroUser,
        descricao: string,
        valor: number,
        categoria: string,
        data: Date) {

        this.cliente = cliente
        this.descricao = descricao
        this.valor = valor
        this.categoria = categoria
        this.data = data
    }
}
const transacao1 = new Transacao(cliente1,'mercado', 20, 'alimentos', new Date("2023-2-25"));

class MetaFinanceira {
    cliente: CadastroUser;
    progresso: number;

    constructor(
        cliente: CadastroUser,
        progresso: number) {

        this.cliente = cliente;
        this.progresso = progresso
    }
}
const meta1 = new MetaFinanceira(cliente1, 20000);
console.log(meta1,transacao1)