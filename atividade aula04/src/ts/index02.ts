/* import { Pessoa } from './index'

class CadastroLivros {
    titulo_livro: string;
    autor_livro: string;
    editora: string;
    categoria: string;
    disponivel: boolean;
    quantidade: number;

    constructor(
        titulo_livro: string,
        autor_livro: string,
        editora: string,
        categoria: string,
        disponivel: boolean,
        quantidade: number) {
        this.titulo_livro = titulo_livro
        this.autor_livro = autor_livro
        this.editora = editora
        this.categoria = categoria
        this.disponivel = disponivel
        this.quantidade = quantidade
    }

    mostrarDados() {
        console.log(`----------Cadastro de livro--------------------------------`);
        console.log(`Titulo de Livro: ${this.titulo_livro}`);
        console.log(`Autor: ${this.autor_livro}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Disponivel: ${this.disponivel}`)
        console.log(`Quantidade: ${this.quantidade}`);
        console.log('-----------------------------------------------------------');
    }
}
const livro1 = new CadastroLivros('Ferrari', 'Brock Yates', 'BestSeller', 'biografia', true, 5)
const livro2 = new CadastroLivros('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', 'ficção', true, 10);
const livro3 = new CadastroLivros('Código Da Vinci', 'Dan Brown', 'Arqueiro', 'mistério', true, 7);
const livro4 = new CadastroLivros('Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 'Intrínseca', 'fantasia', true, 3);
const livro5 = new CadastroLivros('O Poder do Hábito', 'Charles Duhigg', 'Objetiva', 'autoajuda', true, 8);
livro1.mostrarDados();
livro2.mostrarDados();
livro3.mostrarDados();
livro4.mostrarDados();
livro5.mostrarDados();

class Usuarios extends Pessoa {
    constructor(
        public nome: string,
        public endereco: string,
        public email: string,
        public data_nascimento: Date,
        public telefone: string,
        public cpf: string,
        public livros_solicitados: CadastroLivros,
        public livros_devolvovidos: CadastroLivros,
        public data_solicitacao: Date,
        public genero: string) {
        super(nome, endereco, email, data_nascimento, telefone, cpf, genero)
        this.livros_devolvovidos = livros_solicitados
        this, livros_devolvovidos = livros_devolvovidos
    }
    dadosUsuario() {
        console.log(`----------Cadastro de Usuarios-----------------------------------`);
        super.mostrarDados()
        console.log(`Livros Solicitados: ${livro1.titulo_livro}  ${livro1.categoria}`);
        console.log(`Livros Devolvidos: ${livro2.titulo_livro} ${livro2.categoria}`);
        console.log(`-----------------------------------------------------------------`);
    }
}  
const user1 = new Usuarios('Alex', 'rua macaé, 310', 'a.g.gomesalex@gmail.com', new Date('1995-8-24'), '(84)9999-9999', '111.111.111-66', livro1, livro2, new Date("2023-2-22"), 'masculino')
user1.dadosUsuario()

class EmprestimosLivros {
    info_usuario: Usuarios;
    livros_emprestados: CadastroLivros;
    data_emprestimo: Date;
    data_devolucao: Date;

    constructor(
        info_usuario: Usuarios,
        livros_emprestados: CadastroLivros,
        data_emprestimo: Date,
        data_devolucao: Date) {
        this.info_usuario = info_usuario
        this.livros_emprestados = livros_emprestados
        this.data_emprestimo = data_emprestimo
        this.data_devolucao = data_devolucao
    }
}
const relatorio_emprestimos = new EmprestimosLivros(user1, livro1, new Date("2023-2-22"), new Date("2023-11-20"))
console.log(relatorio_emprestimos) */