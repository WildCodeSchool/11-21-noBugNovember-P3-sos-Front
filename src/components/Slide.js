import { useRef, useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'

const Slide = ({ indexImg, handleSlideClick, idSlide, button }) => {
  let slideContent = useRef()
  let classSlide = 'slide'

  if (indexImg === idSlide) {
    classSlide += ' slide--current'
  } else if (indexImg - 1 === idSlide) {
    classSlide += ' slide--previous'
  } else if (indexImg + 1 === idSlide) {
    classSlide += ' slide--next'
  }

  return (
    <>
      <li
        ref={slideContent}
        className={classSlide}
        onClick={() => handleSlideClick(idSlide)}
        // onMouseMove={(e) => handleMouseMove(e)}
        // onMouseLeave={(e) => handleMouseLeave(e)}
      >
        {/* <div className='slide__image-wrapper'>
          <img className='slide__image' alt={headline} src={src} />
        </div> */}

        <article className='slide__content'>
          <button className='slide__headline borderRadius'>{button}</button>
          {/* <button className='slide__action btn'></button> */}
        </article>
      </li>
    </>
  )
}

export default Slide
