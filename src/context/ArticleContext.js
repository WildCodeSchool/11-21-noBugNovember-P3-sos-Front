import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
  //State Liste des Articles
  const [articles, setArticles] = useState([]);


  // State pour les filtres et Select
  const [filters, setFilters] = useState("");
  const [idCategorie, setIdCategorie] = useState();
  const [idVille, setIdville] = useState();
  const [idsousCategorie, setIdsousCategorie] = useState();
  const [searchFilter, setSearchFilter] = useState();


  // Création du Filtre 
  useEffect(() => {
    let filter = [];

    idCategorie && filter.push(`categorie=${idCategorie}`);
    idVille && filter.push(`ville=${idVille}`);
    idsousCategorie && filter.push(`sousCategorie=${idsousCategorie}`);
    searchFilter && filter.push(`search=${searchFilter}`);

    setFilters(`?${filter.join("&")}`);
  }, [idCategorie, idVille, idsousCategorie, searchFilter]);

  // Suppression des Filtres sans Supprimer la Catégorie
  const deleteFilter = () => {
    setIdville("");
    setIdsousCategorie("");
    setSearchFilter("");
    setFilters("");
    resetSearch();
  };

  const deleteSearchHome =() => {
    setIdville("");
    setSearchFilter("");
    setIdCategorie("")
  }

  // Récupération de la liste filtrée
  useEffect(() => {
       axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data));
  }, [idCategorie]);


  //Lise Entière
  const resetSearch = () => {
    axios
    .get(`http://localhost:4242/articles/?categorie=${idCategorie}`)
    .then((res) => setArticles(res.data));
  }

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
        idCategorie,
        setIdCategorie,
        idVille,
        setIdville,
        idsousCategorie,
        setIdsousCategorie,
        searchFilter,
        setSearchFilter,
        searchLaunch,
        deleteFilter,
        deleteSearchHome
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
