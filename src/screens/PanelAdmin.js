import './Styles/PanelAdmin.css'
import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
const PanelAdmin =()=>{
    return (
        <div className='panel-admin-container'>
            <div className='side-bar'>
              <img className='logo-panel' src='' alt="logo panel"/>
              <div className='bloc-link-side-bar'>
                <Link to="/ArticleForm">Articles</Link>
                <Link to="">Catégories</Link>
                <Link to="">Sous-Catégories</Link>
                <Link to="">Villes</Link>
              </div>

            </div>
            <div className='content-container'>
                <ArticleForm />
            </div>
        </div>
    )
}
export default PanelAdmin