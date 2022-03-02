import './Styles/ArticleForm.css'
import {useState, useEffect, useRef} from "react";
import TinyArticle from './TinyArticle'

import BouttonPublier from './BouttonPublier';


const ArticleForm=()=>{
    const [article,setArticle]=useState({title:"",
      intro:"",
      urlImg:"",
      textArticle:"",
      type:'1',
      urlTelechargement:'',
      secteur:'',
      categorie:'',
      scat:''
    })

  const articleTitle=useRef()
  const articleIntro=useRef()
  const articleUrlImg=useRef()
  const articleUrlTelechargment=useRef()
  const articleText=useRef()
  const articleType=useRef()
  const articleCategorie=useRef()
  const articleScat=useRef()
  const articleSecteur=useRef('1')

  const collectDatas = () => {
    setArticle({title:articleTitle,
      intro:articleIntro,
      urlImg:articleUrlImg,
      urlTelechargement:articleUrlTelechargment,
      textArticle:articleText,
      type:articleType,
      categorie:articleCategorie,
      secteur:articleSecteur,
      scat:articleScat
    })
    console.log(" ALL DATAS ",article)
  }
  const handleChangeTitle=(e)=>{
      articleTitle.current=e.target.value
  }
  const handleChangeIntro=(e)=>{
    articleIntro.current=e.target.value
  }
  const handleChangeUrlImg=(e)=>{
    articleUrlImg.current=e.target.value
  }
  const handleChangeUrlTelechargement=(e)=>{
    articleUrlTelechargment.current=e.target.value
  }
  const handleChangeText=(e)=>{
    articleText.current=e.target.value
  }
  const handleChangeType=(e)=>{
    articleType.current=e.target.value
  }
  const handleChangeCategorie=(e)=>{
    articleCategorie.current=e.target.value
  }
  const handleChangeScat=(e)=>{
    articleScat.current=e.target.value
  }
  const handleChangeSecteur=(e)=>{
    articleSecteur.current=e.target.value
  }
    return(
      <div className='article-form-container'>
        <h2 className='bjr-user'>Bonjour Rachid,</h2>
          <div className="articles-and-types">
            <div className="bloc-article">
              <h3 className="titres-colonnes">Nouvel article</h3>
              <form className='article-form'>
                  <input className='input-article-title' placeholder="Titre de l'article"  ref={articleTitle} onChange={handleChangeTitle}/>
                  <input className='input-article-intro' placeholder="Intro de l'article" ref={articleIntro} onChange={handleChangeIntro}/>
                  <input placeholder="Url de l'image" ref={articleUrlImg} onChange={handleChangeUrlImg}/>
                  <TinyArticle  articleText={articleText} />
                  <input placeholder='URL des liens à télécharger' ref={articleUrlTelechargment} onChange={handleChangeUrlTelechargement}/>
              </form>
            </div>
            <div className="types-articles">
              <h3 className="titres-colonnes">Type d'articles</h3>
              <div className="bloc-deroulant-publier">
                  <form className="drop-down-type">
                          <select name="type-opt" className="list-deroulante" ref={articleType} onChange={handleChangeType}>
                            <option value='1'>Type 1</option>
                            <option value='2'>Type 2</option>
                            <option value='3'>Type 3</option>
                          </select>
                          <select name="secteur-opt" className="list-deroulante" ref={articleSecteur} onChange={handleChangeSecteur}>
                            <option>Secteur 1</option>
                            <option>Secteur 2</option>
                            <option>Secteur 3</option>
                          </select>
                          <select name="categorie-opt" className="list-deroulante" ref={articleCategorie} onChange={handleChangeCategorie}>
                            <option>Catégorie 1</option>
                            <option>Catégorie 2</option>
                            <option>Catégorie 3</option>
                          </select>
                          <select name="scategorie-opt" className="list-deroulante" ref={articleScat} onChange={handleChangeScat}>
                            <option>Sous-Catégorie 1</option>
                            <option>Sous-Catégorie 2</option>
                            <option>Sous-Catégorie 3</option>
                          </select>
                  </form>
                  <BouttonPublier />
                  <button onClick={collectDatas}> recup datas</button>
                  </div>
            </div>
          </div>
      </div>
    )
}
export default ArticleForm