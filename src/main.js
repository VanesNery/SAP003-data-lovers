//exibição dos dados na tela    
function mostrar() {
    event.preventDefault();
    const name = document.createTextNode(pokemons[i].name); 
    const id = document.createTextNode(pokemons[i].id);
    const img = document.createElement('img');
    let mostrar = window.data.adcElemento(name, id, img);
    const divAtual = document.getElementById("div1"); 
} 