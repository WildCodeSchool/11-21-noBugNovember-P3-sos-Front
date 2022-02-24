import './Styles/ArticleForm.css'
import {useState} from "react";
const ArticleForm =()=>{
    const [article,setArticle]=useState({title:"",urlImg:"",textArticle:""})
    return(
      <div className='article-form-container'>
          <form className='article-form'>
            <label>
              Titre:
              <input className='input-article-title' placeholder="Titre de l'article" value={article.title}/>
            </label>
            <label>
              Url Image Bannière:
              <input placeholder="Url de l'image" value={article.urlImg}/>
            </label>
            <label>
              Article:
              <textarea value={article.textArticle}/>
            </label>
          </form>
      </div>
    )
}
export default ArticleForm