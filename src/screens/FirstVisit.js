//*IMPORT CSS//*
import './Styles/FirstVisit.css'

//*IMPORT REACT//*
import { useContext } from 'react'

//*IMPORT CONTEXTS //*
import { VillesContext } from '../context/VillesContext'

//*IMPORT COMPOSANTS //*
import Header from '../components/Header.js'
import Parcours from '../components/Parcours'

const FirstVisit = () => {
  const { villes } = useContext(VillesContext)
  return (
    <>
      <Header />
      <div className='wrapperFirstVisit'>
        <div className='wrapChild'>
          <h2>Le parcours type d'un porteur de projet</h2>
          <p>
            Clic sur une étape pour connaître les sous-catégories et les
            articles
          </p>
        </div>
        <Parcours />
      </div>
    </>
  )
}

export default FirstVisit
