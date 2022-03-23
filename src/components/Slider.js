// import { useState } from 'react'
import { useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import Slide from './Slide.js'
import './Styles/CarouselCat.scss'

const Slider = () => {
  const { categories } = useContext(CategoriesContext)
  const { categorieChoice } = useContext(ArticleContext)
  const { setCategorieChoice } = useContext(ArticleContext)
  
  

  const heading = 'Exemple Slider'

  const wrapperTransform = {
    transform: `translateX(-${(categorieChoice -1 ) * (100 / categories.length)}%)`,
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  

  return (
    <>
      <div className='slider' aria-labelledby={headingId}>
        <ul className='slider__wrapper' style={wrapperTransform}>
          <h3 id={headingId} className='visuallyhidden'>
            {heading}
          </h3>

          {categories && categories.map((slide) => {
            return (
              <Slide
                key={slide.id}
                idSlide={slide.id}
                slide={categories}
                categorieChoice={categorieChoice}
                button={slide.value}
                setCategorieChoice={setCategorieChoice}
                
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Slider
