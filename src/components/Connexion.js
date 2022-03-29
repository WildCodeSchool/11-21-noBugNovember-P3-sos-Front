import './Styles/Connexion.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Connexion = () => {
  return (
    <>
      <img src={logo} alt='logoconnexion' className='logoconnexion' />
      <div className='bloc-login'>
        <form className='login-access'>
          <h1>ACCES ADMIN</h1>
          <input
            placeholder='Email'
            type='email'
            className='input-login-email button2'
          />
          <input
            placeholder='Mot de passe'
            type='password'
            className='input-login-pass button2'
          />
          <Link to='/admin-controler/articles'>
            <button className='button2 btnOrange'>Connexion</button>
          </Link>
          <Link to='/admin-controler' className='forgotten-password'>
            mot de passe oublié ?
          </Link>
        </form>
      </div>
    </>
  )
}
export default Connexion
