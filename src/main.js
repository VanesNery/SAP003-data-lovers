//exibição dos dados na tela 
const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");
const order = document.getElementById("optionOrder");
const search = document.getElementById("search");
const egg = document.getElementById("optionEgg");
const statistic = document.getElementById("computation");

window.onload = () => {
  listPoke (pokemons);
  lTypes (pokemons);
};

function listPoke (data) {
  show.innerHTML = "";
  data.map(pokemon => show.innerHTML += `
    <div id="card" class="card">
    <span>nº ${pokemon.num}</span>
    <h2 class="name">${pokemon.name}</h2>
    <img src="${pokemon.img}"/>
    <p><span>${pokemon.type}</span></p>
    </div>
`);
}

filtro.addEventListener("change", (event) => {
  const poke = pokemons.slice();
  const filter = app.listTypes(poke, event.target.value);
  statistic.innerHTML= `${app.printStatic(app.listTypes(poke, filtro.value))} % de Pokémons do tipo: ${filtro.value}`;
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
  filtro.innerHTML += "<option value=\"none\">-- Tipos -- </option>";
  filtro.innerHTML += pTypes.map(type => `<option value="${type}">${type}</option>`).join(",");
}

search.addEventListener("keyup", (search) => {
  const poke = pokemons.slice();
  const text = app.listText(poke, search.target.value);
  listPoke(text);
});

order.addEventListener("change", (oOrder) => {
  const poke = pokemons.slice();
  const ord = app.listOrder(poke, oOrder.target.value);
  listPoke(ord);
});

egg.addEventListener("change", (e) => {
  const poke = pokemons.slice();
  const filterEgg = app.listEgg(poke, e.target.value);
  statistic.innerHTML = `${app.printStatic(app.listEgg(poke, egg.value))} % de Pokémons nascem de ${egg.value}`;
  listPoke(filterEgg);
});