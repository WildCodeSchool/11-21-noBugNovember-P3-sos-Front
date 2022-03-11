import "./Styles/ListeCategorie.css";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";

const ListeCategorie = () => {
  const { categories } = useContext(CategoriesContext);

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
          rows={categories}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
        <div className="newCategoContent">
          <input
            className="newCategoInput"
            type="text"
            name="myInput"
            placeholder="Nouvelle Catégorie"
            size="30"
            required
          ></input>
          <button className="button2 adminButton">Ajouter categorie</button>
        </div>
      </div>
    </>
  );
};
export default ListeCategorie;
