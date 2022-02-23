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
        </h1>
        <div className='splitWrap'>
          <div className='splitOrange'>
            <div className='holderBtn'>
              <h2>Premiere Visite ?</h2>
              <button> Commencer</button>{' '}
            </div>
            <div className='holderSearchBar'>
              <h2>Tu connais la plate-forme ?</h2>
              <div className='SearchBar'></div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
