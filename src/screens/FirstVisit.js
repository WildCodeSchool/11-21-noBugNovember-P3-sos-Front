import Parcours from "../components/Parcours";
import "./Styles/FirstVisit.css";
import Header from "../components/Header.js";

const FirstVisit = () => {
  return (
    <>
      <Header />
      <div className="wrapperFirstVisit">
        <div className="wrapChild">
          <h2>Le parcours type d'un porteur de projet</h2>
          <p>
            Clic sur une étape pour connaître les sous-catégories et les
            articles
          </p>
          <div className="WrapSearchBar">
            <h3>Selectionner</h3>
            <select>
              <option value="" disabled selected hidden>
                Ville
              </option>
              <option value="Grenoble">Grenoble</option>
              <option value="Paris">Paris</option>
            </select>
          </div>
          <button>Valider</button>
        </div>
        <Parcours />
      </div>
    </>
  );
};

export default FirstVisit;
