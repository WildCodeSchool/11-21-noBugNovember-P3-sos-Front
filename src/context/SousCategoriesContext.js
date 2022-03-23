import { useEffect, useState, createContext } from "react";

import axios from "axios";

export const SousCategoriesContext = createContext();
const SousCategoriesContextProvider = (props) => {
const [catSousCatChoice,setCatSousCatChoice]=useState(0)
const [filters,setFilters]=useState('')
  
const [sousCategories, setSousCategories] = useState([]);
useEffect(()=>{if(catSousCatChoice!==0){
    setFilters(`?categorie=${catSousCatChoice}`)
}},[catSousCatChoice])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/souscategories${filters}`)
      .then((res) => setSousCategories(res.data));
  }, [filters],console.log('amonde',filters));
  return (
    <SousCategoriesContext.Provider value={{ sousCategories, catSousCatChoice, setCatSousCatChoice }}>
      {props.children}
    </SousCategoriesContext.Provider>
  );
};

export default SousCategoriesContextProvider;
