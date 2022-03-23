import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SecteursContext } from "../../context/SecteursContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListeSecteur = (props) => {
  const { secteurs } = useContext(SecteursContext);
  const { setDeleteData } = props;
  let location = useLocation();
  return (
    <>
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des secteurs</h3>
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
                <div className="actionIcon">
                  <FontAwesomeIcon
                    icon={faPencil}
                    size="1x"
                    color="var(--clr-orange)"
                    className="editIcon"
                  />
                  <Link to="./modal" state={{ backgroundLocation: location }}>
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
            borderColor: "var(--clr-orange)",
            // backdropFilter: "blur(20px)",
            boxShadow: "5px 5px 5px var(--shadowColor)",
            width: "100%",
            padding: "8px",
            "& .MuiDataGrid-cell:hover": {},
          }}
          // rows={categories.name}
          onRowClick={(datas) => {
            setDeleteData(datas.row);
          }}
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
          ></input>
          <button className="button2 adminButton">Ajouter Secteur</button>
        </div>
      </div>
    </>
  );
};
export default ListeSecteur;
