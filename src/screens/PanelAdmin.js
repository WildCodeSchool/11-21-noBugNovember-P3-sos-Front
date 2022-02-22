import './Styles/PanelAdmin.css'
import ArticleForm from "../components/ArticleForm";
const PanelAdmin =()=>{
    return (
        <div className='panel-admin-container'>
            <div className='side-bar'>
              <div className='bloc-btn-side-bar'>
                <button className='btn-side-bar'>Catégories</button>
                <button className='btn-side-bar'>Sous-Catégories</button>
                <button className='btn-side-bar'>Villes</button>
                <button className='btn-side-bar'>Articles</button>
              </div>
            </div>
            <div className='content-container'>
                <ArticleForm />
            </div>
        </div>
    )
}
export default PanelAdmin