import "./Styles/SearchBar.css";

import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../context/ArticleContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";
import { VillesContext } from "../context/VillesContext";

import Select from "./Select";

const SearchBar = (props) => {
  const { villes } = useContext(VillesContext);
  const { categories } = useContext(CategoriesContext);
  const { sousCategories } = useContext(SousCategoriesContext);

  const { villeChoice } = useContext(ArticleContext);
  const { setVilleChoice } = useContext(ArticleContext);
  const { categorieChoice } = useContext(ArticleContext);
  const { setCategorieChoice } = useContext(ArticleContext);
  const { sousCategorieChoice } = useContext(ArticleContext);
  const { setSousCategorieChoice } = useContext(ArticleContext);

  useEffect(() => {
    console.log("efefef", villeChoice);
  }, [villeChoice]);

  return (
    <div className="holderSearchBar">

      {villes && console.log("vikles", villes)}
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
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
  
        <Select
          name={"Catégories"}
          result={categories}
          value={categorieChoice}
        />
      </div>
    </div>
  );
};

export default SearchBar;
