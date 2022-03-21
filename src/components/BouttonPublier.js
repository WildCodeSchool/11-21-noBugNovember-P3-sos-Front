import './Styles/BouttonPublier.css'
import axios from "axios"

const BouttonPublier = (props) => {
  const {article,collectDatas}=props

  return (
    <div>
      <button
        onClick={collectDatas}
        className="button2 adminButton"
        >Publier l'article
      </button>
    </div>
  )
}
export default BouttonPublier
