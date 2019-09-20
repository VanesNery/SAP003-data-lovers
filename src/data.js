//FUNÇOES AQUIIIIII

function listTypes (pokemons, typeParametro) {
 return pokemons.filter(poke => poke.type.includes(typeParametro));
}

const app = {
  listTypes
};
