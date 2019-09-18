//FUNÇOES AQUIIIIII
//filtos

//document.body.onload = listPokemon;
/*document.getElementById("teste").onload = function() {listPokemon()};

function listPokemon() { 
 const pokemons = POKEMON.pokemon
  
  for(const i of pokemons){
    const divNova = document.createElement("li");
    divNova.setAttribute("class", "list-poke")
    const name = document.createTextNode("\n"+i.name); 
    const id = document.createTextNode("\n"+i.id);
    const img = document.createElement('img');
    img.src = i.img;
    //adiciona o nó de texto à nova div criada 
    const divCard = document.cre
    divNova.appendChild(id); 
    divNova.appendChild(name);
    divNova.appendChild(img);
    
    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    const divAtual = document.getElementById("root"); 
    document.insertBefore(divNova, divAtual); 
  } 
}*/
const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");

window.onload = () => {
    listPoke ();
}

function listPoke (){
pokemons.map(pokemon => show.innerHTML += `
    <div id="card" class="card">
    <span>nº${pokemon.num}</span>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.img}"/>
    </div>
`);
}

