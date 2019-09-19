//exibição dos dados na tela    
const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");

window.onload = () => {
    listPoke ();
    lTypes (pokemons);
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

filtro.addEventListener("change", listPokemon);
const filter = app.listTypes(pokemons, lTypes.value);

function lTypes (pokemons) {
    const pTypes = [];
    pokemons.map(pokemons => pokemons.type.map(type => {
        if (!pTypes.includes(type)){
            pTypes.push(type);
        } else{
            return false;
        }
    }));
    filtro.innerHTML += "";
    filtro.innerHTML += `<option value="none">-- Filtro -- </option>`;
    filtro.innerHTML += pTypes.map(type => `<option value="${type}">${type}</option>`).join("");
}