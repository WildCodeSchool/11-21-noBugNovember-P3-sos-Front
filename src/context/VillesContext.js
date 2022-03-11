import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const VillesContext = createContext();

const VillesContextProvider = (props) => {
  const [villes, setVilles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4242/villes")
      .then((res) => setVilles(res.data));
  }, []);
  return (
    <VillesContext.Provider value={{ villes }}>
      {props.children}
    </VillesContext.Provider>
  );
};

export default VillesContextProvider;
