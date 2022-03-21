import { useRef } from 'react'

const Slide = ({ idArticle, handleSlideClick, idSlide, button }) => {
  let slideContent = useRef()
  let classSlide = 'slide'

  if (idArticle === idSlide) {
    classSlide += ' slide--current'
  } else if (idArticle - 1 === idSlide) {
    classSlide += ' slide--previous'
  } else if (idArticle + 1 === idSlide) {
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
