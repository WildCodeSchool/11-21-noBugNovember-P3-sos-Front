import './Styles/BouttonPublier.css'
import axios from "axios"

const BouttonPublier = (props) => {
  const {article,collectDatas}=props
  const sendDatas = () =>{
    axios.post(`http://localhost:4242/articles/`,{article}).
      then(response=>console.log(response,article))
  }
  return (
      <div>
        <button  onClick={collectDatas} className="btn-forme btnOrange">Publier l'article</button>
      </div>
  )
}

export default BouttonPublier; 