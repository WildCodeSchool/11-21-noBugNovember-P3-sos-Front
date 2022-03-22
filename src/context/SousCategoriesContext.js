import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const SousCategoriesContext = createContext();
const SousCategoriesContextProvider = (props) => {
  const [filterSousCat,setFilterSousCat]=useState('')
  const [sousCategories, setSousCategories] = useState([]);
  const handleSousCat=(id)=>{
    console.log('artcon2',id)
    setFilterSousCat(`?id=${id}`)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4242/souscategories${filterSousCat}`)
      .then((res) => setSousCategories(res.data));
  }, []);
  return (
    <SousCategoriesContext.Provider value={{ sousCategories }}>
      {props.children}
    </SousCategoriesContext.Provider>
  );
};

export default SousCategoriesContextProvider;
