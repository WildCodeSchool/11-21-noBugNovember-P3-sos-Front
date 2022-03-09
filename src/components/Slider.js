import { useState } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import Slide from './Slide.js'
import SliderControl from './SliderControl.js'
import './Styles/CarouselCat.scss'

// export const categories = [
//   {
//     id: 0,
//     headline: 'New Fashion Apparel',
//     button: 'Shop now',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
//   },
//   {
//     id: 1,
//     headline: 'In The Wilderness',
//     button: 'Book travel',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
//   },
//   {
//     id: 2,
//     headline: 'For Your Current Mood',
//     button: 'Listen',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
//   },
//   {
//     id: 3,
//     headline: 'Focus On The Writing',
//     button: 'Get Focused',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
//   },
// ]

const Slider = () => {
  const [indexImg, setIndexImg] = useState(0)

  const { categories } = useContext(CategoriesContext)

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
    // WORK
    console.log('handleClick', indexImg)

    const previous = indexImg - 1
    setIndexImg(previous < 0 ? categories.length - 1 : previous) // bug
  }

  const handleNextClick = () => {
    // WORK
    console.log('handleNextClick', indexImg)
    const next = indexImg + 1
    setIndexImg(next === categories.length ? 0 : next) // bug
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
