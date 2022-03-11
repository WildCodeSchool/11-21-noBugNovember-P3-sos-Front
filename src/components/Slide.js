import { useRef } from 'react'

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
      >
        <article className='slide__content'>
          <button className='slide__headline borderRadius'>{button}</button>
        </article>
      </li>
    </>
  )
}

export default Slide
