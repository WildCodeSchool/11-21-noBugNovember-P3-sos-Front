import Parcours from "../components/Parcours";
import "./Styles/FirstVisit.css";

const FirstVisit = () => {
  return (
    <>
      <div className="wrapperFirstVisit">
        <div className="logoHolder">
          <img
            src={require("../assets/logo.png")}
            alt="logo Sos jeunes pousses"
          />
        </div>
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
        </div>
        <Parcours />
      </div>
    </>
  );
};

export default FirstVisit;
