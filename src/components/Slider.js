import { useState } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import Slide from './Slide.js'
import SliderControl from './SliderControl.js'
import './Styles/CarouselCat.scss'

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0)

  const { categories } = useContext(CategoriesContext)
  console.log('index', categories)

  console.log('length', categories.length)
  const heading = 'Exemple Slider'
  console.log('initial', indexImg)

  const wrapperTransform = {
    transform: `translateX(-${indexImg * (100 / categories.length)}%)`,
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`

  const handlePreviousClick = () => {
    console.log('handleClick', indexImg)
    const previous = indexImg - 1
    setIndexImg(previous < 0 ? categories.length - 1 : previous)
  }

  const handleNextClick = () => {
    console.log('handleNextClick', indexImg)
    const next = indexImg + 1
    setIndexImg(next === categories.length ? 0 : next)
  }

  const handleSlideClick = (id_categorie) => {
    console.log('handleSlideClick', id_categorie)
    if (indexImg !== id_categorie) {
      setIndexImg(id_categorie)
    }
  }

  return (
    <>
      {/* <button onClick={() => console.log(indexImg)}>CLICK</button> */}
      <div className='slider' aria-labelledby={headingId}>
        <ul className='slider__wrapper' style={wrapperTransform}>
          <h3 id={headingId} className='visuallyhidden'>
            {heading}
          </h3>

          {categories.map((slide) => {
            return (
              <Slide
                key={slide.id_categorie}
                idSlide={slide.id_categorie}
                slide={categories} // bug ?
                indexImg={indexImg}
                // src={slide.src}
                button={slide.nom_categorie}
                // headline={slide.headline}
                handleSlideClick={handleSlideClick}
              />
            )
          })}
        </ul>

        <div className='slider__controls'>
          <SliderControl
            type='previous'
            title='Go to previous slide'
            handleClick={() => handlePreviousClick()}
          />

          <SliderControl
            type='next'
            title='Go to next slide'
            handleClick={() => handleNextClick()}
          />
        </div>
      </div>
    </>
  )
}

export default Slider
