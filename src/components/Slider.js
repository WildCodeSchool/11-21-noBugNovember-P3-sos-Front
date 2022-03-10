import { useState } from 'react'
import { useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import Slide from './Slide.js'
import './Styles/CarouselCat.scss'

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0)

  const { categories } = useContext(CategoriesContext)
  const { handleCat } = useContext(ArticleContext)

  const heading = 'Exemple Slider'

  const wrapperTransform = {
    transform: `translateX(-${(indexImg - 1) * (100 / categories.length)}%)`,
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  const handleSlideClick = (id) => {
    if (indexImg !== id) {
      handleCat(id)
      setIndexImg(id)
    }
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
                indexImg={indexImg}
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
