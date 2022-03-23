import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import './Styles/Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'

const Home = () => {


  const {recupFilters} = useContext(ArticleContext)
  const {searchLaunch} = useContext(ArticleContext)
  return (
    <>
      <Header />
      <div className='homeWrapper'>
        <div className='homeWrapRaw'>
          <h1>
            Les mêmes chances pour tous <br />
            Découvrez ...
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
              <SearchBar isVille={true} isSousCat={false} isCat={true} />
              {/* <Link to="/articlesGrid" onClick ={() => recupFilters() }> */}
              <Link to="/articlesGrid" onClick ={() => searchLaunch() }>
                <button className="buttonGreen"> Chercher</button>
              </Link>
            </div>
            <div className='homeSplitGreen'>
              <div className='pHolder'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
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
