import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const ArticleContext = createContext()

const ArticleContextProvider = (props) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4242/articles')
      .then((res) => setArticles(res.data))
  }, [])
  return (
    <ArticleContext.Provider value={{ articles }}>
      {props.children}
    </ArticleContext.Provider>
  )
}

export default ArticleContextProvider
