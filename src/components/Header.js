import "./Styles/Header.css";
import { ArticleContext } from "../context/ArticleContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Header() {

  // const {setFilters} = useContext(ArticleContext)
  return (
    <>
      <div className="headerWrapperLogo">
        <div className="headerLogoHolder">
          <Link to="/">
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
