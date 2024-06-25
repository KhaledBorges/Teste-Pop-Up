document.querySelector('.botaoVerMais').onclick = verMais;


function verMais() {
    let divNova = document.createElement('div');
    divNova.setAttribute('id', 'divEscura');
    document.body.appendChild(divNova);
    

    let artigo = document.createElement('article');
    artigo.setAttribute('id', 'artigoNovo');
    document.body.appendChild(artigo);

    let paragrafo = document.createElement('p');
    paragrafo.setAttribute('class', "textoCaixa");
    paragrafo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet sit amet cursus. Ut ornare lectus sit amet est placerat in egestas erat. Risus in hendrerit gravida rutrum quisque non tellus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Metus dictum at tempor commodo. Hac habitasse platea dictumst vestibulum. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Id volutpat lacus laoreet non curabitur gravida. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Sit amet cursus sit amet. Nam aliquam sem et tortor consequat id porta. Arcu felis bibendum ut tristique et egestas. Porta lorem mollis aliquam ut porttitor leo a.';
    artigoNovo.appendChild(paragrafo);

    let paragrafo2 = document.createElement('p');
    paragrafo2.setAttribute('class', "textoCaixa2");
    paragrafo2.textContent = 'Pulvinar proin gravida hendrerit lectus a. Massa tempor nec feugiat nisl. Convallis a cras semper auctor neque vitae. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Viverra nam libero justo laoreet sit amet cursus sit amet. Et pharetra pharetra massa massa. Viverra vitae congue eu consequat. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Egestas egestas fringilla phasellus faucibus. Tellus at urna condimentum mattis. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Felis eget nunc lobortis mattis. Tristique magna sit amet purus gravida quis blandit turpis. Scelerisque felis imperdiet proin fermentum leo vel.';
    artigoNovo.appendChild(paragrafo2);

    let paragrafo3 = document.createElement('p');
    paragrafo3.setAttribute('class', "textoCaixa3");
    paragrafo3.textContent = 'Turpis nunc eget lorem dolor sed viverra. Lacinia at quis risus sed vulputate odio ut. Tortor dignissim convallis aenean et tortor at. Varius quam quisque id diam vel quam elementum pulvinar. Mi bibendum neque egestas congue. Aliquam malesuada bibendum arcu vitae elementum curabitur. Placerat duis ultricies lacus sed turpis tincidunt id. In egestas erat imperdiet sed. Quam quisque id diam vel. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Egestas pretium aenean pharetra magna ac. Leo integer malesuada nunc vel risus. Orci phasellus egestas tellus rutrum tellus.';
    artigoNovo.appendChild(paragrafo3);

    let paragrafo4 = document.createElement('p');
    paragrafo4.setAttribute('class', "textoCaixa4");
    paragrafo4.textContent = 'Arcu non odio euismod lacinia at quis. Aliquet lectus proin nibh nisl. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Tristique senectus et netus et malesuada fames ac turpis. Id faucibus nisl tincidunt eget nullam non nisi est sit. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Viverra adipiscing at in tellus integer. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Rhoncus urna neque viverra justo nec ultrices dui. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Amet consectetur adipiscing elit duis tristique sollicitudin. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Fames ac turpis egestas maecenas pharetra convallis posuere. Odio euismod lacinia at quis risus sed vulputate odio.';
    artigoNovo.appendChild(paragrafo4);

    let botaoSair = document.createElement('div')
    botaoSair.setAttribute('class', "botaoSair")
    artigoNovo.appendChild(botaoSair)

    let textoBotaoSair = document.createElement('p')
    textoBotaoSair.setAttribute('class', "TextoBotaoSair")
    botaoSair.appendChild(textoBotaoSair)
    textoBotaoSair.textContent = "Aperte aqui para sair!"

    botaoSair.addEventListener('click', function() {
        // Remover elementos criados dinamicamente
        divEscura.remove();
        artigoNovo.remove();
    });
}
