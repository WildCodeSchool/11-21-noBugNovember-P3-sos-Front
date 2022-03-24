import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { VillesContext } from "../../context/VillesContext";
import { RegionsContext } from "../../context/RegionsContext";


// RAJOUT DES IMPORTS POUR FAIRE LE LIEN AVEC VILLES
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

const ListeVilles = () => {
  const { villes } = useContext(VillesContext);

  const [newCity, setNewCity] = useState("");

  const nouvelleVille = () => {
    axios
      .post(`http://localhost:4242/villes`, { ...newCity })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error("---Erreur envoi villes--- ", error.validationErrors)
      );
  };

  const handleChangeNewCity = (e) => {
    setNewCity({ nom_ville: e.target.value, region_id: chooseSelectRegion });
    console.log("Nouvelle ville à inscrire", newCity);
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
      .get("http://localhost:4242/regions")
      .then((response) => setSelectRegion(response.data));
  }, []);

  // COLLECT ET ENVOI DES DONNEES
  const collectDatas = (event) => {
    event.preventDefault();
    setRegion({
      categorie_id: chooseSelectRegion,
      nom_sous_categorie: newCity,
      // Comment faire la connection categorie_id de sous cat ???
    });
    console.warn("COLLECT DATAS ======>", newCity);
    axios
      .post(`http://localhost:4242/souscategories`, { ...newCity })
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
        {/* <Link to="../articleForm">
          <img src={publishIcon} alt="publishIcon"></img>
        </Link> */}
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des villes</h3>
        <DataGrid
          style={{ height: 500 }}
          columns={[
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
          rows={villes}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />

        <div className="newCategoContent">
          {/* RAJOUT LISTE SELECT : Region */}
          <div className="selectDiv">
            {console.log(regions)}
            <Select
              placeholder="Région de rattachement"
              options={regions}
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
                placeholder="Nouvelle Sous-catégorie"
                size="30"
                required
                onChange={handleChangeNewCity}
              ></input>

              <button
                className="button2 adminSousCatButton"
                onClick={nouvelleVille}
                collectDatas={collectDatas}
                newCity={newCity}
              >
                Ajouter sous-categorie
              </button>
            </>
          ) : (
            ""
          )}
        </div>

        {/* <div className="newCategoContent">
          <input
            className="newCategoInput"
            type="text"
            name="myInput"
            placeholder="Nouvelle Ville"
            size="30"
            required
          ></input>
          <button className="button2 adminButton">Ajouter Ville</button>
        </div> */}
      </div>
    </>
  );
};
export default ListeVilles;
