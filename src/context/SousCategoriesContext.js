import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { ArticleContext } from "./ArticleContext";

export const SousCategoriesContext = createContext();
const SousCategoriesContextProvider = (props) => {
  const [filters, setFilters] = useState("");
  const [idCatSousCat, setIdCatSousCat] = useState();
  const [sousCategories, setSousCategories] = useState([]);
  const [reloadSousCat, setReloadSousCat] = useState(true);
  const { idCategorie } = useContext(ArticleContext);

  // useEffect(() => {
  //   let filter = [];
  //   idCatSousCat && filter.push(`categorie=${idCatSousCat}`);
  //   // sousCategories&& filter.push(`id=${sousCategories}`)
  //   setFilters(`?${filter.join("&")}`);
  // }, [idCatSousCat]);

  // const sousCatSet = (id) => {
  //   setIdCatSousCat(id);
  //   axios
  //     .get(`http://localhost:4242/souscategories/?categorie=${idCatSousCat}`)
  //     .then((res) => setSousCategories(res.data));
  // };
  // useEffect(
  //   () => {
  //     axios
  //       .get(`http://localhost:4242/souscategories${filters}`)
  //       .then((res) => setSousCategories(res.data));
  //   },
  //   [filters],
  //   console.log("amonde", filters)
  // );

  useEffect(() => {
    if (idCategorie) {
      axios
        .get(`http://localhost:4242/souscategories/?categorie=${idCategorie}`)
        .then((res) => setSousCategories(res.data));
    } else {
      axios
        .get(`http://localhost:4242/souscategories`)
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
