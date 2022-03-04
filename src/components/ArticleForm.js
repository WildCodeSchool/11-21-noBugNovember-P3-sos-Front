import './Styles/ArticleForm.css'
import {useState, useEffect, useRef} from "react";
import TinyArticle from './TinyArticle'
import axios from 'axios'
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
  const [selectSecteur,setSelectSecteur]=useState()
  const [selectCategorie,setSelectCategorie]=useState()
  const [selectSousCategorie,setSelectSousCategorie]=useState()
  // *********************************REF**************************************
  const articleTitle=useRef()
  const articleIntro=useRef()
  const articleUrlImg=useRef()
  const articleUrlTelechargment=useRef()
  const articleText=useRef()
  const articleType=useRef()
  const articleCategorie=useRef()
  const articleScat=useRef()
  const articleSecteur=useRef('1')
  //***************************************************************************
  const collectDatas = () => {
    setArticle({titre:articleTitle,
      intro:articleIntro,
      type:articleType,
      para1:articleText,
      image:articleUrlImg,
      lien2:articleUrlTelechargment,
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
  useEffect(()=>{
    axios.get('http://localhost:4242/secteurs').then(response=> setSelectSecteur(response.data))
    axios.get('http://localhost:4242/categories').then(response=> setSelectCategorie(response.data))
    axios.get('http://localhost:4242/sousCategories').then(response=> setSelectSousCategorie(response.data))

  },[])
    return(

<>
  <h2 className='bjr-user'>Bonjour [userName],</h2>
  <div className="articles-and-types">
    <div className="bloc-content-row">

{/* BLOC DE GAUCHE = ARTICLE */}

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
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
          <select name="secteur-opt" className="list-deroulante" ref={articleSecteur} onChange={handleChangeSecteur}>
            {selectSecteur?selectSecteur.map((secteur)=><option key={secteur.id_secteur}>{secteur.nom_secteur}</option>):""}
          </select>
          <select name="categorie-opt" className="list-deroulante" ref={articleCategorie} onChange={handleChangeCategorie}>
            {selectCategorie?selectCategorie.map((categorie)=><option key={categorie.id_categorie}>{categorie.nom_categorie}</option>):""}
          </select>
          <select name="scategorie-opt" className="list-deroulante" ref={articleScat} onChange={handleChangeScat}>
            {selectSousCategorie?selectSousCategorie.map((sousCategorie)=><option key={sousCategorie.id_sous_categorie}>{sousCategorie.nom_sous_categorie}</option>):""}
          </select>
        </form>
        <BouttonPublier article={article} collectDatas={collectDatas}/>
      </div>
    </div>
  </div>
  </div>
</> 

    )
}
export default ArticleForm