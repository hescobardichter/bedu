const { requestGet } = require('./services');

const getPokemonApi = (pokemon) => {
    return requestGet(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
}

const pokemones = [
    'pikachu',
    'pidgey',
    'onix',
];

const getPokemon = async () => { 
    try{
        return await Promise.all(
            pokemones.map( async (pokemon) => {
                const resultado =  await getPokemonApi(pokemon);
                console.log('pokemon: ', pokemon)
                return resultado;
            })
        )
    } catch(e){
        console.log(e)
    }
};


getPokemon().then();