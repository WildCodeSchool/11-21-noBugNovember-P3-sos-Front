import './Styles/Parcours.css'
// import { useState } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import arrow from '../assets/icones/play.png'

const Parcours = () => {
  const { categories } = useContext(CategoriesContext)

  return (
    <div className='snake-bloc'>
      <div className='snake'>
        <button className='parcourBtn orange5 borderRadius'>JEUNESSE</button>
        <button className='parcourBtn orange4 borderRadius'>
          PRÉ-INCUBATION
        </button>
        <button className='parcourBtn orange3 borderRadius'>IDEATION</button>
        <button className='parcourBtn orange2 borderRadius'>AMORÇAGE</button>
        <button className='parcourBtn orange1 borderRadius'>INCUBATION</button>
        <button className='parcourBtn green5 borderRadius'>CRÉATION</button>
        <button className='parcourBtn green4 borderRadius'>
          OUTILS DE GESTION
        </button>
        <button className='parcourBtn green3 borderRadius'>CONCOURS</button>
        <button className='parcourBtn green2 borderRadius'>R&#38;D</button>
        <button className='parcourBtn green borderRadius'>
          LEVÉE DE FONDS
        </button>
        <div className='cache'></div>
        <img className='snakeArrow' src={arrow} alt='arrow' />
      </div>

      <div className='snakeMob'>
        <button className='parcourBtn orange5 borderRadius'>JEUNESSE</button>
        <button className='parcourBtn orange4 borderRadius'>
          PRÉ-INCUBATION
        </button>
        <button className='parcourBtn orange3 borderRadius'>IDEATION</button>
        <button className='parcourBtn orange2 borderRadius'>AMORÇAGE</button>
        <button className='parcourBtn orange1 borderRadius'>INCUBATION</button>
        <button className='parcourBtn green5 borderRadius'>CRÉATION</button>
        <button className='parcourBtn green4 borderRadius'>
          OUTILS DE GESTION
        </button>
        <button className='parcourBtn green3 borderRadius'>CONCOURS</button>
        <button className='parcourBtn green2 borderRadius'>R&#38;D</button>
        <button className='parcourBtn green borderRadius'>
          LEVÉE DE FONDS
        </button>
        <div className='cache'></div>
        <img className='snakeArrow' src={arrow} alt='arrow' />
      </div>
    </div>
  )
}
export default Parcours
