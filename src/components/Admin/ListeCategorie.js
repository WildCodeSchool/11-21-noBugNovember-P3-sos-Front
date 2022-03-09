import publishIcon from "../../assets/publish.svg";
import { Link } from "react-router-dom";
import TableauCategories from "./TableauCategories";

const ListArticles = () => {
  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
        <Link to="../articleForm">
          <img src={publishIcon} alt="publishIcon"></img>
        </Link>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des categories</h3>
        <TableauCategories />
      </div>
    </>
  );
};
export default ListArticles;
