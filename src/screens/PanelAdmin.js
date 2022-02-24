import './Styles/PanelAdmin.css'
import ArticleForm from "../components/ArticleForm";
const PanelAdmin =()=>{
    return (
        <div className='panel-admin-container'>
            <div className='side-bar'>test</div>
            <div className='content-container'>
                <ArticleForm />
            </div>
        </div>
    )
}
export default PanelAdmin