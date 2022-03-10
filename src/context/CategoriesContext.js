import { useEffect, useState, createContext } from 'react'
import axios from 'axios'

export const CategoriesContext = createContext()

const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([])
  const [filterCat, setFilterCat] = useState('')
  const [filters, setFilters] = useState('')
  if (filterCat) {
    setFilters(`/?categorie=${filterCat}`)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/categories${filters}`)
      .then((res) => setCategories(res.data))
  }, [filters])

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContextProvider
