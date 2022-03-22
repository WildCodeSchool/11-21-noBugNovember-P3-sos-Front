import { useContext, useEffect, useState } from "react";
import { VillesContext } from "../context/VillesContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { ArticleContext } from "../context/ArticleContext";
import "./Styles/SearchBar.css";
import Select from "./Select";

const SearchBar = (props) => {
  const { villes } = useContext(VillesContext);
  const { categories } = useContext(CategoriesContext);

  const { villeChoice } = useContext(ArticleContext);
  const { setVilleChoice } = useContext(ArticleContext);
  const { categorieChoice } = useContext(ArticleContext);
  const { setCategorieChoice } = useContext(ArticleContext);
  const { sousCategorieChoice } = useContext(ArticleContext);
  const { setSousCategorieChoice } = useContext(ArticleContext);

  const [test, setTest] = useState("");

  const handleVille = (e) => {
    setVilleChoice(e.target.value);
  };
  useEffect(() => {
    console.log("efefef", villeChoice);
  }, [villeChoice]);

  return (
    <div className="holderSearchBar">
      <h1>{villeChoice}</h1>

      {villes && console.log("vikles", villes)}
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
          value={test}
          placeholder="Rechercher"
          onChange={(e) => setTest(e.target.value)}
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
