import { useRef } from 'react'
// import './Styles/Parcours.css'

const Slide = ({
  idCategorie,
  idSlide,
  button,
  setIdCategorie,
  sousCatSet,
}) => {
  let slideContent = useRef(null)
  let classSlide = 'slide'

  if (parseInt(idCategorie) === parseInt(idSlide)) {
    classSlide += ' slide--current'
  } else if (parseInt(idCategorie) + 1 === parseInt(idSlide)) {
    classSlide += ' slide--next'
  } else if (parseInt(idCategorie) - 1 === parseInt(idSlide)) {
    classSlide += ' slide--previous'
  }

  return (
    <>
      {idSlide && (
        <li
          ref={slideContent}
          className={classSlide}
          onClick={() => {
            setIdCategorie(idSlide)
          }}
        >
          <article className='slide__content'>
            <button className='slide__headline borderRadius'>{button}</button>
          </article>
        </li>
      )}
    </>
  )
}

export default Slide
