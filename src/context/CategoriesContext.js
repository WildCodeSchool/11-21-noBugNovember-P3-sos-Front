import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const CategoriesContext = createContext();

const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [idCategorie, setIdCategorie] = useState("");
  const [reloadCategories, setReloadCategories] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/categories`)
      .then((res) => setCategories(res.data));
  }, [reloadCategories]);
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        reloadCategories,
        setReloadCategories,
        idCategorie,
        setIdCategorie,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
