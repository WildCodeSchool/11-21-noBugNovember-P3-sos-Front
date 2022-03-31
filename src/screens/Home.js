import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import './Styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header />
      <div className='homeWrapper'>
        <div className='homeWrapRaw'>
          <h1>
            Les mêmes chances pour tous <br />
          </h1>
          <div className='homeSplitWrap'>
            <div className='homeSplitOrange'>
              <div className='homeHolderBtn'>
                <h2>Première Visite ?</h2>
                <Link to='/etapes'>
                  <button className=' buttonGreen'> Commencer</button>
                </Link>
              </div>
              <h2>Tu connais la plate-forme ?</h2>
              <SearchBar
                isVille={true}
                isSousCat={false}
                isCat={true}
                isButtonHome={true}
              />

              <Link to={'/articlesGrid'}>
                <button className='buttonGreen'>Chercher</button>
              </Link>
            </div>
            <div className='homeSplitGreen'>
              <div className='pHolder'>
                {' '}
                <p>
                  SOS JEUNES POUSSES vise à faciliter l’identification des
                  talents pour les assister dans la formulation et la
                  préparation de leur projet, à la création d’activité, à
                  renforcer l'accès à l’offre d’accompagnement en orientant les
                  candidats vers les dispositifs et acteurs de l'écosystème,
                  qu’ils soient porteurs de projets, créateurs ou en
                  reconversion professionnelle.{' '}
                </p>
                <p>
                  Notre mission: Sensibilisation, détection et préparation des
                  porteurs de projets perdus dans leurs parcours à agir et
                  contribuer aux initiatives locales solidaires et responsables.
                </p>
                <p>
                  À Entreprendre afin de naviguer dans les écosystème et
                  rééquilibrer les chances de cette population à accéder aux
                  informations et aux bons interlocuteurs pour leurs projets. Le
                  projet vise à les mettre en relation directe dans leurs
                  parcours de création d’activité, à être suivis de manière
                  optimale, à obtenir un référent, un point d’ancrage afin de
                  solliciter plus facilement l’écosystème territorial. Et
                  favoriser les coopérations entre acteurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
