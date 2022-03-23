import axios from "axios";
import { Dialog } from "@reach/dialog";
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@reach/dialog/styles.css";
import "./Styles/Suppression.css";
import { ArticleContext } from "../context/ArticleContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SecteursContext } from "../context/SecteursContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";
import { VillesContext } from "../context/VillesContext";

function Suppression({ deleteData, page }) {
  let navigate = useNavigate();
  const { reloadArticle, setReloadArticle } = useContext(ArticleContext);

  const { reloadCategories, setReloadCategories } =
    useContext(CategoriesContext);

  const { reloadSecteurs, setReloadSecteurs } = useContext(SecteursContext);

  const { reloadSousCat, setReloadSousCat } = useContext(SousCategoriesContext);

  const { reloadVilles, setReloadVilles } = useContext(VillesContext);
  const handleDeletData = () => {
    axios
      .delete(`http://localhost:4242/${page}/${deleteData.id}`)
      .then((response) => console.log("RESPONSE REQUETE", response));
    setReloadArticle(!reloadArticle);
    setReloadCategories(!reloadCategories);
    setReloadSecteurs(!reloadSecteurs);
    setReloadSousCat(!reloadSousCat);
    setReloadVilles(!reloadVilles);
    navigate(-1);
  };
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
