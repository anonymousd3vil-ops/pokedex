import { useState } from 'react';
import './search.css';
import { CiSearch } from "react-icons/ci";

function Search(){
    const [open, setOpen] = useState(false);

    return(
        <div className={`search-wrapper ${open ? "active" : ""}`}>

            <input 
                className='search-bar'
                id='poke-search-box'
                type="text" 
                placeholder="Search Pokemon"
            />

            <button className="search-btn" onClick={() => setOpen(!open)}>
                <CiSearch className='search-icon'/>
            </button>
        </div>
    );
}

export default Search;