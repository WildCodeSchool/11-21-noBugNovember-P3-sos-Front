import "./Styles/Adminsidebar.css";
import logo from "../../assets/logoW.png";
import { Link } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
import { useContext } from "react";

function Adminsidebar() {
  const { setIdCategorie } = useContext(ArticleContext);
  return (
    <div>
      <div className="side-bar">
        <Link to="/">
          <img className="logo-panel" src={logo} alt="logo panel" />
        </Link>
        <div className="bloc-link-side-bar">
          <Link to="articleForm" onClick={() => setIdCategorie("")}>
            Publier un article
          </Link>
          <Link to="articles" onClick={() => setIdCategorie("")}>
            Les articles
          </Link>
          <Link to="categories" onClick={() => setIdCategorie("")}>
            Les catégories
          </Link>
          <Link to="sousCategories" onClick={() => setIdCategorie("")}>
            Les sous-catégories
          </Link>
          <Link to="secteurs" onClick={() => setIdCategorie("")}>
            Les secteurs
          </Link>
          <Link to="villes" onClick={() => setIdCategorie("")}>
            Les villes
          </Link>
          <Link to="donnes" onClick={() => setIdCategorie("")}>
            Les données
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Adminsidebar;
