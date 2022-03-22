import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./Styles/Suppression.css";

function Suppression() {
  let navigate = useNavigate();
  return (
    <Dialog>
      <div className="fragmentContainer">
        <div className="backContainerAdmin" onClick={() => navigate(-1)}></div>
        <div className="popUpModalDelet">
          <div className="modalContainer">
            <h2>Êtes-vous sûr de vouloir supprimer cet élément ?</h2>
            <div className="buttonModalDelet">
              <button className="buttonGreen" onClick={() => navigate(-1)}>
                Retour
              </button>
              <button className="buttonGreen">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Suppression;
