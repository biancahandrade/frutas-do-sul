function pesquisar() {
    // Seleciona o elemento HTML com o id "resultados-pesquisa" e armazena em uma variável.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de uma fruta</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada elemento (dado) do array 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemente
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
        }
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o conteúdo HTML completo à propriedade innerHTML do elemento 'section'.
    section.innerHTML = resultados;
  }
