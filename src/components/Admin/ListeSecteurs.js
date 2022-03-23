import { DataGrid } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { SecteursContext } from "../../context/SecteursContext";
import axios from "axios";

const ListeSecteur = () => {
  const { secteurs } = useContext(SecteursContext);

  const [newSecteur, setNewSecteur] = useState("");

  const nouveauSecteur = () => {
    axios
      .post(`http://localhost:4242/secteurs`, { ...newSecteur })
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) =>
        console.error("---Erreur envoi secteur--- ", error.validationErrors)
      );
  };

  const handleChangeNewSecteur = (e) => {
    setNewSecteur({ nom_secteur: e.target.value });

    console.log(newSecteur);
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
        <h3 className="titreMenu">Liste des secteurs</h3>
        <DataGrid
          style={{ height: 500 }}
          columns={[
            {
              field: "value",
              headerName: "Secteur",
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
            borderColor: "var(--clr-orange)",
            // backdropFilter: "blur(20px)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            width: "100%",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          // rows={categories.name}
          rows={secteurs}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
        <div className="newCategoContent">
          <input
            className="newCategoInput"
            type="text"
            name="myInput"
            placeholder="Nouveau Secteur"
            size="30"
            required
            onChange={handleChangeNewSecteur}
          ></input>
          <button className="button2 adminButton" onClick={nouveauSecteur}>
            Ajouter Secteur
          </button>
        </div>
      </div>
    </>
  );
};
export default ListeSecteur;
