import "./Styles/Header.css";

function Header() {
  return (
    <div>
      <div className="headerWrapperLogo">
        <div className="headerLogoHolder">
          <img
            src={require("../assets/logo.png")}
            alt="logo Sos jeunes pousses"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
