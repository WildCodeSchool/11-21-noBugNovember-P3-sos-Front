import "./Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="headerWrapperLogo">
        <div className="headerLogoHolder">
          <Link to="/">
            <img
              src={require("../assets/logo.png")}
              alt="logo Sos jeunes pousses"
            />
          </Link>
        </div>
        <Link to="/admin">
          <h5>Admin</h5>
        </Link>
      </div>
    </div>
  );
}

export default Header;
