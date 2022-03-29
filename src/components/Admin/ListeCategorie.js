//*IMPORT CSS ET ASSETS//*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Styles/ListeCategorie.css";

//*IMPORT REACT//*
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

//*IMPORT CONTEXT//*
import { CategoriesContext } from "../../context/CategoriesContext";

const ListeCategorie = ({ setDeleteData }) => {
  const { categories, reloadCategories, setReloadCategories } =
    useContext(CategoriesContext);
  const [newCategorie, setNewCategorie] = useState("");

  const nouvelleCategorie = () => {
    axios
      .post(`http://localhost:4242/categories`, { ...newCategorie })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .then(setReloadCategories(!reloadCategories))
      .catch((error) =>
        console.error("---Erreur envoi categorie--- ", error.validationErrors)
      );
  };

  const handleChangeNewCategorie = (e) => {
    setNewCategorie({ nom_categorie: e.target.value });

    console.log(newCategorie);
  };
  let location = useLocation();

  return (
    <>
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des categories</h3>
        <DataGrid
          style={{ height: 500 }} //, width: 800
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
              headerName: "Catégories",
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
                <div className="actionIcon2 ">
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
          rows={categories}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
        <div className="newCategoContent">
          <input
            className="newCategoInput"
            type="text"
            name="myInput"
            placeholder="Nouvelle catégorie"
            size="30"
            required
            onChange={handleChangeNewCategorie}
          ></input>

          <button className="button2 adminButton" onClick={nouvelleCategorie}>
            Ajouter catégorie
          </button>
        </div>
      </div>
    </>
  );
};
export default ListeCategorie;
