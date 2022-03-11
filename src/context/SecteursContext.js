import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const SecteursContext = createContext();

const SecteursContextProvider = (props) => {
  const [secteurs, setSecteurs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4242/secteurs")
      .then((res) => setSecteurs(res.data));
  }, []);
  return (
    <SecteursContext.Provider value={{ secteurs }}>
      {props.children}
    </SecteursContext.Provider>
  );
};

export default SecteursContextProvider;
