import React from 'react'
import './Styles/BarreRechercheArticles.css'

function BarreRechercheArticles() {
  return (
      <>
<form className='search-bar-form'>

<input type="search" name="searching" id="" className="button2 btnWhite" placeholder="Mots-clés" />

<select name="categorie-opt" className="button2">
  <option>Catégorie 1</option>
  <option>Catégorie 2</option>
  <option>Catégorie 3</option>
</select>

<select name="scategorie-opt" className="button2">
  <option>Sous-Catégorie 1</option>
  <option>Sous-Catégorie 2</option>
  <option>Sous-Catégorie 3</option>
</select>

<select name="ville-opt" className="button2">
  <option>Ville 1</option>
  <option>Ville 2</option>
  <option>Ville 3</option>
</select>

<button type="submit" className="button2 btnOrange">Lancer la recherche</button>

</form>  
</>)
}

export default BarreRechercheArticles