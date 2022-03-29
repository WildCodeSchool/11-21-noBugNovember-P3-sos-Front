import './Styles/Parcours.css'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { SousCategoriesContext } from '../context/SousCategoriesContext'

const Parcours = () => {
  const { categories } = useContext(CategoriesContext)
  const { setIdCategorie } = useContext(ArticleContext)

  return (
    <div className='snake-bloc'>
      <div className='snake'>
        {categories.map((btnSnake) => {
          return (
            <Link
              to={`/articlesGrid`}
              onClick={() => {
                setIdCategorie(btnSnake.id)
              }}
              className='parcourBtn borderRadius'
            >
              <div className=' '>{btnSnake.value}</div>
            </Link>
          )
        })}
      </div>

      <div className='snakeMob'>
        {categories.map((btnSnake) => {
          return (
            <Link to={`/articlesGrid`} className='parcourBtn borderRadius'>
              <div onClick={() => setIdCategorie(btnSnake.id)} className=' '>
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
