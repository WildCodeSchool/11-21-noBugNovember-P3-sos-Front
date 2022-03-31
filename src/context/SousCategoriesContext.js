import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { ArticleContext } from "./ArticleContext";

export const SousCategoriesContext = createContext();

const SousCategoriesContextProvider = (props) => {
  const { idCategorie } = useContext(ArticleContext);
  const [sousCategories, setSousCategories] = useState([]);
  const [reloadSousCat, setReloadSousCat] = useState(true);

  useEffect(() => {
    if (idCategorie) {
      axios
        .get(
          `http://localhost:${process.env.REACT_APP_PORT}/souscategories/?categorie=${idCategorie}`
        )
        .then((res) => setSousCategories(res.data));
    } else {
      axios
        .get(`http://localhost:${process.env.REACT_APP_PORT}/souscategories`)
        .then((res) => setSousCategories(res.data));
    }
  }, [idCategorie, reloadSousCat]);

  return (
    <SousCategoriesContext.Provider
      value={{ sousCategories, reloadSousCat, setReloadSousCat }}
    >
      {props.children}
    </SousCategoriesContext.Provider>
  );
};

export default SousCategoriesContextProvider;
