import "./Styles/ArticleForm.css";
import { useState, useEffect } from "react";
import TinyArticle from "./TinyArticle";
import axios from "axios";
import Select, { StylesConfig } from "react-select";

import BouttonPublier from "./BouttonPublier";

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
const ModificationArticle = (props) => {
  const { modifArticle,setModifArticle } = props;
  const [article, setArticle] = useState({});

  const [selectSecteur, setSelectSecteur] = useState();
  const [selectVille, setSelectVille] = useState();
  const [selectCategorie, setSelectCategorie] = useState([]);
  const [selectSousCategorie, setSelectSousCategorie] = useState();

  const [articleAvantage, setArticleAvantage] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [articleIntro, setArticleIntro] = useState("");
  const [articleUrlImg, setArticleUrlImg] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleUrlTelechargement, setUrlTelechargement] = useState("");
  const [articleLien1, setArticleLien1] = useState("");
  const [articleLien2, setArticleLien2] = useState("");
  const [articleLien3, setArticleLien3] = useState("");

  const [chooseSelectCategorie, setChooseSelectCategorie] = useState();
  const [chooseSelectSousCategorie, setChooseSelectSousCategorie] = useState(
    []
  );
  const [chooseSelectSecteur, setChooseSelectSecteur] = useState([]);
  const [chooseSelectVille, setChooseSelectVille] = useState([]);


  const collectDatas = (event) => {
    event.preventDefault();
    setArticle({
      titre: modifArticle.titre,
      intro: modifArticle.intro,
      para1: modifArticle.para1,
      avantage: modifArticle.avantage,
      lien1: modifArticle.lien1,
      lien2: modifArticle.lien2,
      lien3: modifArticle.lien3,
      image: modifArticle.image,
      visible: false,
      user_id: 1,
      secteur_id: modifArticle.nom_secteur,
      sous_categorie_id: modifArticle.nom_sous_categorie,
      ville_id: modifArticle.nom_ville,
    });
    console.log("ARTICLE DE MERDE A LA CON",article)
      axios
      .put(`http://localhost:4242/articles/${modifArticle.id}`, { ...article})
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error("---Erreur modification article--- ", error.validationErrors)
      );
  };

  const handleChangeTitle = (e) => {
    setModifArticle({...modifArticle,titre:e.target.value});
    setArticleTitle(e.target.value)
  };
  const handleChangeIntro = (e) => {
    setModifArticle({...modifArticle,intro:e.target.value});
    setArticleIntro(e.target.value)
  };
  const handleChangeUrlImg = (e) => {
    setModifArticle({...modifArticle,image:e.target.value});
  };
  const handleChangeAvantage = (e) => {
    setModifArticle({...modifArticle,avantage:e.target.value});
  };
  const handleChangeLien1 = (e) => {
    setModifArticle({...modifArticle,lien1:e.target.value});
  };
  const handleChangeLien2 = (e) => {
    setModifArticle({...modifArticle,lien2:e.target.value});
  };
  const handleChangeLien3 = (e) => {
    setModifArticle({...modifArticle,lien2:e.target.value});
  };

  const handleChangeCategorie = (value) => {
    const { id } = value;
    setModifArticle({...modifArticle,nom_categorie:id});
  };
  const handleChangeSecteur = (value) => {
    let extractedValue = [];
    for (let i = 0; i < value.length; i++) {
      extractedValue.push(value[i].id);
    }
    setModifArticle({...modifArticle,nom_secteur:extractedValue});
  };
  const handleChangeSousCategorie = (value) => {
    let extractedValue = [];
    for (let i = 0; i < value.length; i++) {
      extractedValue.push(value[i].id);
    }
    setModifArticle({...modifArticle,nom_sous_categorie:extractedValue});
  };
  const handleChangeVille = (value) => {
    let extractedValue = [];
    for (let i = 0; i < value.length; i++) {
      extractedValue.push(value[i].id);
    }
    setModifArticle({...modifArticle,nom_ville:extractedValue});
  };
  const recup = () => {
    axios
      .get("http://localhost:4242/categories")
      .then((response) => setSelectCategorie(response.data));
  };
  useEffect(() => {
      axios
        .get("http://localhost:4242/secteurs")
        .then((response) => setSelectSecteur(response.data));
      axios
        .get("http://localhost:4242/categories")
        .then((response) => setSelectCategorie(response.data));
      axios
        .get("http://localhost:4242/sousCategories")
        .then((response) => setSelectSousCategorie(response.data));
      axios
        .get("http://localhost:4242/villes")
        .then((response) => setSelectVille(response.data));

    // else {
    //   selectCategorie.foreach((categorie) => {
    //     console.log('CAT', categorie)
    //     if (categorie.nom_categorie == modifArticle.nom_categorie) {
    //       modifArticle.nom_categorie.push(categorie.id_categorie)
    //     }
    //   })
    //   console.log('CATEGORIETAB',modifArticle.nom_categorie)
    // }


  }, []);

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
                value={modifArticle.titre}
                onChange={handleChangeTitle}
              />
              <input
                className="input-article-intro"
                placeholder="Intro de l'article"
                value={modifArticle.intro}
                onChange={handleChangeIntro}
              />
              <input
                placeholder="Url de l'image"
                type="url"
                value={modifArticle.image}
                onChange={handleChangeUrlImg}
              />
              <TinyArticle
                setArticleContent={setArticleContent}
                modifArticle={modifArticle.para1}
              />
              <input
                className="input-article-intro"
                placeholder="Texte présentant les avantages de l'article"
                value={modifArticle.avantage}
                onChange={handleChangeAvantage}
              />
              <input
                placeholder="URL du lien à télécharger N°1"
                value={modifArticle.lien1}
                onChange={handleChangeLien1}
              />
              <input
                placeholder="URL du lien à télécharger N°2"
                value={modifArticle.lien2}
                onChange={handleChangeLien2}
              />
              <input
                placeholder="URL du lien à télécharger N°3"
                value={modifArticle.lien3}
                onChange={handleChangeLien3}
              />
            </div>
          </div>

          <div className="types-articles">
            <h3 className="titreMenu">Type d'article</h3>
            <div className="bloc-deroulant-publier">
              <div className="drop-down-type">
                <div className="selectDiv">
                  {console.log(modifArticle.nom_categorie)}

                  <Select
                    placeholder="Choix de la catégorie"
                    value={modifArticle.nom_categorie}
                    // CHANGEMENT A FAIRE ICI VIA LA DOC
                    options={selectCategorie}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeCategorie(value)}
                    onClick={recup}
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
                    selectOption={modifArticle.nom_sous_categorie}
                    value={[{label:modifArticle.nom_sous_categorie,value:1},{label:modifArticle.nom_sous_categorie,value:2},{label:modifArticle.nom_sous_categorie,value:3}]}
                    placeholder="Choix de sous-catégorie(s)"
                    options={selectSousCategorie}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeSousCategorie(value)}
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
                    defaultInputValue={modifArticle.nom_secteur}
                    placeholder="Choix de secteur(s)"
                    options={selectSecteur}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeSecteur(value)}
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
                    defaultInputValue={modifArticle.nom_ville}
                    placeholder="Choix de ville(s)"
                    options={selectVille}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeVille(value)}
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
                    collectDatas={collectDatas}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {console.log("RECUP ARTICLE", modifArticle,)}

    </>
  );
};
export default ModificationArticle;
