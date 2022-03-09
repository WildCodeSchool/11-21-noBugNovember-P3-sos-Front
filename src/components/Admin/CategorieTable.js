import React from "react";
import "./Styles/NewTable.css";
import iconemodifier from "../assets/icones/Edit.png";
import iconesupprimer from "../assets/icones/PoubellePleine.png";
import iconevisibilite from "../assets/icones/VisibleEye.png";

function NewTable() {
  return (
    <>
      <table class="customTable">
        <thead className="tableau-titres">
          <tr>
            <th className="colonnedestitres">Nom</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="tableau-contenu">
          <tr className="tableau-contenu-ligne">
            <td className="colonnedestitres">Nom de la categorie</td>
            <td id="colonnedeslogos">
              <img
                src={iconemodifier}
                alt="modifier"
                className="iconesActions"
              />
              <img
                src={iconesupprimer}
                alt="supprimer"
                className="iconesActions"
              />
              <img
                src={iconevisibilite}
                alt="visibilité"
                className="iconesActions"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default NewTable;
