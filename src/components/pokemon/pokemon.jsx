import './pokemon.css'

function Pokemon({name, image}){
    return (
        <div className="pokemon">
            <div className='pokemon-name'>{name}</div>
            <div>
                <img className='pokemon-img' src={image} alt={`This is ${name}`} />
            </div>
        </div>
    )
}

export default Pokemon;