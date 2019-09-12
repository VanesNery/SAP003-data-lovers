// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/

document.body.onload = adcElemento;

function adcElemento () { 
  // cria um novo elemento div 
  // e dá à ele conteúdo
  for(i=0; i<=10; i++){
    var divNova = document.createElement("div"); 
    var name = document.createTextNode(POKEMON.pokemon[i].name); 
    var id = document.createTextNode(POKEMON.pokemon[i].id);
    var img = document.createElement('img');
    img.src = POKEMON.pokemon[i].img;
    //var img.src = POKEMON.pokemon[i].img;
    divNova.appendChild(id); //adiciona o nó de texto à nova div criada 
    divNova.appendChild(name);
    divNova.appendChild(img);
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    var divAtual = document.getElementById("div1"); 
    document.body.insertBefore(divNova, divAtual); 
  }
 
}
