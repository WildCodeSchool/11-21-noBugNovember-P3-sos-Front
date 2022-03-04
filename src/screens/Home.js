import SearchBar from "../components/SearchBar";
import "./Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="homeLogoHolder">
        <img
          src={require("../assets/logo.png")}
          alt="logo Sos jeunes pousses"
        />
      </div>
      <div className="homeWrapRaw">
        <h1>
          Les mêmes chances pour tous <br />
          Découvrez ...
        </h1>
        <div className="homeSplitWrap">
          <div className="homeSplitOrange">
            <div className="homeHolderBtn">
              <h2>Première Visite ?</h2>
              <Link to="/">
                <button> Commencer</button>
              </Link>
            </div>
            <h2>Tu connais la plate-forme ?</h2>
            <SearchBar />
            <button className="homeSearchButton"> Chercher</button>
          </div>
          <div className="homeSplitGreen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
