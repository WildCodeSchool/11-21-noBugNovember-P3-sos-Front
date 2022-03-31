import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const VillesContext = createContext();

const VillesContextProvider = (props) => {
  const [villes, setVilles] = useState([]);
  const [reloadVilles, setReloadVilles] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/villes`)
      .then((res) => setVilles(res.data));
  }, [reloadVilles]);
  return (
    <VillesContext.Provider value={{ villes, reloadVilles, setReloadVilles }}>
      {props.children}
    </VillesContext.Provider>
  );
};

export default VillesContextProvider;
