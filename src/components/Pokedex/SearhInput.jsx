import React from 'react'

const SearhInput = ({setPokeSearch}) => {

    const handleSubmit = e => {
        e.preventDefault()
        setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    }

    const back = e => {
        e.preventDefault()
        setPokeSearch()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input id='searchText' type='text' className='searchText' placeholder='Search pokemon'/>
        
        <button className='btn btn_search'>Search</button>
        <button className='btn btn_back' onClick={back}>Back</button>
    </form>
  )
}

export default SearhInput