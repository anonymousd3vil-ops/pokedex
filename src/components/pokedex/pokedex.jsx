import PokemonList from "../pokemonList/pokemonList";
import './pokedex.css';

function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <PokemonList />
        </div>
    )
}

export default Pokedex;