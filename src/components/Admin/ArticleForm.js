//*IMPORT CSS ET ASSETS//*
import "./Styles/ArticleForm.css";

//*IMPORT REACT//*
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TinyArticle from "./TinyArticle";
import Select, { StylesConfig } from "react-select";

//*IMPORT COMPONENTS//*
import BouttonPublier from "./BouttonPublier";

//*IMPORT CONTEXT//*
import { ArticleContext } from "../../context/ArticleContext";
import { CategoriesContext } from "../../context/CategoriesContext";
import { SecteursContext } from "../../context/SecteursContext";
import { SousCategoriesContext } from "../../context/SousCategoriesContext";
import { VillesContext } from "../../context/VillesContext";

// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "20vw",
    padding: ".5rem",
    //  height: "5rem" FOU LE BORDEL
  }),
};
const ArticleForm = () => {
  //Rappel des Context
  const { setIdCategorie, reloadArticle, setReloadArticle } =
    useContext(ArticleContext);
  const { secteurs } = useContext(SecteursContext);
  const { sousCategories } = useContext(SousCategoriesContext);
  const { categories } = useContext(CategoriesContext);
  const { villes } = useContext(VillesContext);

  let navigate = useNavigate();

  //Création state ajour article avec valeurs pas défault
  const [article, setArticle] = useState({ visible: false, user_id: 1 });

  const ajoutDatas = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/articles`, {
        ...article,
      })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .then(() => setReloadArticle(!reloadArticle))
      .catch((error) => console.error("---Erreur envoi article--- ", error));
    navigate(-1);
    setIdCategorie("");
  };

  //Ajout des infos dans la state
  const handleChange = (e, name, select) => {
    if (select) {
      let extractedValue = [];
      for (let i = 0; i < e.length; i++) {
        extractedValue.push(e[i].id);
      }
      setArticle({
        ...article,
        [name]: extractedValue,
      });
    } else if (name) {
      setArticle({
        ...article,
        [name]: e,
      });
    } else {
      setArticle({
        ...article,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Modifier l'Id de la catégorie pour avoir les sous Cat en fonction
  const handleChangeCategorie = (value) => {
    const { id } = value;
    setIdCategorie(id);
  };

  return (
    <>
      <h2 className="bjr-user">Bonjour [userName],</h2>
      <div className="articles-and-types">
        {/* BLOC DE GAUCHE = ARTICLE */}
        <form className="bloc-content-row">
          <div className="bloc-article">
            <h3 className="titreMenu">Nouvel article</h3>

            <div className="article-form">
              <input
                className="input-article-title"
                placeholder="Titre de l'article"
                name="titre"
                onChange={(e) => handleChange(e)}
              />
              <input
                className="input-article-intro"
                placeholder="Intro de l'article"
                name="intro"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="Url de l'image"
                type="url"
                name="image"
                onChange={(e) => handleChange(e)}
              />

              <TinyArticle setArticleContent={handleChange} />

              <input
                className="input-article-intro"
                placeholder="Texte présentant les avantages de l'article"
                name="avantage"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="URL du lien à télécharger N°1"
                onChange={(e) => handleChange(e)}
                name="lien1"
              />
              <input
                placeholder="URL du lien à télécharger N°2"
                onChange={(e) => handleChange(e)}
                name="lien2"
              />
              <input
                placeholder="URL du lien à télécharger N°3"
                onChange={(e) => handleChange(e)}
                name="lien3"
              />
            </div>
          </div>

          <div className="types-articles">
            <h3 className="titreMenu">Type d'article</h3>
            <div className="bloc-deroulant-publier">
              <div className="drop-down-type">
                <div className="selectDiv">
                  <Select
                    placeholder="Choix de la catégorie"
                    options={categories}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeCategorie(value)}
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(228, 144, 114, 0.659)",
                        primary: "rgba(228, 144, 114, 0.659)",
                      },
                    })}
                  />
                </div>

                <div className="selectDiv">
                  <Select
                    isMulti
                    placeholder="Choix de sous-catégorie(s)"
                    options={sousCategories}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) =>
                      handleChange(value, "sous_categorie_id", true)
                    }
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(228, 144, 114, 0.659)",
                        primary: "rgba(228, 144, 114, 0.659)",
                      },
                    })}
                  />
                </div>
                <div className="selectDiv">
                  <Select
                    isMulti
                    placeholder="Choix de secteur(s)"
                    options={secteurs}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) =>
                      handleChange(value, "secteur_id", true)
                    }
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(228, 144, 114, 0.659)",
                        primary: "rgba(228, 144, 114, 0.659)",
                      },
                    })}
                  />
                </div>
                <div className="selectDiv">
                  <Select
                    isMulti
                    placeholder="Choix de ville(s)"
                    options={villes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChange(value, "ville_id", true)}
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "rgba(228, 144, 114, 0.659)",
                        primary: "rgba(228, 144, 114, 0.659)",
                      },
                    })}
                  />
                </div>
                <div className="publishButton">
                  <BouttonPublier
                    article={article}
                    collectDatas={ajoutDatas}
                    type={"Publier"}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ArticleForm;
