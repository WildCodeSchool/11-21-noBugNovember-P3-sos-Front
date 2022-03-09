import './Styles/SearchBar.css'

const SearchBar = () => {
  return (
    <div className='holderSearchBar'>
      <div className='SearchBar'>
        <input type='text' name='searchBar' placeholder='Rechercher'></input>

        <select name='citySelect' id='citySelect'>
          <option value='' disabled selected hidden>
            Ville
          </option>
          <option value='Grenoble'>Grenoble</option>
          <option value='Paris'>Paris</option>
        </select>
        <select name='catSelect' id='catSelect'>
          <option value='' disabled selected hidden>
            Catégories
          </option>
          <option value='Grenoble'>Jeunesse</option>
          <option value='Pré-incubation'>Pré-incubation</option>
          <option value='Ideation'>Ideation</option>
          <option value='Amorçage'>Amorçage</option>
          <option value='Outils de gestions'>Outils de gestions</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
