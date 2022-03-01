import './Styles/ArticleForm.css'
import {useState} from "react";
import TinyArticle from './TinyArticle'

import BouttonPublier from './BouttonPublier';


const ArticleForm=()=>{

    const [article,setArticle]=useState({title:"",urlImg:"",textArticle:""})
    return(
<>
<h2 className='bjr-user'>Bonjour Rachid,</h2>


          <div className="bloc-content-row">

{/* BLOC DE GAUCHE = ARTICLE */}

            <div className="bloc-article">
              <h3 className="titres-blocs">Nouvel article</h3>
              
              <form className='article-form'>

                
                  <input className='' placeholder="Titre de l'article" value={article.title} />

                  <input className='' placeholder="Intro de l'article" value={article.intro} />
                                                      
                  <input placeholder="Url de l'image" value={article.urlImg}/>


                  <TinyArticle setArticle={setArticle}/>
                  
                  <input placeholder='URL des liens à télécharger' value={article.urlTelechargement}/> 

              </form>
            </div>


{/* BLOC DE DROITE = TYPES D'ARTICLES */}
            <div className="types-articles">
            <h3 className="titres-blocs">Type d'articles</h3>

            <div className="bloc-deroulant-publier">
                <form className="drop-down-type">
                        <select name="type-opt" className="list-deroulante">
                          <option>Type 1</option>
                          <option>Type 2</option>
                          <option>Type 3</option>
                        </select>
                        <select name="secteur-opt" className="list-deroulante">
                          <option>Secteur 1</option>
                          <option>Secteur 2</option>
                          <option>Secteur 3</option>
                        </select>
                        <select name="categorie-opt" className="list-deroulante">
                          <option>Catégorie 1</option>
                          <option>Catégorie 2</option>
                          <option>Catégorie 3</option>
                        </select>
                        <select name="scategorie-opt" className="list-deroulante">
                          <option>Sous-Catégorie 1</option>
                          <option>Sous-Catégorie 2</option>
                          <option>Sous-Catégorie 3</option>
                        </select>
                </form>
                <BouttonPublier />
                </div>
            </div>



            </div>
            </>  
    )
}
export default ArticleForm