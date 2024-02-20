class Conta {
    tipo_conta: string;
    Dados_user : CadastroUser;
    



}

class CadastroUser {
    nome: string;
    cpf: string;
    endereco: string;
    data_nasc: Date;
    profissao: string;
    renda: number;
    tipo_conta: Conta;
    saldo_pessoal: number;
    historico_transacao: number;

}
