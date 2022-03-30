import "./Styles/ArticleForm.css";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import TinyArticle from "./TinyArticle";
import Select, { StylesConfig } from "react-select";
import { ArticleContext } from "../context/ArticleContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";

import BouttonPublier from "./BouttonPublier";

// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "20vw",
    padding: ".5rem",
  }),
};
const ModificationArticle = ({ modifArticle, setModifArticle,modifyId }) => {
  // const [article, setArticle] = useState({visible:false, user_id:1});
  const [art,setArt]=useState()
  const [selectSecteur, setSelectSecteur] = useState();
  const [selectVille, setSelectVille] = useState();
  const [selectCategorie, setSelectCategorie] = useState([]);
  const [selectSousCategorie, setSelectSousCategorie] = useState();
  const [articleTitle, setArticleTitle] = useState("");
  const [articleIntro, setArticleIntro] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [defaultSousCategorie,setDefaultSousCategorie]=useState([])
  const [defaultSecteur,setDefaultSecteur]=useState([])
  const [defaultVille,setDefaultVille]=useState([])


  const [testArticle, setTestArticle]= useState({})
  const { idCategorie, setIdCategorie } = useContext(ArticleContext);
  const { sousCategories } = useContext(SousCategoriesContext);

  const collectDatas = (event) => {
    event.preventDefault();
    // setArticle({
    //   titre: modifArticle.titre,
    //   intro: modifArticle.intro,
    //   para1: modifArticle.para1,
    //   avantage: modifArticle.avantage,
    //   lien1: modifArticle.lien1,
    //   lien2: modifArticle.lien2,
    //   lien3: modifArticle.lien3,
    //   image: modifArticle.image,
    //   visible: false,
    //   user_id: 1,
    //   secteur_id: modifArticle.nom_secteur,
    //   sous_categorie_id: modifArticle.nom_sous_categorie,
    //   ville_id: modifArticle.nom_ville,
    // });
 console.log("teeeeeeeees", testArticle)
    axios
      .put(`http://localhost:4242/articles/${modifyId}`, { ...testArticle })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error(
          "---Erreur modification article--- ",
          error.validationErrors
        )
      );
  };

  // const handleChangeTitle = (e) => {
  //   setModifArticle({ ...modifArticle, titre: e.target.value });
  //   // setArticleTitle(e.target.value);
  // };
  // const handleChangeIntro = (e) => {
  //   setModifArticle({ ...modifArticle, intro: e.target.value });
  //   // setArticleIntro(e.target.value);
  // };
  // const handleChangeUrlImg = (e) => {
  //   setModifArticle({ ...modifArticle, image: e.target.value });
  // };
  // const handleChangeAvantage = (e) => {
  //   setModifArticle({ ...modifArticle, avantage: e.target.value });
  // };
  // const handleChangeLien1 = (e) => {
  //   setModifArticle({ ...modifArticle, lien1: e.target.value });
  // };
  // const handleChangeLien2 = (e) => {
  //   setModifArticle({ ...modifArticle, lien2: e.target.value });
  // };
  // const handleChangeLien3 = (e) => {
  //   setModifArticle({...modifArticle,lien3:e.target.value});
  // };

  const handleChangeCategorie = (value) => {
    const { id } = value;
    setIdCategorie(id);
    setModifArticle({ ...modifArticle, nom_categorie: id });
  };
  // const handleChangeSecteur = (value) => {
  //   let extractedValue = [];
  //   for (let i = 0; i < value.length; i++) {
  //     extractedValue.push(value[i].id);
  //   }
  //   setModifArticle({ ...modifArticle, nom_secteur: extractedValue });
  // };
  // const handleChangeSousCategorie = (val) => {
  //   let extractedValue = [];
  //   let tempoTab=defaultSousCategorie

  //   // console.log("VALUE",val)
  //   for (let i = 0; i < val.length; i++) {
  //           extractedValue.push(val[i].id);
  //     if(i===val.length-1) {
  //       tempoTab.push({label: val.label, value: val.value})
  //     }
  //   }
  //   setDefaultSousCategorie(tempoTab)
  //   setModifArticle({...modifArticle,nom_sous_categorie:extractedValue});

  // };
  // const handleChangeVille = (value) => {
  //   let extractedValue = [];
  //   for (let i = 0; i < value.length; i++) {
  //     extractedValue.push(value[i].id);
  //   }
  //   setModifArticle({ ...modifArticle, nom_ville: extractedValue });
  // };


  // const recup = () => {
  //   axios
  //     .get("http://localhost:4242/categories")
  //     .then((response) => setSelectCategorie(response.data));
  // };
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
      axios.get('http://localhost:4242/articles').
      then((res)=>setArt(res.data))

      // console.log("ees",modifArticle)
  },[])
  


  useEffect(() => {
    axios.get(`http://localhost:4242/articles/details/${modifyId}`)
    .then((res)=>setTestArticle(res.data))
  },[])

  // useEffect(() => {
  //   setArticle(...article, ...testArticle)
  // } , [testArticle])

  // const addID = ()=>{
  //   art.forEach((article)=>{
  //     if(modifArticle.id===article.id){
  //       article.id_secteur=article.id_secteur.split(',')
  //       article.id_sous_categorie=article.id_sous_categorie.split(',')
  //       article.id_ville=article.id_ville.split(',')
  //       article.id_sous_categorie=article.id_sous_categorie.map((id)=>parseInt(id,10))
  //       article.id_ville=article.id_ville.map((id)=>id=parseInt(id,10))
  //       article.id_secteur=article.id_secteur.map((id)=>id=parseInt(id,10))

  //       setModifArticle({...modifArticle,
  //         nom_categorie:[article.nom_categorie],
  //         id_secteur:article.id_secteur,
  //         nom_secteur:article.nom_secteur.split(','),
  //         id_sous_categorie:article.id_sous_categorie,
  //         nom_sous_categorie:article.nom_sous_categorie.split(','),
  //         id_ville:article.id_ville,
  //         nom_ville:article.nom_ville.split(',')})
  //     }
  //   })
  // }
  const handleChange = (e, name, select) => {
    //  setArticleTitle(`titre: ${e.target.value}`);
    // setArticleTitle(e.target.value);
    if (select) {
      let extractedValue = [];
      for (let i = 0; i < e.length; i++) {
        extractedValue.push(e[i].id);
      }
      setTestArticle({
        ...testArticle,
        [name]: extractedValue,
      });
    } else if (name) {
      setTestArticle({
        ...testArticle,
        [name]: e,
      });
    } else {
      setTestArticle({
        ...testArticle,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
    {/* {console.log("modifyId", modifyId)}; */}
    {console.log("test", testArticle)};
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
                // value={modifArticle.titre?modifArticle.titre:""}
                value={testArticle.titre&&testArticle.titre}
                name="titre"
                onChange={(e) => handleChange(e)}
              />
              <input
                className="input-article-intro"
                placeholder="Intro de l'article"
                value={testArticle.intro?testArticle.intro:""}
                name="intro"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="Url de l'image"
                type="url"
                value={testArticle.image?testArticle.image:""}
                name="image"
                onChange={(e) => handleChange(e)}
              />
              <TinyArticle
                // setArticleContent={setArticleContent}
                modifArticle={testArticle.para1 && testArticle.para1}
                setArticleContent={handleChange}
              />
              <input
                className="input-article-intro"
                placeholder="Texte présentant les avantages de l'article"
                value={testArticle.avantage?testArticle.avantage:""}
                name="avantage"
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="URL du lien à télécharger N°1"
                value={testArticle.lien1?testArticle.lien1:""}
                onChange={(e) => handleChange(e)}
                name="lien1"
              />
              <input
                placeholder="URL du lien à télécharger N°2"
                value={testArticle.lien2?testArticle.lien2:""}
                onChange={(e) => handleChange(e)}
                name="lien2"
              />
              <input
                placeholder="URL du lien à télécharger N°3"
                value={testArticle.lien3?testArticle.lien3:""}
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
                  {/* {console.log(modifArticle.nom_categorie)} */}

                  <Select
                    placeholder="Choix de la catégorie"
                    // value={defaultSousCategorie}
                    options={selectCategorie}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeCategorie(value)}
                    // onClick={recup}
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
                    // value={defaultSousCategorie}
                    placeholder="Choix de sous-catégorie(s)"
                    options={sousCategories}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChange(value, "sous_categorie_id", true)}
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
                    // value={defaultSecteur}
                    placeholder="Choix de secteur(s)"
                    options={selectSecteur}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChange(value, "secteur_id", true)}
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
                    // value={defaultVille}
                    placeholder="Choix de ville(s)"
                    options={selectVille}
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
                    article={testArticle}
                    collectDatas={collectDatas}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* {console.log("RECUP ARTICLE", modifArticle)}
      {console.log('Art',art)}
      
      {console.log("RECUP ARTICLE", modifArticle)} */}
    </>
  );
};
export default ModificationArticle;
