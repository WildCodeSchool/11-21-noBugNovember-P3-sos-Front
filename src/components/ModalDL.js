import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import { useContext } from "react";
import "@reach/dialog/styles.css";
import "./Styles/ModalDL.css";
import { VillesContext } from "../context/VillesContext";

function ModalDL() {
  let navigate = useNavigate();
  const { villes } = useContext(VillesContext);
  return (
    <Dialog>
      <div className="backContainer" onClick={() => navigate(-1)}></div>
      <div className="popUpModal">
        <div className="coordoneDl">
          <div className="nameDl">
            <input
              className="inputDl"
              type="text"
              name="lastname"
              placeholder="Prénom"
            ></input>
            <input
              className="inputDl"
              type="text"
              name="fistname"
              placeholder="Nom"
            ></input>
          </div>
          <input
            className="inputDl mailDl"
            type="text"
            name="mail"
            placeholder="Adresse email"
          ></input>
          <select className="inputDl citySelectDl" name="city" id="city-select">
            <option value="">Veuillez SELECTIONNER VOTRE VILLE</option>
            <option value="Grenoble">Grenoble</option>
          </select>
          <button className="buttonGreen">Telecharger</button>
        </div>
      </div>
    </Dialog>
  );
}

export default ModalDL;
