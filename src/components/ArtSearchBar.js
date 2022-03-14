import {useContext} from 'react'
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";
import "./Styles/SearchBar.css";
import Select from './Select'

const ArtSearchBar = () => {
  const {villes } = useContext(VillesContext)
  const { categories } = useContext(CategoriesContext)
  const { sousCategories } = useContext(SousCategoriesContext)
 
  console.log(sousCategories, categories,"5")
    return (
      <div className="holderSearchBar">
        <div className="SearchBar">
          <input type="text" name="searchBar" placeholder="Rechercher"></input>
          <Select
          name={'Ville'}
          result={villes}
          />
          <Select
          name={'Catégorie'}
          result={categories}
          />
          <Select
          name={'Sous-catégorie'}
          result={sousCategories}
          />
        </div>
      </div>
    );
  };
export default ArtSearchBar