//*IMPORT CSS ET ASSETS//*
import "./Styles/ArticleDetail.css";
import fleche from "../assets/icones/flecheCercle.png";

//*IMPORT REACT//*
import Header from "../components/Client/Header";
import { useContext } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

//*IMPORT CONTEXT//*
import { ArticleContext } from "../context/ArticleContext";

const ArticleDetail = (
  isActive,
  setISActive,
  toggle,
  setIsShowing,
  isShowing,
  ...props
) => {
  const { articles } = useContext(ArticleContext);
  let { id } = useParams();
  let location = useLocation();

  function createMarkup(result) {
    return { __html: `${result}` };
  }
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
                    <Link to="/articlesGrid" className="btnDetail ">
                      <div>{result.nom_categorie}</div>
                    </Link>
                    <img src={fleche} alt="fleche" className="gridArrow" />
                    <Link to="/articlesGrid" className="btnDetail ">
                      <div>{result.nom_sous_categorie}</div>
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
                    {result.lien1 && (
                      <div className="boutonTelechargementDoc">
                        <Link
                          to={`/articlesGrid/articleDetail/${id}/modalDL`}
                          state={{
                            backgroundLocation: location,
                            linkUpload: result.lien1,
                          }}
                        >
                          <button className="buttonGreen">Télécharger</button>
                        </Link>
                      </div>
                    )}
                    <div className="articleDetailPara">
                      <p
                        id="articleDetailPara"
                        dangerouslySetInnerHTML={createMarkup(result.para1)}
                      ></p>
                    </div>
                    {result.lien2 && (
                      <div className="boutonTelechargementDoc">
                        <Link
                          to={`/articlesGrid/articleDetail/${id}/modalDL`}
                          state={{
                            backgroundLocation: location,
                            linkUpload: result.lien2,
                          }}
                          idArticle={result.id}
                        >
                          <button className="buttonGreen">Télécharger</button>
                        </Link>
                      </div>
                    )}
                    <div className="articleDetailPara">
                      <p id="articleDetailPara">{result.avantage}</p>
                    </div>
                    {result.lien3 && (
                      <div className="boutonTelechargementDoc">
                        <Link
                          to={`/articlesGrid/articleDetail/${id}/modalDL`}
                          state={{
                            backgroundLocation: location,
                            linkUpload: result.lien3,
                          }}
                          idArticle={result.id}
                        >
                          <button className="buttonGreen">Télécharger</button>
                        </Link>
                      </div>
                    )}
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
