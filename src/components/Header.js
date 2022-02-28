import '../screens/Styles/Home.css'

function Header() {
  return (
    <div>
      <div className='wrapperLogo'>
        <div className='logoHolder'>
          <img
            src={require('../assets/logo.png')}
            alt='logo Sos jeunes pousses'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
