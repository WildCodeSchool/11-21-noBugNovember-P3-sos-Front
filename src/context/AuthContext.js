import axios from "axios";
import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // Déclaration States d'authentification
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/auth/login`, {
        mail: email,
        password: password,
      })
      .then((res) => {
        console.log("ress poulet :", res.data);
        localStorage.setItem("token", res.headers["x-access-token"]);
        // console.log("token", localStorage.getItem("token"))
      });
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
