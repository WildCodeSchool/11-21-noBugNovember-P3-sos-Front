import "./Styles/Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

function Header() {
  const {resetSearch} = useContext(ArticleContext)
  const {setFilters} = useContext(ArticleContext)
  return (
    <>
      <div className="headerWrapperLogo">
        <div className="headerLogoHolder">
          <Link to="/" onClick={() => resetSearch("")} >
            <img
              src={require("../assets/logo.png")}
              alt="logo Sos jeunes pousses"
            />
          </Link>
        </div>
        <Link to="/admin" onClick={() => setFilters("")}>
          <h5>Admin</h5>
        </Link>
      </div>
    </>
  );
}

export default Header;
