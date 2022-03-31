//*IMPORT CSS//*
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//*IMPORT REACT//*
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import Select, { StylesConfig } from "react-select";
import { useContext, useState, useEffect } from "react";

//*IMPORT CONTEXTS //*
import { RegionsContext } from "../../context/RegionsContext";
import { VillesContext } from "../../context/VillesContext";

// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "20vw",
    padding: ".5rem",
  }),
};

const ListeVilles = (props) => {
  const { villes, reloadVilles, setReloadVilles } = useContext(VillesContext);
  const { setDeleteData } = props;
  let location = useLocation();

  const [newCity, setNewCity] = useState("");

  const nouvelleVille = () => {
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/villes`, {
        ...newCity,
      })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .then(setReloadVilles(!reloadVilles))
      .catch((error) =>
        console.error("---Erreur envoi villes--- ", error.validationErrors)
      );
    setNewCity("");
  };

  const handleChangeNewCity = (e) => {
    setNewCity({ nom_ville: e.target.value, region_id: chooseSelectRegion });
  };

  // PARTIE REGION
  const { regions } = useContext(RegionsContext);

  const [region, setRegion] = useState({});

  const [selectRegion, setSelectRegion] = useState();
  const [chooseSelectRegion, setChooseSelectRegion] = useState();

  const handleChangeRegion = (value) => {
    const { id } = value;
    setChooseSelectRegion(id);
    console.log("Choix de sous categorie => l'Id correspondant :", id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_PORT}/regions`)
      .then(
        (response) =>
          console.log(response.data) || setSelectRegion(response.data)
      );
  }, []);

  // COLLECT ET ENVOI DES DONNEES
  const collectDatas = (event) => {
    event.preventDefault();
    setRegion({
      categorie_id: chooseSelectRegion,
      nom_sous_categorie: newCity,
    });

    console.warn("COLLECT DATAS ======>", newCity);
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/souscategories`, {
        ...newCity,
      })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error(
          "---Erreur envoi nouvelle ville--- ",
          error.validationErrors
        )
      );
  };
  // FIN DE LA COLLECTE

  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des villes</h3>
        {/* {console.log("console log de ville : ", villes)} */}
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
              headerName: "Nom de Ville",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_region",
              headerName: "Région",
              headerClassName: "headerTableau",
              width: 110,
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
          // rows={categories.name}
          onRowClick={(datas) => {
            setDeleteData(datas.row);
          }}
          rows={villes}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />

        {/* RAJOUT LISTE SELECT : Region */}
        <div className="newCategoContent">
          <div className="selectDiv">
            {/* {console.log("voiccci mes regions ", regions)} */}
            <Select
              menuPlacement="top" // ouverture de liste vers le haut
              placeholder="Région de rattachement"
              options={selectRegion}
              className="basic-multi-select decalage-droit-input-1rem"
              classNamePrefix="select"
              closeMenuOnSelect={true}
              onChange={(value) => handleChangeRegion(value)}
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
          {/* FIN AJOUT LIST SELECT : Region */}
          {chooseSelectRegion ? (
            <>
              <input
                className="newCategoInput"
                type="text"
                name="myInput"
                placeholder="Nouvelle Ville"
                size="30"
                required
                onChange={handleChangeNewCity}
              />

              <button
                className="button2 adminSousCatButton"
                onClick={nouvelleVille}
                newCity={newCity}
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
export default ListeVilles;
