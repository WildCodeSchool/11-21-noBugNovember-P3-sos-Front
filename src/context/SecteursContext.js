import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const SecteursContext = createContext();

const SecteursContextProvider = (props) => {
  const [secteurs, setSecteurs] = useState([]);
  const [reloadSecteurs, setReloadSecteurs] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/secteurs`)
      .then((res) => setSecteurs(res.data));
  }, [reloadSecteurs]);
  return (
    <SecteursContext.Provider
      value={{ secteurs, reloadSecteurs, setReloadSecteurs }}
    >
      {props.children}
    </SecteursContext.Provider>
  );
};

export default SecteursContextProvider;
