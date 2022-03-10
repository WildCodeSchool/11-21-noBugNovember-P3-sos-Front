import './Styles/ArticleForm.css'
import {useState, useEffect, useRef} from "react";
import TinyArticle from './TinyArticle'
import axios from 'axios'
import Select, { StylesConfig }from 'react-select'

import BouttonPublier from './BouttonPublier';


// STYLES CONFIG SELECT
const colourStyles: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: 'white',  width: "20vw", padding: ".5rem"
  //  height: "5rem" FOU LE BORDEL
   }),
};
const ArticleForm=()=>{
    const [article,setArticle]=useState({title:"",
      intro:"",
      urlImg:"",
      textArticle:"",
      // type:'1',
      urlTelechargement:'',
      secteur:'',
      categorie:'',
      scat:'',
      ville:''
    })
  const [selectSecteur,setSelectSecteur]=useState()
  const [selectVille, setSelectVille]=useState()
  const [selectCategorie,setSelectCategorie]=useState()
  const [selectSousCategorie,setSelectSousCategorie]=useState()

  const [articleAvantage,setArticleAvantage]=useState('Aucun')
  const [articleLien1,setArticleLien1]=useState('')
  const [articleLien2,setArticleLien2]=useState('')
  const [articleLien3,setArticleLien3]=useState('')

  const [chooseSelectCategorie,setChooseSelectCategorie]= useState()
  const [chooseSelectSousCategorie, setChooseSelectSousCategorie] = useState([])
  const [chooseSelectSecteur, setChooseSelectSecteur] = useState([])
  const [chooseSelectVille, setChooseSelectVille] = useState([])

  // *********************************REF**************************************
  const articleTitle=useRef()
  const articleIntro=useRef()
  const articleUrlImg=useRef()
  const articleUrlTelechargment=useRef()
  const articleText=useRef()
  const articleCategorie=useRef()
  const articleScat=useRef()
  const articleSecteur=useRef('')
  const articleVille=useRef()
  // const articleLien1=useRef('')
  const articleSousCategorie=useRef('')
  //***************************************************************************
  const collectDatas = (event) => {
      event.preventDefault()
    setArticle({
      titre:articleTitle,
      intro:articleIntro,
      para1:articleText,
      avantage:articleAvantage,
      lien1:articleLien1,
      lien2:articleLien2,
      lien3:articleLien3,
      image:articleUrlImg,
      visible:false,
      categorie:chooseSelectCategorie,
      user_id:1,
      scat:chooseSelectSousCategorie,
      secteur:chooseSelectSecteur,
      ville:chooseSelectVille
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
  const handleChangeLien1=(e)=>{
    articleLien1.current=e.target.value
  }
  const handleChangeText=(e)=>{
    articleText.current=e.target.value
  }

  const handleChangeCategorie=(value)=>{

    const {id}=value
    console.log('VALUEEEEEEEEEEE',id)
    setChooseSelectCategorie(id)
  }
  const handleChangeSecteur=(value)=>{
    let extractedValue=[]
      for (let i =0; i< value.length ;i++){
        extractedValue.push(value[i].id)
      }
      setChooseSelectSecteur(extractedValue)
  }
  const handleChangeSousCategorie=(value)=>{
    let extractedValue=[]
    for (let i =0; i< value.length ;i++){
      extractedValue.push(value[i].id)
    }
    setChooseSelectSousCategorie(extractedValue)
  }
  const handleChangeVille=(value)=>{
    let extractedValue=[]
    for (let i =0; i< value.length ;i++){
      extractedValue.push(value[i].id)
    }
    setChooseSelectVille(extractedValue)
  }
  useEffect(()=>{
    axios.get('http://localhost:4242/secteurs').then(response=> setSelectSecteur(response.data))
    axios.get('http://localhost:4242/categories').then(response=> setSelectCategorie(response.data))
    axios.get('http://localhost:4242/sousCategories').then(response=> setSelectSousCategorie(response.data))
    axios.get('http://localhost:4242/villes').then(response=> setSelectVille(response.data))
  },[])
    return(
<>
<h2 className='bjr-user'>Bonjour [userName],</h2>
  <div className="articles-and-types">

{/* BLOC DE GAUCHE = ARTICLE */}
      <form className="bloc-content-row">
        <div className="bloc-article">
        
          <h3 className="titreMenu">Nouvel article</h3>

          <div className='article-form'>
            <input className='input-article-title' placeholder="Titre de l'article"  ref={articleTitle} onChange={handleChangeTitle}/>
            <input className='input-article-intro' placeholder="Intro de l'article" ref={articleIntro} onChange={handleChangeIntro}/>
            <input placeholder="Url de l'image" ref={articleUrlImg} onChange={handleChangeUrlImg}/>
            <TinyArticle  articleText={articleText} />
            <input className='input-article-intro' placeholder="Texte présentant les avantages de l'article" /*ref={articleAvantage} onChange={handleChangeAvantage}*/ />

            <input placeholder='URL du lien à télécharger N°1'  onChange={handleChangeLien1}/>
            <input placeholder='URL du lien à télécharger N°2' /*ref={articleUrlTelechargment2} onChange={handleChangeUrlTelechargement2}*//>
            <input placeholder='URL du lien à télécharger N°3' /*ref={articleUrlTelechargment3} onChange={handleChangeUrlTelechargement3}/*//>
          </div>
        </div>

        <div className="types-articles">
          <h3 className="titreMenu">Type d'article</h3>
            <div className="bloc-deroulant-publier">
              <div className="drop-down-type">
                <div className="selectDiv">
                  <Select
                    ref={articleCategorie}
                    placeholder="Choix de la catégorie"
                    options={selectCategorie}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value)=>handleChangeCategorie(value)}
                    styles={colourStyles}
                    theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'rgba(228, 144, 114, 0.659)',
                      primary: 'rgba(228, 144, 114, 0.659)',
                    },
                  })}/>
                </div>

               <div className="selectDiv">
                <Select
                  isMulti
                  placeholder="Choix de sous-catégorie(s)"
                  options={selectSousCategorie}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  closeMenuOnSelect={true}
                  onChange={(value) => handleChangeSousCategorie(value)}
                  styles={colourStyles}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'rgba(228, 144, 114, 0.659)',
                      primary: 'rgba(228, 144, 114, 0.659)',
                    },
                })}/>
                </div>
                <div className="selectDiv">
                  <Select
                    isMulti
                    placeholder="Choix de secteur(s)"
                    options={selectSecteur}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value)=>handleChangeSecteur(value)}
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(228, 144, 114, 0.659)',
                        primary: 'rgba(228, 144, 114, 0.659)',
                      },
                    })}/>
                </div>
                <div className="selectDiv">
                  <Select
                    isMulti
                    placeholder="Choix de ville(s)"
                    options={selectVille}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={true}
                    onChange={(value) => handleChangeVille(value)}
                    styles={colourStyles}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: 'rgba(228, 144, 114, 0.659)',
                        primary: 'rgba(228, 144, 114, 0.659)',
                      },
                  })}/>
                </div>
              </div>
            <BouttonPublier article={article} collectDatas={collectDatas}/>
          </div>
        </div>
        </form>
    </div>
</> 
    )
}
export default ArticleForm