import {  useRef } from "react";

const Slide = ({ categorieChoice, setCategorieChoice, idSlide, button, }) => {
  let slideContent = useRef();
  let classSlide = "slide";

    if (categorieChoice === idSlide) {
      classSlide += " slide--current";
    } else if (categorieChoice - 1 === idSlide) {
      classSlide += " slide--previous";
    } else if (categorieChoice + 1 === idSlide) {
      classSlide += " slide--next";
    }


  return (
    <>
      <li
        ref={slideContent}
        className={classSlide}
        onClick={() => setCategorieChoice(idSlide)}
      >
        <article className="slide__content">
          <button className="slide__headline borderRadius">{button}</button>
        </article>
      </li>
    </>
  );
};

export default Slide;
