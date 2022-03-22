import {useContext} from 'react';
import SearchBar from "../components/SearchBar";
import { ArticleContext } from "../context/ArticleContext";
import Header from "../components/Header";
import "./Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const {setIdArticle}=useContext(ArticleContext)
  const {handleCat}=useContext(ArticleContext)
  const {categorieChoice}=useContext(ArticleContext)
  const handleSearchClick=(id) =>{
  
    handleCat(id)
    setIdArticle(id)
  }

  return (
    <>
      <Header />
      <div className="homeWrapper">
        <div className="homeWrapRaw">
          <h1>
            Les mêmes chances pour tous <br />
            Découvrez ...
          </h1>
          <div className="homeSplitWrap">
            <div className="homeSplitOrange">
              <div className="homeHolderBtn">
                <h2>Première Visite ?</h2>
                <Link to="/etapes">
                  <button className=" buttonGreen"> Commencer</button>
                </Link>
              </div>
              <h2>Tu connais la plate-forme ?</h2>
              <SearchBar isVille={true} isSousCat={false} isCat={true} />
              <Link to="/articlesGrid">
                <button className="buttonGreen" onClick={handleSearchClick(categorieChoice)}> Chercher</button>
              </Link>
            </div>
            <div className="homeSplitGreen">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
