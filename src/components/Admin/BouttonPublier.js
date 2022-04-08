import "./Styles/BouttonPublier.css";
import { Link } from "react-router-dom";

const BouttonPublier = ( { article, collectDatas, type }) => {


  return (
    <div>
      <Link to="/">
        <button onClick={collectDatas} className="button2 adminButton">
          {type} l'article
        </button>
      </Link>
    </div>
  );
};
export default BouttonPublier;
