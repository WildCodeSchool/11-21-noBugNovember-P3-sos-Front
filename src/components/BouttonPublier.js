import "./Styles/BouttonPublier.css";
import { Link } from "react-router-dom";

const BouttonPublier = (props) => {
  const { article, collectDatas } = props;

  return (
    <div>
      <Link to="/">
        <button onClick={collectDatas} className="button2 adminButton">
          Publier l'article
        </button>
      </Link>
    </div>
  );
};
export default BouttonPublier;
