import SearchBar from '../components/SearchBar'
import './Styles/Home.css'

const Home = () => {
  return (
    <div className='wrapperHome'>
      <div className='logoHolder'>
        <img
          src={require('../assets/logo.png')}
          alt='logo Sos jeunes pousses'
        />
      </div>
      <div className='wrapRaw'>
        <h1>
          Les mêmes chances pour tous <br />
          Découvrez ...
        </h1>
        <div className='splitWrap'>
          <div className='splitOrange'>
            <div className='holderBtn'>
              <h2>Première Visite ?</h2>
              <button> Commencer</button>
            </div>
            <h2>Tu connais la plate-forme ?</h2>
            <SearchBar />
            <button className='searchButton'> Chercher</button>
          </div>
          <div className='splitGreen'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
