import "./Styles/ArticlesGrid.css";
import Header from "../components/Header.js";
import CardArticle from "../components/CardArticle.js";
import SearchBar from "../components/SearchBar.js";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Articles() {
  const [results, setResults] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
  };

  useEffect(() => {
    axios.get("http://localhost:4242/articles").then((response) => {
      setResults(response.data);

      console.log(results);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="articleGridBgGreen">
        <div className="articleGridHolderSearchBar">
          <div className="articleGridSearchBar">
            <SearchBar />
          </div>
        </div>
        <div className="holderSlider">
          <Slider {...settings}>
            <div>
              <button>Test1</button>
            </div>
            <div>
              <button>Test2</button>
            </div>
            <div>
              <button>Test3</button>
            </div>
            <div>
              <button>Test4</button>
            </div>
            <div>
              <button>Test5</button>
            </div>
            <div>
              <button>Test6</button>
            </div>
            <div>
              <button>Test7</button>
            </div>
          </Slider>
        </div>
        {results.map((result, id) => {
          return (
            <CardArticle
              key={id}
              id={id}
              titre={result.titre}
              intro={result.intro}
              image={result.image}
              para1={result.para1}
              para2={result.para2}
              para3={result.para3}
              nom_ville={result.nom_ville}
              nom_region={result.nom_region}
              nom_categorie={result.nom_categorie}
              nom_sous_categorie={result.nom_sous_categorie}
              nom_secteur={result.nom_secteur}
            />
          );
        })}
      </div>
    </>
  );
}

export default Articles;
