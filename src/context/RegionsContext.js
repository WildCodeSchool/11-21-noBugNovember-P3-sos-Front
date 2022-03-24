import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const RegionsContext = createContext();

const RegionsContextProvider = (props) => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4242/regions")
      .then((res) => setRegions(res.data));
  }, []);
  return (
    <RegionsContext.Provider value={{ regions }}>
      {props.children}
    </RegionsContext.Provider>
  );
};

export default RegionsContextProvider;
