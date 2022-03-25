import publishIcon from "../../assets/publish.svg";
import "./Styles/ListeArticles.css";

import { ArticleContext } from "../../context/ArticleContext";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CategoriesContext } from "../../context/CategoriesContext";

const ListArticles = (props) => {
  const { setModifArticle } = props;
  const { articles } = useContext(ArticleContext);
  const { categorie } = useContext(CategoriesContext);
  const deleteArticle = (modifArticle) => {
    axios
      .delete(`http://localhost:4242/articles/${modifArticle.id}`)
      .then((response) => console.log("RESPONSE REQUETE", response))
      .catch((error) => console.error(error.validationErrors));
  };
  const collectData = (datas, setModifArticle) => {
    console.log("LISTE ARTICLES", categorie);
    setModifArticle(datas.row);
  };
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
              field: "id",
              headerName: "ID",
              headerClassName: "headerTableau",
              maxWidth: 50,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "titre",
              headerName: "Titre",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_categorie",
              headerName: "Catégorie",
              headerClassName: "headerTableau",
              maxWidth: 230,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_sous_categorie",
              headerName: "Sous-catégorie",
              headerClassName: "headerTableau",
              maxWidth: 230,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_secteur",
              headerName: "Secteur",
              headerClassName: "headerTableau",
              maxWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_vilMentorat , Networking , Ole",
              headerName: "Villes",
              headerClassName: "headerTableau",
              maxWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "nom_region",
              headerName: "Région",
              headerClassName: "headerTableau",
              maxWidth: 250,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "download",
              headerName: "Downloads",
              headerClassName: "headerTableau",
              maxWidth: 110,
              flex: 0.5,
              align: "left",
              headerAlign: "left",
            },
            {
              field: "action",
              headerName: "Action",
              headerClassName: "headerTableau",
              maxWidth: 300,
              flex: 0.5,
              align: "center",
              headerAlign: "center",
              renderCell: (field) => (
                <div className="actionIcon">
                  <Link to="/admin-controler/modification-article">
                    {/* Lien de renvoi page modif article/id specifique, mettre a jour l'id (params) */}
                    <FontAwesomeIcon
                      icon={faPencil}
                      size="1x"
                      color="var(--clr-orange)"
                      className="editIcon"
                    />
                  </Link>

                  <FontAwesomeIcon
                    icon={faTrash}
                    size="1x"
                    color="var(--clr-orange)"
                    className="deletIcon"
                    onClick={deleteArticle}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    size="1x"
                    color="var(--clr-orange)"
                    className="eyeIcon"
                  />
                </div>
              ),
            },
          ]}
          sx={{
            fontFamily: "var(--ff-body)",
            fontSize: "var(--fs-body)",
            color: "var(--clr-green)",
            borderColor: "var(--clr-green)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          // rows={categories.name}
          rows={articles && articles}
          rowsPerPageOptions={[5, 10, 20, 30, 50, 100]}
          pagination
          onRowClick={(datas) => collectData(datas.row)}
        />
      </div>
    </>
  );
};
export default ListArticles;
