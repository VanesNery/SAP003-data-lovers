const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");
const order = document.getElementById("optionOrder");
const search = document.getElementById("search");
const egg = document.getElementById("optionEgg");
const statistic = document.getElementById("computation");

window.onload = () => {
  listPoke(pokemons);
  lisTypes(pokemons);
};

function listPoke(data) {
  let template = "";
 
  data.map(
    pokemon =>
      (template += `
    <div id="card" class="card">
      <div class="cardInner">
        <div class="cardFront">
        <p><img src="${pokemon.img}"/></p>
        <h1 class="name">${pokemon.name}</h1>
        <p>Nº ${pokemon.num}</p>
        <p>TIPO: ${pokemon.type.join(", ")}</p>
      </div>
      <div class="cardBack">
      <img src="${pokemon.img}"/>
        <p>Doce: ${pokemon.candy}</p>
        <p>Altura: ${pokemon.height} Peso: ${pokemon.weight}</p>
        <p>FRAQUEZAS: ${pokemon.weaknesses.join(", ")}</p>
      </div>
    </div>
    </div>
`)
  );
  show.innerHTML = template;
}

function lisTypes(pokemons) {
  const pokeTypes = [];
  pokemons.filter(pokemons =>
    pokemons.type.filter(type => {
      if (!pokeTypes.includes(type)) {
        pokeTypes.push(type);
      } else {
        return false;
      }
    })
  );
  filtro.innerHTML += "<option value=\"none\">-- Tipos --</option>";
  filtro.innerHTML += pokeTypes
    .map(type => `<option value="${type}">${type}</option>`)
    .join(", ");
}

search.addEventListener("keyup", search => {
  const poke = pokemons.slice();
  const text = app.listText(poke, search.target.value);
  listPoke(text);
});

order.addEventListener("change", oOrder => {
  const poke = pokemons.slice();
  const ord = app.listOrder(poke, oOrder.target.value);
  listPoke(ord);
});

egg.addEventListener("change", e => {
  const poke = pokemons.slice();
  const filterEgg = app.listEgg(poke, e.target.value);
  statistic.innerHTML = `<div class="computation">${app.printStatic(
    app.listEgg(poke, egg.value)
  )} % de Pokémons nascem de ${egg.value} </div>`;
  listPoke(filterEgg);
});

filtro.addEventListener("change", event => {
  const poke = pokemons.slice();
  const filter = app.listTypes(poke, event.target.value);
  statistic.innerHTML = `<div class="computation">${app.printStatic(
    app.listTypes(poke, filtro.value)
  )} % de Pokémons do tipo: ${filtro.value} </div>`;
  listPoke(filter);
});
