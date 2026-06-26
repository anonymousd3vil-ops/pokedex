import './search.css';

function Search(){
    return(
        <div className='search-wrapper'>

            <input 
                className='search-bar'
                id='poke-search-box'
                type="text" 
                placeholder="Search Pokemon"
            />
        
        </div>
    );
}

export default Search;