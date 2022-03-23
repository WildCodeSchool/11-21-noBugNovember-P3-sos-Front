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
  const { searchChoice } = useContext(ArticleContext);
  const { setCategorieChoice } = useContext(ArticleContext);
  const { sousCategorieChoice } = useContext(ArticleContext);
  const { setSousCategorieChoice } = useContext(ArticleContext);
  const { setSearchChoice } = useContext(ArticleContext);

  const { idCategorie } = useContext(ArticleContext);
  const { setIdCategorie } = useContext(ArticleContext);
  const { idVille } = useContext(ArticleContext);
  const { setIdville } = useContext(ArticleContext);
  const { idsousCategorie } = useContext(ArticleContext);
  const { setIdsousCategorie } = useContext(ArticleContext);
  const { searchFilter } = useContext(ArticleContext);
  const { setSearchFilter } = useContext(ArticleContext);
  




  return (
    <div className="holderSearchBar">

      {villes && console.log("vikles", idVille)}
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Rechercher"
          value={searchFilter}
          onChange={e => setSearchFilter(e.target.value)}
        ></input>

        {/* SELECT Ville  */}
        { props.isVille && <Select
         name={'Ville'}
         result={villes}
         value={idVille}
         set={setIdville}
         />
        } 

        {/* SELECT CATEGORIE */}
        {props.isCat && <Select
          name={"Catégories"}
          result={categories}
          value={idCategorie}
          set={setIdCategorie}
        />}

        {/* SELECT SOUS CAT */}
        {props.isSousCat &&  <Select
          name={'Sous-catégorie'}
          result={sousCategories}
          value={idsousCategorie}
          set={setIdsousCategorie}
          />}
      </div>
    </div>
  );
};

export default SearchBar;
