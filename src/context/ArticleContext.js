import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {

  const [villeChoice, setVilleChoice]= useState('')
  const [categorieChoice, setCategorieChoice]= useState('')
  const [sousCategorieChoice, setSousCategorieChoice]= useState('')

  const [articles, setArticles] = useState([])
  const [filters, setFilters] = useState('')
  const [idCategorie, setIdCategorie] = useState()



  useEffect (() => {
    setFilters(`?categorie=${idCategorie}`) } ,[idCategorie])


  useEffect(() => {
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
  }, [filters])

  return (
    <ArticleContext.Provider value={{ articles,villeChoice, setVilleChoice, categorieChoice, setCategorieChoice, sousCategorieChoice,setSousCategorieChoice , idCategorie, setIdCategorie}}>
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
