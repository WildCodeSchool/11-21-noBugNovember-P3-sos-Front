import publishIcon from "../../assets/publish.svg";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import "./Styles/ListeArticles.css";

const ListArticles = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
        <Link to="../articleForm">
          <div className="publishContent">
            <img src={publishIcon} alt="publishIcon"></img>
          </div>
        </Link>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des articles</h3>
        <DataGrid
          style={{ height: 700 }}
          columns={[
            {
              key: "id_article",
              field: "titre",
              headerName: "Titre",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_categorie",
              headerName: "Catégorie",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_sous_categorie",
              headerName: "Sous-catégorie",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_ville",
              headerName: "Sous-catégorie",
              headerClassName: "headerTableau",
              minWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "download",
              headerName: "Downloads",
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
            fontFamily: "var(--ff-body)",
            fontSize: "2rem",
            color: "var(--clr-green)",
            borderColor: "var(--clr-orange)",
            // backdropFilter: "blur(20px)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          // rows={categories.name}
          rows={[]}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
        />
      </div>
    </>
  );
};
export default ListArticles;
