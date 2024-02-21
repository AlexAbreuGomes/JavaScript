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

    mostrarDados(){
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
console.log(livro1.mostrarDados());
console.log(livro2.mostrarDados());
console.log(livro3.mostrarDados());
console.log(livro4.mostrarDados());
console.log(livro5.mostrarDados());


class Usuarios {
    nome: string;
    idade: Date;
    email: string;
    endereco: string;
    livros_solicitados: CadastroLivros;
    livros_devolvovidos: CadastroLivros;
    data_solicitacao: Date;

    constructor(
        nome: string,
        idade: Date,
        email: string,
        endereco: string,
        livros_solicitados: CadastroLivros,
        livros_devolvovidos: CadastroLivros,
        data_solicitacao: Date) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.endereco = endereco
        this.livros_solicitados = livros_solicitados
        this.livros_devolvovidos = livros_devolvovidos
        this.data_solicitacao = data_solicitacao
    }

    mostrarDados2(){
        console.log(`----------Cadastro de Usuarios-----------------------------`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.idade.toLocaleDateString('pt-BR')}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Livros Solicitados: ${}`);
        console.log(`----------------------------------------------------------`);
    }
}
const user1 = new Usuarios('Alex', new Date('1995-8-24'), 'a.g.gomesalex@gmail.com', 'rua macae , 130', livro2, livro1, new Date("2023-2-22"))
//console.log(user1)

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
//console.log(relatorio_emprestimos)