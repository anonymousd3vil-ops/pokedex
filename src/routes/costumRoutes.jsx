import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/pokemonDetails/pokemonDetails";

function CostomRoutes(){
    return (
        <Routes>
            <Route path="/" element= {<Pokedex />} />
            <Route path="/pokemon/:id"  element={ <PokemonDetails />} />
        </Routes>
    );
}
export default CostomRoutes;