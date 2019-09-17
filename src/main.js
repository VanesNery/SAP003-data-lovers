//exibição dos dados na tela    
const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");

// window.onload = listPokemon => {
//     event.preventDefault();
//     const divAtual = document.getElementById("div1"); 
//     const divNova = document.getElementById("divmain");
//     const listP = window.data.listPokemon();
// } 

filtro.addEventListener("change", lTypes);

window.onload = () =>{
    lTypes (pokemons);
}

function lTypes () { 
const pTypes = [];
pokemons.map(pokemons => pokemons.type.map(type => {
    if(!pTypes.includes(type)){
        pTypes.push(type);
    }else{
            return false;
        }
    }
));

// filtro.innerHTML ="";
// filtro.innerHTML = `<option value="name">-- Filtro --</option>`;
// filtro.innerHTML += pTypes.map(`<option value="${type}">${type}</option>`).join("");
}