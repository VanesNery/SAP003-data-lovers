//FUNÇOES AQUIIIIII

document.body.onload = listPokemon;

function listPokemon () { 
  // cria um novo elemento div e dá à ele conteúdo
 const pokemons = POKEMON.pokemon

  for(const i of pokemons){
    const divNova = document.createElement("div");
    divNova.setAttribute("class", "divmain")
    const name = document.createTextNode("\n"+i.name); 
    const id = document.createTextNode("\n"+i.id);
    const img = document.createElement('img');
    img.src = i.img;
    //adiciona o nó de texto à nova div criada 
    divNova.appendChild(id); 
    divNova.appendChild(name);
    divNova.appendChild(img);
    
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    const divAtual = document.getElementById("div1"); 
    document.body.insertBefore (divNova, divAtual); 
  }