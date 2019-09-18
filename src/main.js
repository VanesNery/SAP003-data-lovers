//exibição dos dados na tela    
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
// const filter = app.listTypes(pokemons, lTypes.value);

// filtro.addEventListener("change", listTypes);

// window.onload = () => {
//     lTypes ();
// }

// function lTypes () { 
// const pTypes = [];
// pokemons.map(pokemons => pokemons.type.map(type => {
//     if(!pTypes.includes(type)){
//         pTypes.push(type);
//     }else{
//             return false;
//     }
//     }
// ));
// filtro.innerHTML = `<option value="name">-- Filtro --</option>`;
// filtro.innerHTML += (`<option value="${lTypes}">${lTypes}</option>`).join("");
// }