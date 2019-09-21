//FUNÇOES AQUIIIIII

function listTypes (pokemons, typeParametro) {
 return pokemons.filter(poke => poke.type.includes(typeParametro));
}

function listText(pokemons, text) {
  return pokemons.filter(poke => poke.name.includes(text));
}

const app = {
  listTypes,
  listText
};