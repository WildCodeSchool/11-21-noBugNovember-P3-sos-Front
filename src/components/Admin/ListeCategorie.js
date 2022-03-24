import "./Styles/ListeCategorie.css";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import axios from "axios";

const ListeCategorie = () => {
  const { categories } = useContext(CategoriesContext);

  const [newCategorie, setNewCategorie] = useState("");

  const nouvelleCategorie = () => {
    axios
      .post(`http://localhost:4242/categories`, { ...newCategorie })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error("---Erreur envoi categorie--- ", error.validationErrors)
      );
  };

  const handleChangeNewCategorie = (e) => {
    setNewCategorie({ nom_categorie: e.target.value });

    console.log(newCategorie);
  };

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
        <h3 className="titreMenu">Liste des categories</h3>
        <DataGrid
          style={{ height: 500 }}
          columns={[
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
              renderCell: (field) => <div className="actionIcon"></div>,
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
