import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const SousCategoriesContext = createContext();

const SousCategoriesContextProvider = (props) => {
  const [sousCategories, setSousCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4242/souscategories")
      .then((res) => setSousCategories(res.data));
  }, []);
  return (
    <SousCategoriesContext.Provider value={{ sousCategories }}>
      {props.children}
    </SousCategoriesContext.Provider>
  );
};

export default SousCategoriesContextProvider;
