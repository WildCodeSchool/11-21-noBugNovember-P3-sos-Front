//*IMPORT CSS//*
import '@reach/dialog/styles.css'
import './Styles/Suppression.css'

//*IMPORT REACT//*
import axios from 'axios'
import { Dialog } from '@reach/dialog'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//*IMPORT CONTEXTS //*
import { ArticleContext } from '../context/ArticleContext'
import { CategoriesContext } from '../context/CategoriesContext'
import { SecteursContext } from '../context/SecteursContext'
import { SousCategoriesContext } from '../context/SousCategoriesContext'
import { VillesContext } from '../context/VillesContext'

function Suppression({ deleteData, page, action }) {
  let navigate = useNavigate()
  const { reloadArticle, setReloadArticle } = useContext(ArticleContext)
  const { reloadCategories, setReloadCategories } =
    useContext(CategoriesContext)
  const { reloadSecteurs, setReloadSecteurs } = useContext(SecteursContext)
  const { reloadSousCat, setReloadSousCat } = useContext(SousCategoriesContext)
  const { reloadVilles, setReloadVilles } = useContext(VillesContext)

  const handleDeletData = () => {
    axios
      .delete(`http://localhost:4242/${page}/${deleteData.id}`)
      .then((response) => console.log('RESPONSE REQUETE', response))
      .then(
        setReloadArticle(!reloadArticle),
        setReloadCategories(!reloadCategories),
        setReloadSecteurs(!reloadSecteurs),
        setReloadSousCat(!reloadSousCat),
        setReloadVilles(!reloadVilles),
        navigate(-1)
      )
  }

  const putData = (bol) => {
    axios
      .put(`http://localhost:4242/articles/${deleteData.id}`, {
        visible: bol,
      })
      .then((response) => console.log('RESPONSE REQUETE', response))
  }
  const handleVisible = () => {
    deleteData && parseInt(deleteData.visible) === 1
      ? putData(false)
      : putData(true)
    setReloadArticle(!reloadArticle)
    navigate(-1)
  }

  return (
    <Dialog>
      <div className='fragmentContainer'>
        <div className='backContainerAdmin' onClick={() => navigate(-1)}></div>
        <div className='popUpModalDelet'>
          <div className='modalContainer'>
            <h2>
              Êtes-vous sûr de vouloir
              {action === 'supprimer' ? 'supprimer' : 'changer la visibilité'}
              {deleteData.value} ?
            </h2>
            <div className='buttonModalDelet'>
              <button className='buttonGreen' onClick={() => navigate(-1)}>
                Retour
              </button>
              {action === 'supprimer' && (
                <button
                  className='buttonGreen'
                  onClick={() => handleDeletData()}
                >
                  Supprimer
                </button>
              )}
              {action === 'visible' && (
                <button className='buttonGreen' onClick={() => handleVisible()}>
                  Valider
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Suppression
