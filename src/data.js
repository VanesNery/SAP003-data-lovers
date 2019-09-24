//FUNÇOES AQUIIIIII

function listTypes (pokemons, typeParametro) {
  return pokemons.filter(poke => poke.type.includes(typeParametro));
}

function listText(pokemons, text) {
  return pokemons.filter(poke => poke.name.includes(text));
}

function listOrder(pokemons, Orde) {
  if (Orde === "A-Z") {
    return pokemons.sort((a, b) => (a.name > b.name?1:-1));
  }
  else if (Orde === "Z-A") {
    return pokemons.sort((a, b) => (a.name > b.name?-1:1));
  }
  else {
    return pokemons;
  }
}

app = {
  listTypes,
  listText,
  listOrder
};