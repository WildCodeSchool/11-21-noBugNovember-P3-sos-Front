// import { useState } from 'react'
import { useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import Slide from './Slide.js'
import './Styles/CarouselCat.scss'

const Slider = () => {
 
  const {idArticle}=useContext(ArticleContext)
  const {setIdArticle}=useContext(ArticleContext)
  const { categories } = useContext(CategoriesContext)
  const { handleCat } = useContext(ArticleContext)

  const heading = 'Exemple Slider'

  const wrapperTransform = {
    transform: `translateX(-${(idArticle - 1) * (100 / categories.length)}%)`,
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  const handleSlideClick = (id) => {
   
      handleCat(id)
      setIdArticle(id)
    
  }

  return (
    <>
      <div className='slider' aria-labelledby={headingId}>
        <ul className='slider__wrapper' style={wrapperTransform}>
          <h3 id={headingId} className='visuallyhidden'>
            {heading}
          </h3>

          {categories.map((slide) => {
            return (
              <Slide
                key={slide.id}
                idSlide={slide.id}
                slide={categories}
                idArticle={idArticle}
                button={slide.value}
                handleSlideClick={handleSlideClick}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Slider
