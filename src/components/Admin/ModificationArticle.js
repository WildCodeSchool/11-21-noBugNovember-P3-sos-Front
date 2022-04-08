//*IMPORT CSS ET ASSETS//*
import "./Styles/ArticleForm.css";

//*IMPORT REACT//*
import axios from "axios";
import { useState, useEffect, useContext } from "react";
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
  }),
};
const ModificationArticle = ({ modifyId }) => {
  //Rappel des Context
  const { idCategorie, setIdCategorie, reloadArticle, setReloadArticle } =
    useContext(ArticleContext);
  const { secteurs } = useContext(SecteursContext);
  const { sousCategories } = useContext(SousCategoriesContext);
  const { categories } = useContext(CategoriesContext);
  const { villes } = useContext(VillesContext);

  let navigate = useNavigate();

  //  Fonction pour modifier les données
  const modifDatas = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:${process.env.REACT_APP_PORT}/articles/${modifyId}`,
        { ...article }
      )
      .then((response) => console.log("RESPONSE REQUETE", response))
      .then(() => setReloadArticle(!reloadArticle));
    navigate(-1);
    setIdCategorie("");
  };

  // Modifier l'Id de la catégorie pour avoir les sous Cat en fonction
  const handleChangeCategorie = (value) => {
    const { id } = value;
    setIdCategorie(id);
  };

  //States pour les select
  const [villesPara, setVillesPara] = useState();
  const [sousCatPara, setSousCatPara] = useState();
  const [secteursPara, setSecteursPara] = useState();

  // Récuperer les données
  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_PORT}/articles/villes/${modifyId}`
      )
      .then((response) => setVillesPara(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_PORT}/articles/sousCat/${modifyId}`
      )
      .then((response) => setSousCatPara(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_PORT}/articles/secteurs/${modifyId}`
      )
      .then((response) => setSecteursPara(response.data));
  }, []);

  //Données de Modifications
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_PORT}/articles/details/${modifyId}`
      )
      .then((res) => setArticle(res.data));
  }, []);

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

  return (
    <>
      <h2 className="bjr-user">Bonjour [userName],</h2>
      <div className="articles-and-types">
        {/* BLOC DE GAUCHE = ARTICLE */}
        <form className="bloc-content-row">
          <div className="bloc-article">
            <h3 className="titreMenu">Modifier l'article</h3>

            <div className="article-form">
              <input
                className="input-article-title"
                placeholder="Titre de l'article"
                value={article.titre && article.titre}
                name="titre"
                onChange={(e) => handleChange(e)}
              />
              <input
                className="input-article-intro"
                placeholder="Intro de l'article"
                value={article.intro ? article.intro : ""}
                name="intro"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="Url de l'image"
                type="url"
                value={article.image ? article.image : ""}
                name="image"
                onChange={(e) => handleChange(e)}
              />
              <TinyArticle
                modifArticle={article.para1 && article.para1}
                setArticleContent={handleChange}
              />
              <input
                className="input-article-intro"
                placeholder="Texte présentant les avantages de l'article"
                value={article.avantage ? article.avantage : ""}
                name="avantage"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="URL du lien à télécharger N°1"
                value={article.lien1 ? article.lien1 : ""}
                onChange={(e) => handleChange(e)}
                name="lien1"
              />
              <input
                placeholder="URL du lien à télécharger N°2"
                value={article.lien2 ? article.lien2 : ""}
                onChange={(e) => handleChange(e)}
                name="lien2"
              />
              <input
                placeholder="URL du lien à télécharger N°3"
                value={article.lien3 ? article.lien3 : ""}
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
                    options={idCategorie && sousCategories}
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
                  <p>{sousCatPara && sousCatPara}</p>
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
                  <p>{secteursPara && secteursPara}</p>
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
                  <p>{villesPara && villesPara}</p>
                </div>
                <div className="publishButton">
                  <BouttonPublier
                    article={article}
                    collectDatas={modifDatas}
                    type={"Modifier"}
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
export default ModificationArticle;
