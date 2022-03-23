import './Styles/Parcours.css'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import arrow from '../assets/icones/play.png'

const Parcours = () => {
  const { categories } = useContext(CategoriesContext)
  const { setCategorieChoice } = useContext(ArticleContext)
  const { setCatSousCatChoice } = useContext(ArticleContext)
  const{ filters } = useContext(ArticleContext)

  const handleSlideClick = (id) => {
    setCategorieChoice(id)
    setCat
  }

  return (
    <div className='snake-bloc'>
      <div className='snake'>
        {categories.map((btnSnake) => {
          return (
            <Link to={`/articlesGrid/`} onClick={() => handleSlideClick(btnSnake.id)}className='parcourBtn borderRadius'>
              <div  className=' '>
                {console.log(btnSnake.id)}

                {btnSnake.value}
              </div>
            </Link>
          )
        })}
      </div>

      <div className='snakeMob'>
        {categories.map((btnSnake) => {
          return (
            <Link to={`/articlesGrid/${filters}`} onClick={() => handleSlideClick(btnSnake.id)} className='parcourBtn borderRadius'>
              <div  className=' '>
                {console.log(btnSnake.id)}

                {btnSnake.value}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Parcours
