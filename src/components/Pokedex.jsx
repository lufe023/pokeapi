import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearhInput from './Pokedex/SearhInput'
import SelectType from './Pokedex/SelectType'
import HeaderPoke from './shared/HeaderPoke'
import Pagination from './Pagination'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType ] = useState('All')
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage ] = useState(1)
  const [postPerPage, setPostPerPage] = useState(100)



  useEffect(() => {
    if(optionType !== 'All'){
      // here the condition when user select pokemons types
      const URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results: arr})
          
        })
        .catch(err => console.log(err))
    } else if(pokeSearch){
      // here the condition when user select pokemons by input text
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else {
      // here is the first to charge
      const x = postPerPage
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=${postPerPage}&offset=${currentPage}`
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, optionType])


  const nameTrainer = useSelector(state => state.nameTrainer)

const indexOfLastPost = currentPage * postPerPage
const indexOfFirstPost = indexOfLastPost - postPerPage
const totalPosts = pokemons?.length

const currentPosts = [pokemons?.results].slice(indexOfFirstPost, indexOfLastPost)

const paginate = pageNumber => setCurrentPage(pageNumber)
console.log(currentPage)
  return (
    <div>
      <HeaderPoke/>
      <div className='searchArea'>
      <h2 className='welcomeName'>Welcome <span>{nameTrainer},</span> Catch them all!</h2>
      <div className='formArea'>
      <SearhInput setPokeSearch={setPokeSearch}/>
      <SelectType setOptionType={setOptionType}/>
      </div>
      </div>
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard
            key ={pokemon.url}
            url = {pokemon.url}
            currentPosts ={currentPosts}
            />
            
          ))
        }
        <Pagination 
          postPerPage={postPerPage}
          totalPosts={pokemons?.results.length}
          paginate={paginate}/>
      </div>
    
    </div>
  )
}

export default Pokedex