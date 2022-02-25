import './Styles/ArticleForm.css'
import {useState} from "react";
const ArticleForm =()=>{
    const [article,setArticle]=useState({title:"",urlImg:"",textArticle:""})
    return(
      <div className='article-form-container'>

      <h1>Bonjour Rachid,</h1>

      <h2>Nouvel article</h2>

          <form className='article-form'>
            <label>
              <input className='input-article-title' placeholder="Titre de l'article" value={article.title}/>
            </label>
            <label>
              <input className='input-article-title' placeholder="Paragraphe d'introduction" value={article.intro}/>
            </label>
            <label>
              <input className='input-article-title' placeholder="URL de votre image" value={article.urlImg}/>
            </label>
            <label>
              <textarea className='input-article-title' placeholder="Texte de l'article" value={article.textArticle}/>
            </label><label>
              <input placeholder="Url du fichier à télécharger" value={article.urlDld}/>
            </label>
            
          </form>
      </div>
    )
}
export default ArticleForm