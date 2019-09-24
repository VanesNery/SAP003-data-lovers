//exibição dos dados na tela    
const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");

window.onload = () => {
  listPoke (pokemons);
  lTypes (pokemons);
};

function listPoke (data) {
  show.innerHTML = "";
  data.map(pokemon => show.innerHTML += `
    <div id="card" class="card">
    <span>nº ${pokemon.num}</span>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.img}"/>
    <span>${pokemon.type}</span>
    </div>
`);
}

filtro.addEventListener("change", (event) => {
  const filter = app.listTypes(pokemons, event.target.value);
  listPoke(filter);
});

function lTypes (pokemons) {
  const pTypes = [];
  pokemons.map(pokemons => pokemons.type.map(type => {
    if (!pTypes.includes(type)) {
      pTypes.push(type);
    } else {
      return false;
    }
  }));
  filtro.innerHTML += "";
  filtro.innerHTML += "<option value=\"none\">-- Filtro -- </option>";
  filtro.innerHTML += pTypes.map(type => `<option value="${type}">${type}</option>`).join(",");
}

const search = document.getElementById("search");
search.addEventListener("keyup", (search) => {
  const text = app.listText(pokemons, search.target.value);
  listPoke(text);
});

const order = document.getElementById("optionOrder");
order.addEventListener("change", (oOrder) => {
  const ord = app.listOrder(pokemons, oOrder.target.value);
  listPoke(ord);
});