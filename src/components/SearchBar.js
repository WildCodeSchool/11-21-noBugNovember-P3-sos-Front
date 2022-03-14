import {useContext} from 'react'
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import "./Styles/SearchBar.css";
import Select from './Select'

const SearchBar = () => {
const {villes } = useContext(VillesContext)
const { categories } = useContext(CategoriesContext)
  return (
    <div className="holderSearchBar">
      <div className="SearchBar">
        <input type="text" name="searchBar" placeholder="Rechercher"></input>
  
        <Select
         name={'Ville'}
         result={villes}
        />
        <Select
         name={'Catégories'}
         result={categories}
        />
      
      </div>
    </div>
  )
}

export default SearchBar
