import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
  //State Liste des Articles
  const [articles, setArticles] = useState([]);

  // States pour les SELECT
  // const [villeChoice, setVilleChoice] = useState("");
  // const [categorieChoice, setCategorieChoice] = useState("");
  // const [sousCategorieChoice, setSousCategorieChoice] = useState("");
  // const [searchChoice, setSearchChoice] = useState("")
 
  // State pour les filtres et Select
  const [filters, setFilters] = useState("");
  const [idCategorie, setIdCategorie] = useState();
  const [idVille, setIdville] = useState();
  const [idsousCategorie, setIdsousCategorie] = useState();
  const [searchFilter, setSearchFilter] = useState();

  // Récupérer les valeur des filtres
  // const recupFilters = () => {
  //   villeChoice && setIdville(villeChoice);
  //   categorieChoice && setIdCategorie(categorieChoice);
  //   sousCategorieChoice && setIdsousCategorie(sousCategorieChoice);
  //   searchChoice && setSearchFilter(searchChoice)
  // };

  // Création du Filtre
  useEffect(() => {
    let filter = [];

    idCategorie && filter.push(`categorie=${idCategorie}`);
    idVille && filter.push(`ville=${idVille}`);
    idsousCategorie && filter.push(`sousCategorie=${idsousCategorie}`);
    searchFilter && filter.push(`search=${searchFilter}`);

    setFilters(`?${filter.join("&")}`);
  }, [idCategorie, idVille, idsousCategorie, searchFilter]);

  // Suppression des Filtres A TESTTTTTT
  const deleteFilter = () => {
    // setVilleChoice("")
    // setCategorieChoice("")
    // setSousCategorieChoice("")
    setIdville();
    setIdCategorie();
    setIdsousCategorie();
    setSearchFilter();
    // setSearchChoice();
  };

  // Récupération de la liste filtrée
  useEffect(() => {
   
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data));
  }, []);

  // Bouton Recherche
  const searchLaunch = () => {
    console.log(filters);
    axios
    .get(`http://localhost:4242/articles${filters}`)
    .then((res) => setArticles(res.data));
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        // villeChoice,
        // setVilleChoice,
        // categorieChoice,
        // setCategorieChoice,
        // sousCategorieChoice,
        // setSousCategorieChoice,
        idCategorie,
        setIdCategorie,
        idVille,
        setIdville,
        idsousCategorie,
        setIdsousCategorie,
        searchFilter,
        setSearchFilter,
        // recupFilters,
        // setSearchChoice,
        // searchChoice,
        searchLaunch
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
