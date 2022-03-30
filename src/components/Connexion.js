import "./Styles/Connexion.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Connexion = () => {
  const { email, setEmail, password, setPassword, handleSubmit,access } =
    useContext(AuthContext);

  return (
    <>
        
      <img src={logo} alt="logoconnexion" className="logoconnexion" />
      <div className="bloc-login">
        <form className="login-access" onSubmit={(e) => handleSubmit(e)} >
          <h1>ACCES ADMIN</h1>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-login-email button2"
          />
          <input
            placeholder="Mot de passe"
            type="password"
            className="input-login-pass button2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Link to="/admin-controler/articles"> */}
            <button type="submit" className="button2 btnOrange">
              Connexion
            </button>
          {/* </Link> */}
          <Link to="/admin-controler" className="forgotten-password">
            mot de passe oublié ?
          </Link>
          {/* Link a mettre ici */}
         <Link to="/admin-controler/articles" >
          <h4>Panel Admin</h4>
        </Link>
        </form>
      </div>
    </>
  );
};
export default Connexion;
