import React from "react";
import { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TelechargementsContext } from "../../context/TelechargementsContext";

function ListeDonnees() {
  const { telechargements } = useContext(TelechargementsContext);
  return (
    <>
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour Rachid,</h2>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des utilisateurs</h3>
        <DataGrid
          style={{ height: 700 }}
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
              field: "nom_telechargement",
              headerName: "Nom",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "prenom_telechargement",
              headerName: "Prénom",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "mail_telechargement",
              headerName: "eMail",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "ville_telechargement",
              headerName: "Ville de téléchargement",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "titre",
              headerName: "Article téléchargé",
              headerClassName: "headerTableau",
              maxWidth: 400,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
          ]}
          sx={{
            //REGLAGE GENERAL DU TABLEAU
            fontFamily: "var(--ff-body)",
            fontSize: "var(--fs-body)",
            color: "var(--clr-green)",
            borderColor: "var(--clr-green)",
            // backdropFilter: "blur(20px)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            width: "100%",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          rows={telechargements}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
      </div>
    </>
  );
}

export default ListeDonnees;
