import './Styles/Header.css'
import { ArticleContext } from '../../context/ArticleContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

function Header() {
  const { resetSearch } = useContext(ArticleContext)

  return (
    <>
      <div className='headerWrapperLogo'>
        <div className='headerLogoHolder'>
          <Link to='/' onClick={() => resetSearch('')}>
            <img
              src={require('../../assets/logo.png')}
              alt='logo Sos jeunes pousses'
            />
          </Link>
        </div>
        <div className='sousNav'>
          <a
            href='https://linktr.ee/Sosjeunespousses'
            target='_blank'
            rel='noreferrer'
          >
            <div className='LinktreeLinks'>
              <h5>Contact</h5>
            </div>
          </a>
          <Link to='/cgu'>
            <h5>CGU</h5>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
