document.addEventListener('DOMContentLoaded', function () {
    // Recuperar os dados do localStorage
    const nome = localStorage.getItem('nomePaciente');
    const email = localStorage.getItem('emailPaciente');
    const telefone = localStorage.getItem('telefonePaciente');
    const dataNascimento = localStorage.getItem('dataNascimentoPaciente');
    const endereco = localStorage.getItem('enderecoPaciente');
    const cpf = localStorage.getItem('cpfPaciente');
    const genero = localStorage.getItem('generoPaciente');

    // Verificar se existem dados no localStorage
    if (nome && email && telefone && dataNascimento && endereco && cpf && genero) {
        // Adicionar os novos dados à tabela
        const tbody = document.getElementById('pacienteTableBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${dataNascimento}</td>
            <td>${endereco}</td>
            <td>${cpf}</td>
            <td>${genero}</td>
        `;

        // Inserir a nova linha no início da tabela
        tbody.insertBefore(newRow, tbody.firstChild);
        localStorage.clear();
    }

       
});
