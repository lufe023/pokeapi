import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import '../styles/Home.css'
import Footer from './Footer'
const Home = () => {
const [pikashu, setPikashut] = useState("none")

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue.length!==0){
    dispatch(setNameTrainer(inputValue))
  
      navigate('./pokedex')
  }else{
    setPikashut("flex")
  }

  e.target.name.value = ''
  
  }
console.log(pikashu)
  const background = {
    'backgroundImage': 'url(./AllPokemon.jpg)'
  }

  const mostrar =  {
    display: pikashu
  }
  return (
    <div>
    <div className='welcome' style={background}>
      <div className='home_dialog'>
        <img className='poketitle' src='./pokedex.svg'/>
        <div className='form'>
      <h1 className='hellotrainer'>Hello Trainer!</h1>
      <p className='nameNeeded'  style={mostrar}>I need your name to continues
      <img className="pickashu" src='./pikashu.gif'/>
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <input id='name' className='inputName formInputs' type="text" placeholder='To start give me your name'/>
        <button className='catchThem formInputs'>Catch them all</button>
        </form>
        </div>
        <div>
        </div>
      
      </div> 
     
      <img className='ash' src='./Ash.png'/>

    </div>
    <Footer/>
    </div>
  )
}

export default Home