import { ArticleContext } from "../context/ArticleContext";
import Header from "../components/Header";
import { useContext } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Styles/ArticleDetail.css";
import fleche from "../assets/icones/flecheCercle.png";
import ModalDL from "../components/ModalDL";

const ArticleDetail = (
  isActive,
  setISActive,
  toggle,
  setIsShowing,
  isShowing,
  ...props
) => {
  const { articles } = useContext(ArticleContext);
  let location = useLocation();
  let { id } = useParams();
  return (
    <>
      <Header />
      <div className="detailArticlegGreen">
        <div className="stateCatArticlesDet">
          <Link to="/articlesGrid">
            <button className="buttonGreen btn-green-form2">Retour</button>
          </Link>
        </div>
        <div className="articleDetailWrapper">
          {articles
            .filter((el) => el.id === parseInt(id))
            .map((result) => {
              return (
                <>
                  <div className="stateCatArticlesCat">
                    <Link to="/articlesGrid"> 
                      <button className="btnCat ">{result.nom_categorie}</button>
                    </Link>
                    <img src={fleche} alt="fleche" className="gridArrow" />
                    <Link to="/articlesGrid">
                      <button className="btnSousCat ">
                      {result.nom_sous_categorie}
                      </button>
                    </Link>
                  </div>
                  <h2 className="articleTitreH2">{result.titre} </h2>
                  <div className="articleDetailIntro">
                    <p id="articleDetailIntro">{result.intro}</p>
                  </div>
                  <div className="articleDetailImage">
                    <img
                      src={result.image}
                      alt={result.tire}
                      className="articleImage"
                    ></img>
                  </div>
                  <div className="articleDetailFirst">
                    <div className="boutonTelechargementDoc">
                      <Link to="/articlesGrid">
                        <button className="buttonGreen ">Télécharger</button>
                      </Link>
                    </div>
                    <div className="articleDetailPara">
                      <p id="articleDetailPara">{result.para1}</p>
                    </div>
                    <div className="articleDetailPara">
                      <p id="articleDetailPara">{result.avantage}</p>
                    </div>
                    <div className="boutonTelechargementDoc">
                      <Link
                        to={`/articlesGrid/articleDetail/${id}/modalDL`}
                        state={{ backgroundLocation: location }}
                      >
                        <button className="buttonGreen ">Télécharger</button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
