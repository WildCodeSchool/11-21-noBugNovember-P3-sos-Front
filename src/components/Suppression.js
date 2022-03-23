import axios from "axios";
import { Dialog } from "@reach/dialog";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@reach/dialog/styles.css";
import "./Styles/Suppression.css";

function Suppression({ deleteData, page }) {
  let navigate = useNavigate();

  const handleDeletData = () => {
    axios
      .delete(`http://localhost:4242/${page}/${deleteData.id}`)
      .then((response) => console.log("RESPONSE REQUETE", response));
  };
  console.log(deleteData.id);
  return (
    <Dialog>
      {" "}
      <div className="fragmentContainer">
        <div className="backContainerAdmin" onClick={() => navigate(-1)}></div>
        <div className="popUpModalDelet">
          <div className="modalContainer">
            <h2>Êtes-vous sûr de vouloir supprimer {deleteData.value} ?</h2>
            <div className="buttonModalDelet">
              <button className="buttonGreen" onClick={() => navigate(-1)}>
                Retour
              </button>
              <button className="buttonGreen" onClick={() => handleDeletData()}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Suppression;
