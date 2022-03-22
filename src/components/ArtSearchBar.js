import {useContext} from 'react'
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";
import { ArticleContext } from '../context/ArticleContext';

import "./Styles/SearchBar.css";
import Select from './Select'

const ArtSearchBar = () => {
  const {villes } = useContext(VillesContext)
  const { categories } = useContext(CategoriesContext)
  const { sousCategories } = useContext(SousCategoriesContext)
  const {handleCat} = useContext(ArticleContext)
  const {idArticle} = useContext(ArticleContext)
  const {setIdArticle} = useContext(ArticleContext)
 

  const handleSearchCat=(id)=>{
    handleCat(id)
    setIdArticle(id)
    
  }
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
          handleChange={handleSearchCat}
          id={idArticle}
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