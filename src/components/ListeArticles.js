import './Styles/ListeArticles.css'
import {useState} from "react";

import BouttonPublier from './BouttonPublier';

const ArticleForm =()=>{
    const [search,setSearch]=useState({searchTitle:""})
    return(
      <div className='article-form-container'>
        <h2 className='bjr-user'>Bonjour Rachid,</h2>

          <div className="articles-and-types">
            
            <div className="bloc-article-list">
              <h3 className="titres-colonnes">Liste des articles</h3>
              
              <form className='search-bar-form'>
                
                <input type="search" name="searching" id="" className="button2 btnWhite" placeholder="Mots-clés" />
                
                <select name="categorie-opt" className="button2">
                  <option>Catégorie 1</option>
                  <option>Catégorie 2</option>
                  <option>Catégorie 3</option>
                </select>

                <select name="scategorie-opt" className="button2">
                  <option>Sous-Catégorie 1</option>
                  <option>Sous-Catégorie 2</option>
                  <option>Sous-Catégorie 3</option>
                </select>

                <select name="ville-opt" className="button2">
                  <option>Ville 1</option>
                  <option>Ville 2</option>
                  <option>Ville 3</option>
                </select>

                <button type="submit" className="button2 btnOrange">Lancer la recherche</button>

              </form>

              <div className="tableau">
                <div className="titres-tableau">
                  <div>Titre</div>
                  <div>Catégorie</div>
                  <div>Sous-catégorie</div>
                  <div>Downloads</div>
                  <div>Action</div>
                </div>
              </div>
              




            </div>

            
                



            </div>
          
      </div>
    )
}
export default ArticleForm