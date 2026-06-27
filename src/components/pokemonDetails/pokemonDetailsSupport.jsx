import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/loading";
import './pokemonDetailsSupport.css';
import { Link } from "react-router-dom";

function PokemonDetailsSupport({id}){
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({})

    const pokeDetailUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    async function downloadDetailsOfPokemon(){
        setIsLoading(true);
        const response = await axios.get(pokeDetailUrl);
        console.log(response.data);

        const res = {
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        }

        setPokemon(res);
        setIsLoading(false);
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        downloadDetailsOfPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <Link to={`/pokemon/${id}`} className="pokemon-side-card">
        
            <div className="side-wrapper">
                <div className="poke-name poke-attributes-side"><span className="attributeName">Name:</span> {pokemon.name}</div>
                <div className="poke-image poke-attributes-side"><img src={pokemon.image} alt={`Picture of ${pokemon.name}`} /></div>
                <div className="poke-weight poke-attributes-side"> <span className="attributeName">Weight:</span> {pokemon.weight} </div>
                <div className="poke-height poke-attributes-side"> <span className="attributeName">Height:</span> {pokemon.height} </div>
                <div className="poke-type poke-attributes-side">
                    <span className="attributeName" >Type:</span>
                    {
                        (isLoading) ? <Loading />  : pokemon.types.map((t) => (<div key={t}>{t}</div>))
                    }
                </div>
                
            </div>
        </Link>
    );
}

export default PokemonDetailsSupport;