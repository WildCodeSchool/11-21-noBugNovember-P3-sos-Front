import { useEffect, useRef } from "react";

const Slide = ({ idCategorie, handleSlideClick, idSlide, button, setIdCategorie }) => {
  let slideContent = useRef();
  let classSlide = "slide";

    if (idCategorie === idSlide) {
      classSlide += " slide--current";
    } else if (idCategorie - 1 === idSlide) {
      classSlide += " slide--previous";
    } else if (idCategorie + 1 === idSlide) {
      classSlide += " slide--next";
    }


  return (
    <>
      <li
        ref={slideContent}
        className={classSlide}
        onClick={() => setIdCategorie(idSlide)}
      >
        <article className="slide__content">
          <button className="slide__headline borderRadius">{button}</button>
        </article>
      </li>
    </>
  );
};

export default Slide;
