import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { SousCategoriesContext } from "../../context/SousCategoriesContext";
import { CategoriesContext } from "../../context/CategoriesContext";

import "./Styles/ListeSousCat.css";
// RAJOUT DES IMPORTS POUR FAIRE LE LIEN AVEC CATG
import Select, { StylesConfig } from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";

// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "20vw",
    padding: ".5rem",
    //  height: "5rem" FOU LE BORDEL
  }),
};

const ListeSousCategories = () => {
  // PARTIE SOUS CATEGORIE

  const { sousCategories } = useContext(SousCategoriesContext);
  const [newSousCategorie, setNewSousCategorie] = useState("");

  const nouvelleSousCategorie = () => {
    axios
      .post(`http://localhost:4242/souscategories`, { ...newSousCategorie })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error(
          "---Erreur envoi sous-categorie--- ",
          error.validationErrors
        )
      );
  };

  const handleChangeNewSousCategorie = (e) => {
    setNewSousCategorie({ nom_sous_categorie: e.target.value,categorie_id: chooseSelectCategorie });
    console.log("Nouvelle sous categorie à inscrire",newSousCategorie);
  };

  // PARTIE CATEGORIE
  const { categories } = useContext(CategoriesContext);

  const [categorie, setCategorie] = useState({});

  const [selectCategorie, setSelectCategorie] = useState();
  const [chooseSelectCategorie, setChooseSelectCategorie] = useState();

  const handleChangeCategorie = (value) => {
    const { id } = value;
    setChooseSelectCategorie(id);
    console.log("Choix de sous categorie => l'Id correspondant :", id)
  };

  useEffect(() => {
    axios
      .get("http://localhost:4242/categories")
      .then((response) => setSelectCategorie(response.data));
  }, []);

  

  // COLLECT ET ENVOI DES DONNEES
  const collectDatas = (event) => {
    event.preventDefault();
    setCategorie({
      categorie_id: chooseSelectCategorie,
      nom_sous_categorie: newSousCategorie,
      // Comment faire la connection categorie_id de sous cat ???
    });
    console.warn("COLLECT DATAS ======>", newSousCategorie);
    axios
      .post(`http://localhost:4242/souscategories`, { ...newSousCategorie })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error("---Erreur envoi nouvelle catégorie--- ", error.validationErrors)
      );
  };
  // FIN DE LA COLLECTE

  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
        {/* <Link to="../articleForm">
          <img src={publishIcon} alt="publishIcon"></img>
        </Link> */}
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
              maxWidth: 50,
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
                <i
                /*onClick={() => console.log(field.id)}*/
                ></i>
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
          // rows={categories.name}
          rows={sousCategories}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
        <div className="newCategoContent">
          {/* RAJOUT LISTE SELECT : CATEGORIE */}
          {/* COMPLIQUE AVEC CE SELECT REACT voir avec SELECT DE LEO ET LYNDIA  */}
          <div className="selectDiv">
            <Select
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
          {chooseSelectCategorie?<><input
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
            collectDatas={collectDatas}
            newSousCategorie={newSousCategorie}
          >
            Ajouter sous-categorie
          </button></>:""}
          
        </div>
      </div>
    </>
  );
};
export default ListeSousCategories;
