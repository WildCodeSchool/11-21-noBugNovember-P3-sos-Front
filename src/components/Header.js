import "./Styles/Header.css";
import { ArticleContext } from "../context/ArticleContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Header() {
<<<<<<< HEAD
  const {resetSearch} = useContext(ArticleContext)
  const {setFilters} = useContext(ArticleContext)
=======

  // const {setFilters} = useContext(ArticleContext)
>>>>>>> 2d7a6ce3c23e3bfe91165513c6008cd5e132557a
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
        {/* <Link to="/admin" onClick={() => setFilters("")}>
          <h5>Admin</h5>
        </Link> */}
      </div>
    </>
  );
}

export default Header;
