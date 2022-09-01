import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footerContainer footerA">
            <ul className="footerList">
                <h3>Credit to</h3>
                <li><a target="blank" href="https://pokeapi.co/">Poke Api</a></li>
                <li><a target="blank" href="https://git-scm.com/">Git</a></li>
                <li><a target="blank" href="https://github.com/">Github</a></li>
                <li><a target="blank" href="https://Netlify.com/">Netlify</a></li>
                
                <li><a target="blank" href="https://fonts.google.com/">Google Fonts</a></li>
            </ul>
            <ul className="footerList">
                <h3>Used Technologies</h3>
                <li><a href="#">HTML</a></li>
                <li><a href="#">JSX</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">CSS</a></li>
                
                <h3>Author</h3>
                
                <li><a href="https://github.com/lufe023">Portafolio GitHub</a></li>
                <li><a href="mailto:lufe023@gmail.com">lufe023@gmail.com</a></li>
            </ul>


        </div>

        <div className="footerContainer footerB">
            <h3>Project Datails</h3>
            <p>This app based in React JS was realized by <a target="blank" href="https://www.linkedin.com/in/luis-fernando-g%C3%B3mez-mateo-156443209/">Luis Fernando Gómez</a> as a task for the Teacher <a target="blank" href="https://www.linkedin.com/in/benjamin-flores-48541182/">Benjamin Flores</a>. it was an important requirement for <a target="blank" href="https://www.academlo.com/">Academlo</a>.
            </p>
          
            
            <ul>
            <h4>Features</h4>
                <li>Protected Routes</li>
                <li>Pikashu need your name to start</li>
                <li>List from all pokemons</li>
                <li>beautiful scroll according to the theme</li>
                <li>Responsive</li>
                </ul>
        </div>


    </div>
  )
}

export default Footer