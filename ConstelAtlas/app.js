function pesquisar() {
    // Busca a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // Remove espaços em branco ao redor

    // Se campoPesquisa for uma string vazia
    if (campoPesquisa === "") {
        section.innerHTML = "<p class='mensagem-vazia'>Nenhuma constelação foi encontrada</p>";
        return;
    }

    console.log("Campo de Pesquisa:", campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";

    // Verifique se `dados` está definido e é um array
    if (Array.isArray(dados)) {
        // Itera sobre cada resultado da pesquisa
        for (let dado of dados) {
            let titulo = dado.titulo.toLowerCase();
            let descricao = dado.descricao.toLowerCase();
            let tags = dado.tags.toLowerCase();

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Cria o HTML para cada resultado
                resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
                `;
            }
        }
    } else {
        console.error("A variável 'dados' não está definida ou não é um array.");
    }

    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultado || "<p class='mensagem-vazia'>Nenhuma constelação foi encontrada</p>";
}
