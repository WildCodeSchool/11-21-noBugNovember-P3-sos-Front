import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
  const [articles, setArticles] = useState([])
  const [filterCat, setFilterCat] = useState('')
  const [filters, setFilters] = useState('')

  const handleCat = (id) => {
    setFilterCat(id)
    setFilters(`?categorie=${filterCat}`)
  }
  // if (filterCat) {
  // }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/articles${filters}`)
      .then((res) => setArticles(res.data))
  }, [filterCat])

  return (
    <ArticleContext.Provider value={{ articles, handleCat }}>
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
