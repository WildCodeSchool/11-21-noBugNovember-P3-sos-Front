//*IMPORT CSS//*
import "./Styles/ArticlesGrid.css";

//*IMPORT REACT & CONTEXT//*
import { ArticleContext } from "../context/ArticleContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

//*IMPORT COMPOSANTS //*
import CardArticle from "../components/Client/CardArticle.js";
import Header from "../components/Client/Header.js";
import SearchBar from "../components/Client/SearchBar.js";

import Slider from "../components/Client/Slider";

const ArticlesGrid = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      <Header />
      <div className="articleGridBgGreen">
        <div className="articleGridHolderSearchBar">
          <div className="articleGridSearchBar">
            <Slider />
            <SearchBar
              isVille={true}
              isSousCat={true}
              isCat={false}
              isButtonGrid={true}
            />
          </div>
        </div>
        {articles &&
          articles
            .filter((el) => parseInt(el.visible) === 1)
            .map((result) => {
              return (
                <Link to={`articleDetail/${result.id}`}>
                  <CardArticle
                    key={result.id}
                    id={result.id}
                    titre={result.titre}
                    intro={result.intro}
                    image={result.image}
                    para1={result.para1}
                    nom_ville={result.nom_ville}
                    nom_region={result.nom_region}
                    nom_categorie={result.nom_categorie}
                    nom_sous_categorie={result.nom_sous_categorie}
                    nom_secteur={result.nom_secteur}
                  />
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default ArticlesGrid;
