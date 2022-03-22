import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {

  const [villeChoice, setVilleChoice]= useState('')
  const [categorieChoice, setCategorieChoice]= useState('')
  const [sousCategorieChoice, setSousCategorieChoice]= useState('')

  const [articles, setArticles] = useState([])
  const [filterCat, setFilterCat] = useState('')
  const [filters, setFilters] = useState('')
  const [idArticle, setIdArticle] = useState()

  const handleCat = (id) => {
    setFilterCat(id)
    setFilters(`?categorie=${filterCat}`)
  }
<<<<<<< HEAD
  
=======
>>>>>>> dev

  useEffect(() => {
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
  }, [filterCat])

  return (
<<<<<<< HEAD
    <ArticleContext.Provider value={{ articles, handleCat,villeChoice, setVilleChoice, categorieChoice, setCategorieChoice, sousCategorieChoice,setSousCategorieChoice }}>
=======
    <ArticleContext.Provider
      value={{ articles, handleCat, idArticle, setIdArticle }}
    >
>>>>>>> dev
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
