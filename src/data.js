// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return 'example';
};

window.main ={
  adcElemento: adcElemento,
};*/

document.body.onload = adcElemento;

function adcElemento () { 
  let pokemons = POKEMON.pokemon;
  // cria um novo elemento div 
  // e dá à ele conteúdo
  for(i=0; i<=pokemons.length; i++){
    const divNova = document.createElement("div"); 
    divNova.setAttribute("class", "divmain");
    const name = document.createTextNode(pokemons[i].name); 
    const id = document.createTextNode(pokemons[i].id);
    const img = document.createElement('img');
    img.src = pokemons[i].img;
    //const img.src = pokemons.img;
    divNova.appendChild(id); //adiciona o nó de texto à nova div criada 
    divNova.appendChild(name);
    divNova.appendChild(img);
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    const divAtual = document.getElementById("div1"); 
    document.body.insertBefore(divNova, divAtual); 
  }
 
}
