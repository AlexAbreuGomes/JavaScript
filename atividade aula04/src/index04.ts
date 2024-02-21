class Equipe {
    membro1: string;
    membro2: string;
    membro3: string;

    constructor(
        membro1: string,
        membro2: string,
        membro3: string) {
        this.membro1 = membro1;
        this.membro2 = membro2;
        this.membro3 = membro3;
    }
}

class Projetos {
    projeto_Andamento: number;
    nome_projeto: string;
    data_inicial: Date;
    data_limite: Date;
    equipe_projeto: Equipe;

    constructor(
        projeto_Andamento: number,
        nome_projeto: string,
        data_inicial: Date,
        data_limite: Date,
        equipe_projeto: Equipe) {

        this.projeto_Andamento = projeto_Andamento;
        this.nome_projeto = nome_projeto;
        this.data_inicial = data_inicial;
        this.data_limite = data_limite;
        this.equipe_projeto = equipe_projeto;
    }
}

class Tarefa {
    descricao: string;
    responsavel: Equipe;
    prazo: Date;

    constructor(
        descricao: string,
        responsavel: Equipe,
        prazo: Date) {
        this.descricao = descricao;
        this.responsavel = responsavel;
        this.prazo = prazo;
    }
}

class Comunicacao {
    mensagens: string;
    arquivos_compartilhados: string;
    discusoes: string;

    constructor(
        mensagens: string,
        arquivos_compartilhados: string,
        discusoes: string) {

        this.mensagens = mensagens
        this.arquivos_compartilhados = arquivos_compartilhados
        this.discusoes = discusoes    
    }
}
const equipeProjeto1 = new Equipe("Ana", "Carlos", "Maria");
const equipeProjeto2 = new Equipe("Pedro", "Carla", "Luiz");
const projeto1 = new Projetos(1, "Desenvolvimento de Sistema de Gerenciamento", new Date("2024-02-10"), new Date("2024-06-30"), equipeProjeto1);
const projeto2 = new Projetos(2, "Desenvolvimento de Aplicativo Mobile", new Date("2024-03-01"), new Date("2024-08-15"), equipeProjeto2);
const tarefa1 = new Tarefa("Implementar cadastro de usuários", equipeProjeto1, new Date("2024-03-15"));
const tarefa2 = new Tarefa("Desenvolver interface de usuário", equipeProjeto2, new Date("2024-04-30"));
const comunicacaoProjeto1 = new Comunicacao("Discussão sobre requisitos", "Documentação de Requisitos", "Revisão do Escopo");
const comunicacaoProjeto2 = new Comunicacao("Reunião de b  rainstorming", "Design Mockups", "Decisões de UX/UI");
console.log (equipeProjeto1,tarefa2,comunicacaoProjeto2);