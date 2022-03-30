import {useContext} from 'react'
import Parcours from "../components/Parcours";
import "./Styles/FirstVisit.css";
import Header from "../components/Header.js";
import { VillesContext } from "../context/VillesContext";
import Select from '../components/Select'


const FirstVisit = () => {
  const {villes } = useContext(VillesContext)
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
          {/* <div className="WrapSearchBar">
            <h3>Selectionner</h3>
            <Select
          name={'Ville'}
          result={villes}
          />
          </div> */}
        </div>
        <Parcours />
      </div>
    </>
  );
};

export default FirstVisit;
