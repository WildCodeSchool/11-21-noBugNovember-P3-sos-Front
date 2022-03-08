import './Styles/ArticlesGrid.css'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import CarouselCat from '../components/CarouselCat.js'
import CardArticle from '../components/CardArticle.js'
import Header from '../components/Header.js'
import SearchBar from '../components/SearchBar.js'

import { ArticleContext } from '../context/ArticleContext'

const ArticlesGrid = () => {
  const { articles } = useContext(ArticleContext)

  return (
    <>
      <Header />
      <div className='articleGridBgGreen'>
        {' '}
        <div className='articleGridHolderSearchBar'>
          <div className='articleGridSearchBar'>
            <SearchBar />
            <CarouselCat />
          </div>
        </div>
        {articles.map((result, id) => {
          return (
            <Link to={`articleDetail/${result.id_article}`}>
              <CardArticle
                key={result.id_article}
                id={result.id_article}
                titre={result.titre}
                intro={result.intro}
                image={result.image}
                para1={result.para1}
                nom_ville={result.nom_ville}
                nom_region={result.nom_region}
                nom_categorie={result.nom_categorie}
                nom_sous_categorie={result.nom_sous_categorie}
                nom_secteur={result.nom_secteur}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ArticlesGrid
