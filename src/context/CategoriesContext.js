import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const CategoriesContext = createContext()

const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4242/categories')
      .then((res) => setCategories(res.data))
  }, [])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
