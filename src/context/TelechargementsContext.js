import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const TelechargementsContext = createContext();

const TelechargementsContextProvider = (props) => {
  const [telechargements, setTelechargements] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4242/telechargements")
      .then((res) => setTelechargements(res.data));
  }, []);
  return (
    <TelechargementsContext.Provider value={{ telechargements }}>
      {props.children}
    </TelechargementsContext.Provider>
  );
};

export default TelechargementsContextProvider;
