import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {

  const [villeChoice, setVilleChoice]= useState('')
  const [categorieChoice, setCategorieChoice]= useState(0)
  const [sousCategorieChoice, setSousCategorieChoice]= useState('')

  const [articles, setArticles] = useState([])
  const [filters, setFilters] = useState('')
  const [idArticle, setIdArticle] = useState(0)

  useEffect (() => {setFilters(`?categorie=${categorieChoice}`) } ,[categorieChoice])


  useEffect(() => {
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
  }, [filters],console.log("fcat",filters))

  return (
    <ArticleContext.Provider value={{ articles, idArticle,setIdArticle, villeChoice, setVilleChoice, categorieChoice, setCategorieChoice, sousCategorieChoice, setSousCategorieChoice}}>
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
