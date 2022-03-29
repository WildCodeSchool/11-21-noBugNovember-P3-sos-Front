import './Styles/Adminsidebar.css'
import logo from '../assets/logoW.png'
import { Link } from 'react-router-dom'

function Adminsidebar() {
  return (
    <div>
      <div className='side-bar'>
        <Link to='/'>
          <img className='logo-panel' src={logo} alt='logo panel' />
        </Link>
        <div className='bloc-link-side-bar'>
          <Link to='articleForm'>Publier un article</Link>
          <Link to='articles'>Les articles</Link>
          <Link to='categories'>Les catégories</Link>
          <Link to='sousCategories'>Les sous-catégories</Link>
          <Link to='secteurs'>Les secteurs</Link>
          <Link to='villes'>Les villes</Link>
          <Link to='donnes'>Les données</Link>
        </div>
      </div>
    </div>
  )
}

export default Adminsidebar
