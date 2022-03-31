import axios from 'axios'
import { useEffect, useState, createContext } from 'react'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
  //State Liste des Articles
  const [articles, setArticles] = useState([])

  // State pour les filtres et Select
  const [filters, setFilters] = useState('')
  const [idCategorie, setIdCategorie] = useState()
  const [idVille, setIdville] = useState()
  const [idsousCategorie, setIdsousCategorie] = useState()
  const [searchFilter, setSearchFilter] = useState()
  const [reloadArticle, setReloadArticle] = useState(true)
  const [stateVisible, setStateVisible] = useState(true)

  // Création du Filtre
  useEffect(() => {
    let filter = []

    idCategorie && filter.push(`categorie=${idCategorie}`)
    idVille && filter.push(`ville=${idVille}`)
    idsousCategorie && filter.push(`sousCategorie=${idsousCategorie}`)
    searchFilter && filter.push(`search=${searchFilter}`)

    setFilters(`?${filter.join('&')}`)
  }, [idCategorie, idVille, idsousCategorie, searchFilter])

  // Suppression des Filtres sans Supprimer la Catégorie
  const deleteFilter = () => {
    setIdville('')
    setIdsousCategorie('')
    setSearchFilter('')
    // setFilters("");
    resetSearch()
  }

  //Supprimer recherche sur page HOme
  const deleteSearchHome = () => {
    setIdville('')
    setSearchFilter('')
    setIdCategorie('')
  }

  //Supprimer sousCat en modifiant les catégorie du slider

  const deleteSousCat = () => {
    setIdsousCategorie('')
  }
  // Récupération de la liste filtrée
  // useEffect(() => {
  //   if (filters.length === 0) {
  //     console.log("vide", filters);

  //     axios
  //       .get(`http://localhost:4242/articles`)
  //       .then((res) => setArticles(res.data));
  //   } else if (
  //     filters.includes("ville") ||
  //     filters.includes("sousCategorie") ||
  //     filters.includes("search")
  //   ) {
  //     console.log("recherce", filters);
  //     axios
  //       .get(`http://localhost:4242/articles${filters}`)
  //       .then((res) => setArticles(res.data));
  //   } else {
  //     console.log("catt", filters);
  //     axios
  //       .get(`http://localhost:4242/articles/?categorie=${idCategorie}`)
  //       .then((res) => setArticles(res.data));
  //   }
  // }, [filters, idCategorie]);

  // Changement liste En fonciton de idCAtegorie

  useEffect(() => {
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
  }, [filters, reloadArticle, stateVisible])

  //Liste Entière
  const resetSearch = () => {
    axios
      .get(`http://localhost:4242/articles/?categorie=${idCategorie}`)
      .then((res) => setArticles(res.data))
  }

  // Bouton Recherche
  const searchLaunch = () => {
    console.log(filters)
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
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
        deleteSearchHome,
        reloadArticle,
        setReloadArticle,
        setStateVisible,
        stateVisible,
        deleteSousCat,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
