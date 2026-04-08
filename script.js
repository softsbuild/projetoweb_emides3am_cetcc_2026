
    const form = document.querySelector("form");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // impede recarregar a página

        // pegando os valores
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const data = document.getElementById("data_nascimento").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const endereco = document.getElementById("endereco").value;

        // pegando o sexo selecionado
        const genero = document.querySelector('input[name="genero"]:checked')?.value || "Não informado";

        // mostrando na tela
        resultado.innerHTML = `
            <h3>Dados cadastrados:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Sexo:</strong> ${genero}</p>
            <p><strong>Data de Nascimento:</strong> ${data}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Estado:</strong> ${estado}</p>
            <p><strong>Endereço:</strong> ${endereco}</p>
        `;
    });
