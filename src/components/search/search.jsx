import { useState } from 'react';
import './search.css';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Search(){
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    function handleSearch(e){
        e.preventDefault();

        if(!open){
            setOpen(true);
            return;
        }

        const pokemonName = searchTerm.trim().toLowerCase();

        if(pokemonName){
            navigate(`/pokemon/${pokemonName}`);
            setSearchTerm('');
        }
    }

    return(
        <form className={`search-wrapper ${open ? "active" : ""}`} onSubmit={handleSearch}>

            <input 
                className='search-bar'
                id='poke-search-box'
                type="text" 
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="search-btn" type="submit">
                <CiSearch className='search-icon'/>
            </button>
        </form>
    );
}

export default Search;
