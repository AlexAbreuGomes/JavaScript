//let, var const
//recebendo o formulario de cadastro
const formulario = document.getElementById('cadastro') as HTMLFormElement;
// adicionando um evento ao formulario de cadastro, tipo submit
formulario.addEventListener('submit',(evento) =>{ // funcçao de seta estudar sobre 
    evento.preventDefault();
    
        //adicionando a variavel nome pelo id nome
        const nome = (document.getElementById('nome') as HTMLFormElement).value;
        //adicionando a variavel cpf pelo id cpf
        const cpf = (document.getElementById('cpf') as HTMLFormElement).value;
        //adionando a variavel email pelo id email
        const email = (document.getElementById('email') as HTMLFormElement).value;
        

        const dados = `
        <h1> Dados coletados </h1>
        <p>Nome:${nome} <br>
        <p>CPF:${cpf} <br>
        <p>Email:${email} <br>
        `

        const dadosForm = document.getElementById('resposta')
        if (dadosForm) {
            dadosForm.innerHTML = dados
        }
    })