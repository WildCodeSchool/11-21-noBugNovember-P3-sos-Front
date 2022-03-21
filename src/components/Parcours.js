import './Styles/Parcours.css'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import arrow from '../assets/icones/play.png'

const Parcours = () => {
  const { categories } = useContext(CategoriesContext)
  const { handleCat } = useContext(ArticleContext)
  const { setIdArticle } = useContext(ArticleContext)

  const handleSlideClick = (id) => {
    handleCat(id)
    setIdArticle(id)
  }

  return (
    <div className='snake-bloc'>
      <div className='snake'>
        {categories.map((btnSnake) => {
          return (
            <Link to={`/articlesGrid`} className='parcourBtn borderRadius'>
              <div onClick={() => handleSlideClick(btnSnake.id)} className=' '>
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
            <Link to={`/articlesGrid`} className='parcourBtn borderRadius'>
              <div onClick={() => handleSlideClick(btnSnake.id)} className=' '>
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
