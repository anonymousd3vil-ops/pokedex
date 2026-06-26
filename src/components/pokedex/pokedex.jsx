import PokemonList from "../pokemonList/pokemonList";
import Search from "../search/search";
import './pokedex.css';

function Pokedex(){
    return(
        <div className="pokedex-wrapper">
            <h1 className="pokedex-heading">Pokedex <span className="author-name">by Vivek</span></h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;