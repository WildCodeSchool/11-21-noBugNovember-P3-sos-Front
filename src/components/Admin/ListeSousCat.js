//*IMPORT CSS ET ASSETS//*
import "./Styles/ListeSousCat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//*IMPORT REACT//*
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import Select, { StylesConfig } from "react-select";
import { useState, useEffect, useContext } from "react";

//*IMPORT CONTEXT//*
import { SousCategoriesContext } from "../../context/SousCategoriesContext";

// RAJOUT DES IMPORTS POUR FAIRE LE LIEN AVEC CATG

// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "20vw",
    padding: ".5rem",
  }),
};

const ListeSousCategories = ({ setDeleteData }) => {
  // PARTIE SOUS CATEGORIE

  const { sousCategories, reloadSousCat, setReloadSousCat } = useContext(
    SousCategoriesContext
  );
  const [newSousCategorie, setNewSousCategorie] = useState("");

  let location = useLocation();

  const nouvelleSousCategorie = () => {
    axios
      .post(`http://localhost:4242/souscategories`, { ...newSousCategorie })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .then(setReloadSousCat(!reloadSousCat))
      .catch((error) =>
        console.error(
          "---Erreur envoi sous-categorie--- ",
          error.validationErrors
        )
      );
  };

  const handleChangeNewSousCategorie = (e) => {
    setNewSousCategorie({
      nom_sous_categorie: e.target.value,
      categorie_id: chooseSelectCategorie,
    });
    console.log("Nouvelle sous categorie à inscrire", newSousCategorie);
  };

  // PARTIE CATEGORIE

  const [selectCategorie, setSelectCategorie] = useState();
  const [chooseSelectCategorie, setChooseSelectCategorie] = useState();

  const handleChangeCategorie = (value) => {
    const { id } = value;
    setChooseSelectCategorie(id);
    console.log("Choix de sous categorie => l'Id correspondant :", id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/categories`)
      .then((response) => setSelectCategorie(response.data));
  }, []);

  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour Rachid,</h2>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des sous-categories</h3>
        <DataGrid
          style={{ height: 500 }}
          columns={[
            {
              field: "id",
              headerName: "ID",
              headerClassName: "headerTableau",
              maxWidth: 70,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "value",
              headerName: "Sous-catégories",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nomCat",
              headerName: "Catégories",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "value",
              headerName: "Sous-catégories",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "value",
              headerName: "Sous-catégories",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "action",
              headerName: "Action",
              headerClassName: "headerTableau",
              minWidth: 105,
              flex: 0.5,
              align: "center",
              headerAlign: "center",
              renderCell: (field) => (
                <div className="actionIcon2">
                  <Link
                    to="./modal/editer"
                    state={{ backgroundLocation: location }}
                  >
                    <FontAwesomeIcon
                      icon={faPencil}
                      size="1x"
                      color="var(--clr-orange)"
                      className="editIcon"
                    />
                  </Link>
                  <Link
                    to="./modal/supprimer"
                    state={{ backgroundLocation: location }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="1x"
                      color="var(--clr-orange)"
                      className="deletIcon"
                    />
                  </Link>
                </div>
              ),
            },
          ]}
          sx={{
            //REGLAGE GENERAL DU TABLEAU
            fontFamily: "var(--ff-body)",
            fontSize: "var(--fs-body)",
            color: "var(--clr-green)",
            borderColor: "var(--clr-green)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            width: "100%",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          onRowClick={(datas) => {
            setDeleteData(datas.row);
          }}
          rows={sousCategories}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
        <div className="newCategoContent">
          <div className="selectDiv">
            <Select
              menuPlacement="top"
              placeholder="Catégorie de rattachement"
              options={selectCategorie}
              className="basic-multi-select decalage-droit-input-1rem"
              classNamePrefix="select"
              closeMenuOnSelect={true}
              onChange={(value) => handleChangeCategorie(value)}
              styles={colourStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "rgba(228, 144, 114, 0.659)",
                  primary: "rgba(228, 144, 114, 0.659)",
                },
              })}
            />
          </div>
          {/* FIN AJOUT LIST SELECT : CATEGORIE */}
          {chooseSelectCategorie ? (
            <>
              <input
                className="newCategoInput"
                type="text"
                name="myInput"
                placeholder="Nouvelle Sous-catégorie"
                size="30"
                required
                onChange={handleChangeNewSousCategorie}
              ></input>

              <button
                className="button2 adminSousCatButton"
                onClick={nouvelleSousCategorie}
              >
                Ajouter sous-categorie
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default ListeSousCategories;
