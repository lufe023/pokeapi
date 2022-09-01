import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPokemon from './StatPokemon'
import {useNavigate} from 'react-router-dom'

const PokemonCard = ({url,currentPosts}) => {

    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect(() => {
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
    }, [])
    const clase = pokemon?.types[0].type.name

const handleClick = ()=> navigate(`/pokedex/${pokemon.name}`)
    return (
    <article className={`Pokecard br__${clase}`}>

        <header className={`bg__${clase}`}>
            <img  onClick={handleClick} className='pokemonImg' src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt=''/>
        </header>
        <div className='card_info_container'>
        <section  className='cardBody'>
            <h3  onClick={handleClick}>{pokemon?.name}</h3>
            
            <ul>
            {pokemon?.types.map(slot=>(
                <li key={slot.type.url}>
                {`${slot.type.name}  `}
                </li> 
            ))
            }
            </ul>
        </section >
        <footer  className='pokeInfo'>
            <ul>
        {pokemon?.stats.map(stat=>(
                <StatPokemon
                key={stat.stat.url}
                infoStat = {stat}
                />
            ))
            }
            </ul>
        </footer>
        </div>
    </article>
    )
}

export default PokemonCard