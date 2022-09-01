import React from 'react'

const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const pageNumbers = []

    for(let i =1; i<=Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    }
    
  return (
    <nav>
        <h1>Hola mundo</h1>
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                   <button onClick={()=>paginate(number)}>{number}</button> 
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination