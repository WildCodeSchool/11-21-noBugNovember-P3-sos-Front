import {useContext} from 'react'
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { ArticleContext } from "../context/ArticleContext";
import "./Styles/SearchBar.css";
import Select from './Select'

const SearchBar = () => {
const {villes } = useContext(VillesContext)
const { categories } = useContext(CategoriesContext)

const { villeChoice } = useContext(ArticleContext)
const {  setVilleChoice } = useContext(ArticleContext)
const { categorieChoice } = useContext(ArticleContext)
const {setCategorieChoice } = useContext(ArticleContext)
const { sousCategorieChoice } = useContext(ArticleContext)
const {setSousCategorieChoice } = useContext(ArticleContext)

const handleChange=(e,set)=>{
  set(e.target.value)
  console.log(villeChoice)
}
  return (
    <div className="holderSearchBar">
      <div className="SearchBar">
        <input type="text" name="searchBar" placeholder="Rechercher"></input>
  
        <Select
         name={'Ville'}
         result={villes}
         value={villeChoice}
         onChange={handleChange(e, setVilleChoice)}
        />
        <Select
         name={'Catégories'}
         result={categories}
         value={categorieChoice}
        />
      
      </div>
    </div>
  )
}

export default SearchBar
