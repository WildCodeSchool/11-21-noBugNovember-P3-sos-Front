import { useContext, useEffect } from "react";
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import {SousCategoriesContext} from "../context/SousCategoriesContext"
import { ArticleContext } from "../context/ArticleContext";
import "./Styles/SearchBar.css";
import Select from "./Select";

const SearchBar = (props) => {
  const { villes } = useContext(VillesContext);
  const { categories } = useContext(CategoriesContext);
  const {sousCategories}= useContext(SousCategoriesContext)

  const { villeChoice } = useContext(ArticleContext);
  const { setVilleChoice } = useContext(ArticleContext);
  const { categorieChoice } = useContext(ArticleContext);
  const { setCategorieChoice } = useContext(ArticleContext);
  const { sousCategorieChoice } = useContext(ArticleContext);
  const { setSousCategorieChoice } = useContext(ArticleContext);



  useEffect(() => {
    console.log("efefef", categorieChoice);
  }, [categorieChoice]);

  return (
    <div className="holderSearchBar">
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
          value=""
          placeholder="Rechercher"
          
        ></input>

        {/* SELECT Ville  */}
        { props.isVille && <Select
         name={'Ville'}
         result={villes}
         value={villeChoice}
         set={setVilleChoice}
         />
        } 
        {props.isCat && <Select
          name={"Catégories"}
          result={categories}
          value={categorieChoice}
          set={setCategorieChoice}
        />}
        {props.isSousCat &&  <Select
          name={'Sous-catégorie'}
          result={sousCategories}
          value={sousCategorieChoice}
          set={setSousCategorieChoice}
          onChange={handleSearchChange(sousCategorieChoice)}
          />}
      </div>
    </div>
  );
};

export default SearchBar;
