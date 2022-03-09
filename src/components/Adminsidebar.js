import React from 'react'
import logo from '../assets/logoW.png'
import { Link } from 'react-router-dom'
import './Styles/Adminsidebar.css'

function Adminsidebar() {
  return (
    <div>
      <div className='side-bar'>
        <img className='logo-panel' src={logo} alt='logo panel' />
        <div className='bloc-link-side-bar'>
          <Link to='/ArticleForm'>Les articles</Link>
          <Link to=''>Les catégories</Link>
          <Link to=''>Les sous-catégories</Link>
          <Link to=''>Les villes</Link>
        </div>
      </div>
    </div>
  )
}

export default Adminsidebar
