import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const TelechargementsContext = createContext();

const TelechargementsContextProvider = (props) => {
  const [telechargements, setTelechargements] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/telechargements`)
      .then((res) => setTelechargements(res.data));
  }, []);
  return (
    <TelechargementsContext.Provider value={{ telechargements }}>
      {props.children}
    </TelechargementsContext.Provider>
  );
};

export default TelechargementsContextProvider;
