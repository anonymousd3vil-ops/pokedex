import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/loading";
import './pokemonDetails.css';
import PokemonDetailsSupport from "./pokemonDetailsSupport";

function PokemonDetails(){
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})
    // console.log(id);

    const pokeDetailUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    async function downloadDetailsOfPokemon(){
        setIsLoading(true);
        setError(false);

        try {
            const response = await axios.get(pokeDetailUrl);
            console.log(response.data);

            const res = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name)
            }

            setPokemon(res);
        } catch {
            setPokemon({});
            setError(true);
        }

        setIsLoading(false);
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        downloadDetailsOfPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const currentPokemonId = Number(pokemon.id);
    const prevId = currentPokemonId > 1 ? currentPokemonId - 1 : null;
    const nextId = currentPokemonId ? currentPokemonId + 1 : null;

    if(error){
        return (
            <div className="main-wrapper">
                <div className="pokemon-attribute-wrapper">
                    <div className="poke-name poke-attributes">Pokemon doesnot existsOr Check the Spelling</div>
                </div>
            </div>
        );
    }

    return (
        <div className="main-wrapper">
            {
                prevId && <div className="left-side-wrapper"><PokemonDetailsSupport id={prevId} /></div>
            }
            
            <div className="pokemon-attribute-wrapper">
                <div className="poke-name poke-attributes"><span className="attributeName">Name:</span> {pokemon.name}</div>
                <div className="poke-image poke-attributes"><img src={pokemon.image} alt={`Picture of ${pokemon.name}`} /></div>
                <div className="poke-weight poke-attributes"> <span className="attributeName">Weight:</span> {pokemon.weight} </div>
                <div className="poke-height poke-attributes"> <span className="attributeName">Height:</span> {pokemon.height} </div>
                <div className="poke-type poke-attributes">
                    <span className="attributeName" >Type:</span>
                    {
                        (isLoading) ? <Loading />  : pokemon.types.map((t) => (<div key={t}>{t}</div>))
                    }
                </div>
            </div> 
            {
                nextId && <div className="right-side-wrapper"><PokemonDetailsSupport id={nextId} /></div>
            }
        </div>
    );
}

export default PokemonDetails;
