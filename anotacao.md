#Anotações de aprendizado

    function insert(value) {
    document.getElementById('inputCalculadora').value += value;
    }

Esse código de JS ele pega os button que tem a característica "onclick" e coloca no local de resultado do código 

    <input type="number" name="inumero" id="inputCalculadora">

Essa é a barra de resultado que é feita por um input do typo number é muito melhor assim pois deixa o código mais limpo 

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

Para tirar a estilização do código usa esse negocio doido do css que o " input [type="number] seleciona todos inputs com essas características 

Troquei para o P pois fica mais fácil de usar doq input que estava resultando em problemas 