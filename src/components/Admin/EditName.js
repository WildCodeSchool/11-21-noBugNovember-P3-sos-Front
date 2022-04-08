//*IMPORT CSS//*
import "@reach/dialog/styles.css";
import "./Styles/EditName.css";

//*IMPORT REACT//*
import axios from "axios";
import { Dialog } from "@reach/dialog";
import React, { useContext, useState } from "react"; //Modif par le STATE
import { useNavigate } from "react-router-dom";
import Select from "../Client/Select";

//*IMPORT CONTEXTS //*
import { CategoriesContext } from "../../context/CategoriesContext";
import { SousCategoriesContext } from "../../context/SousCategoriesContext";
import { SecteursContext } from "../../context/SecteursContext";
import { VillesContext } from "../../context/VillesContext";

function EditName({
  deleteData,
  page,
  edit,
  select,
  name,
  result,
  value2,
  set,
  edit2,
}) {
  let navigate = useNavigate();

  // Reload
  const { reloadCategories, setReloadCategories } =
    useContext(CategoriesContext);
  const { reloadSecteurs, setReloadSecteurs } = useContext(SecteursContext);
  const { reloadSousCat, setReloadSousCat } = useContext(SousCategoriesContext);
  const { reloadVilles, setReloadVilles } = useContext(VillesContext);

  const handleEditName = () => {
    axios
      .put(`http://localhost:4242/${page}/${deleteData.id}`, {
        [edit]: nouvelleAppelation,
        [edit2]: value2,
      }) // les [] permettent de recuperer la valeur de la key edit
      .then((response) => console.log("RESPONSE REQUETE", response));
    setReloadCategories(!reloadCategories);
    setReloadSecteurs(!reloadSecteurs);
    setReloadSousCat(!reloadSousCat);
    setReloadVilles(!reloadVilles);
    navigate(-1);
  };

  /* MODIF DE L INPUT A LA SAISIE*/
  const [nouvelleAppelation, setNouvelleAppelation] = useState(
    deleteData.value
  );

  //Que deviens nouvelle appelation ?

  const handleChangeEdit = (e) => {
    setNouvelleAppelation(e.target.value);
  };
  // generique A METTRE ICI pour reprendre chaque element a modifier, nom_cat, sous cat, secteur ville

  return (
    <Dialog>
      {" "}
      <div className="fragmentContainer">
        <div className="backContainerAdmin" onClick={() => navigate(-1)}></div>
        <div className="popUpModalEdit">
          <div className="modalContainer">
            <h2>Changer d'appelation</h2>
            <div className="holderChangeValue">
              <input
                type="text"
                name="changement"
                id="changeValue"
                onChange={handleChangeEdit}
                placeholder={deleteData.value}
              />
            </div>

            {select && (
              <Select
                name={`Séléctionner ${name}`}
                result={result}
                value={value2}
                set={set}
              />
            )}

            <div className="buttonModalDelet">
              <button className="buttonGreen" onClick={() => navigate(-1)}>
                Annuler
              </button>

              <button
                className="buttonGreen"
                onClick={() => handleEditName(edit)}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default EditName;
