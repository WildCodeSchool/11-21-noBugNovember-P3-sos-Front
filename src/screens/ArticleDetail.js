import { ArticleContext } from "../context/ArticleContext";
import Header from "../components/Header";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./Styles/ArticleDetail.css";

const ArticleDetail = () => {
  const { articles } = useContext(ArticleContext);
  let { id } = useParams();
  return (
    <>
      <Header />
      <div className="detailArticlegGreen">
        <div className="articleDetailWrapper">
          {articles
            .filter((el) => el.id === parseInt(id))
            .map((result) => {
              return (
                <>
                  <div className="returnButton">
                    <Link to="/articlesGrid">
                      <button>Retour</button>
                    </Link>
                  </div>
                  <div className="articleDetailTitre">
                    <h2>{result.titre} </h2>
                  </div>
                  <div className="articleDetailFirst">
                    <div className="articleDetailImage">
                      <img src={result.image} alt={result.tire}></img>
                    </div>
                    <div className="articleDetailIntro">
                      <p id="articleDetailIntro">{result.intro}</p>
                    </div>
                  </div>
                  <div className="articleDetailPara">
                    <p id="articleDetailPara">{result.para1}</p>
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
