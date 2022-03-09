import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { VillesContext } from "../../context/VillesContext";

const ListeVilles = () => {
  const { villes } = useContext(VillesContext);

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
              field: "id",
              headerName: "ID",
              headerClassName: "headerTableau",
              width: 110,
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
                  class="fas fa-times-circle"
                ></i>
              ),
            },
          ]}
          sx={{
            //REGLAGE GENERAL DU TABLEAU
            fontFamily: "var(--ff-body)",
            fontSize: "2rem",
            color: "var(--clr-green)",
            borderColor: "var(--clr-orange)",
            // backdropFilter: "blur(20px)",
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
          <input
            className="newCategoInput"
            type="text"
            name="myInput"
            placeholder="Nouvelle Ville"
            size="30"
            required
          ></input>
          <button className="button2 adminButton">Ajouter Ville</button>
        </div>
      </div>
    </>
  );
};
export default ListeVilles;
