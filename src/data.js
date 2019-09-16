//FUNÇOES AQUIIIIII
const arrayPokemons = POKEMON.pokemon;

window.data ={
  listPokemon: listPokemon,
  };

document.body.onload = listPokemon;

function listPokemon (pokemons) { 
  // cria um novo elemento div e dá à ele conteúdo
  for(const i of pokemons){
    const divNova = document.createElement("div");
    divNova.setAttribute("class", "divmain");
    const name = document.createTextNode("\n"+i.name); 
    const num = document.createTextNode("\n"+i.num);
    const img = document.createElement('img');
    img.src = i.img;

    //adiciona o nó de texto à nova div criada 
    divNova.appendChild(num); 
    divNova.appendChild(name);
    divNova.appendChild(img);
            
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    const divAtual = document.getElementById("div1"); 
    document.body.insertBefore (divNova, divAtual); 
  }
}

function listTypes (pokemons, type) {
 return pokemons.filter(poke => poke.type.includes(type));
}