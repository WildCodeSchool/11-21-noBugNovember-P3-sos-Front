import Header from '../components/Header.js'
import CardArticle from '../components/CardArticle.js'
import CarouselCat from '../components/CarouselCat.js'
import SearchBar from '../components/SearchBar.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Styles/ArticlesGrid.css'

function Articles() {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4242/articles').then((response) => {
      setResults(response.data)

      console.log(results)
    })
  }, [])
  return (
    <>
      <Header />
      <div className='articleGridBgGreen'>
        <div className='articleGridHolderSearchBar'>
          <div className='articleGridSearchBar'>
            <SearchBar />
            <CarouselCat />
          </div>
        </div>
        {results.map((result, id) => {
          return (
            <CardArticle
              id={id}
              titre={result.titre}
              intro={result.intro}
              image={result.image}
              para1={result.para1}
              para2={result.para2}
              para3={result.para3}
              nom_ville={result.nom_ville}
              nom_region={result.nom_region}
              nom_categorie={result.nom_categorie}
              nom_sous_categorie={result.nom_sous_categorie}
              nom_secteur={result.nom_secteur}
            />
          )
        })}
      </div>
    </>
  )
}

export default Articles
