//*IMPORT CSS//*
import './Styles/FirstVisit.css'

//*IMPORT COMPOSANTS //*
import Header from '../components/Client/Header.js'
import Parcours from '../components/Client/Parcours'

const FirstVisit = () => {
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
