
import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
import { CategoriesContext } from "../context/CategoriesContext";
import Slide from "./Slide.js";
import "./Styles/CarouselCat.scss";
import { SousCategoriesContext } from "../context/SousCategoriesContext";

const Slider = () => {
  const { categories } = useContext(CategoriesContext);
  const { idCategorie } = useContext(ArticleContext);
  const { setIdCategorie } = useContext(ArticleContext);
  const {sousCatSet}=useContext(SousCategoriesContext)

  const heading = "Exemple Slider";

  const wrapperTransform = {
    transform: `translateX(-${(idCategorie - 1) * (100 / categories.length)}%)`,
  };

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  // const handleSlideClick = (id) => {
  //   if (idArticle !== id) {
  //       setIdArticle(id)
  //   }
  // }

  return (
    <>
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>

          {categories && categories.map((slide) => {
            return (
              <Slide
                key={slide.id}
                idSlide={slide.id}
                slide={categories}
                idCategorie={idCategorie}
                setIdCategorie={setIdCategorie}
                button={slide.value}
                sousCatSet={sousCatSet}
                // handleSlideClick={handleSlideClick}s
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Slider;
