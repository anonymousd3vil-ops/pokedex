import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../pokemon/pokemon";
import './pokemonList.css';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Loading from "../loading/loading";


function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] =  useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');

    async function downloadPokemons() {
        setIsLoading(true);
        const response = await axios.get(pokedexUrl); //this donwloads the list of first 20 pokemons

        console.log(response);

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonResults = response.data.results; // array of pokemons from results it have name and url

        const pokemonResultPromise = pokemonResults.map((pokemon) =>  axios.get(pokemon.url)); //itrating over results and using thier url to create promises that will download those 20 pokemons

        const pokemonsData =  await axios.all(pokemonResultPromise); //passing all the promises to axios.all
        //pokemon data consist array of all details of pokemons

        // console.log(pokemonsData);  
        const res = pokemonsData.map((pokemonData) => {  //itrating over all data and parsing only required data and storing in res
            const pokemon = pokemonData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })
        // console.log(res);
        setPokemonList(res);
        setIsLoading(false);

        // console.log(res);
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        downloadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokedexUrl]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-list-heading">Initial Pokemon List</div>
            <div className="pokemon-list">
                {(isLoading) ? <Loading /> : 
                    pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)    
                }
            </div>
            <div className="controlls">
                <button className="controll-button" disabled={prevUrl==null} onClick={() => setPokedexUrl(prevUrl)}><GrLinkPrevious /></button>
                <button className="controll-button" disabled={nextUrl==null} onClick={() => setPokedexUrl(nextUrl)}><GrLinkNext /></button>
            </div>
        </div>
    )
}

export default PokemonList;