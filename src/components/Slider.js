import "./Styles/Slider.scss";

import Slide from "./Slide.js";
import { useContext } from "react";

import { ArticleContext } from "../context/ArticleContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";

const Slider = () => {
  const { categories } = useContext(CategoriesContext);
  const { idCategorie } = useContext(ArticleContext);
  const { setIdCategorie } = useContext(ArticleContext);
  // const {sousCatSet}=useContext(SousCategoriesContext)

  const heading = "Exemple Slider";

  const wrapperTransform = {
    transform: `translateX(-${(idCategorie - 1) * (100 / categories.length)}%)`,
  };

  return (
    <>
      <div className="slider">
        {console.log("abdou", categories)}
        <ul className="slider__wrapper" >
          {categories &&
            categories.map((slide) => {
              return (
                <Slide
                  key={slide.id}
                  idSlide={slide.id}
                  slide={categories}
                  idCategorie={idCategorie}
                  setIdCategorie={setIdCategorie}
                  button={slide.value}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Slider;
