import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'

import { useContext } from 'react'
import Slide from './Slide.js'

import './Styles/Slider.scss'

const Slider = () => {
  const { categories } = useContext(CategoriesContext)
  const { idCategorie } = useContext(ArticleContext)
  const { setIdCategorie } = useContext(ArticleContext)

  return (
    <>
      <div className='slider'>
        <ul className='slider__wrapper'>
          {categories &&
            categories.map((slide) => {
              return (
                <Slide
                  key={slide.id}
                  idSlide={slide.id}
                  slide={categories}
                  idCategorie={idCategorie}
                  setIdCategorie={setIdCategorie}
                  button={slide.value}
                />
              )
            })}
        </ul>
      </div>
    </>
  )
}

export default Slider
