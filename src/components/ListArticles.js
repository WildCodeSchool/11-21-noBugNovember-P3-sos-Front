import './Styles/ListArticles.css'
// import iconemodifier from '../assets/icones/Edit.png'
// import iconesupprimer from '../assets/icones/Delete.png'
// import iconevisibilite from '../assets/icones/VisibleEye.png'

import NewTable from './NewTable';
import BarreRechercheArticles from './BarreRechercheArticles';

const ListArticles = ()=> {
  return (
    <div className='bloc-content-column'>
      <h3 className="titres-colonnes">Liste des articles</h3>

<BarreRechercheArticles />
<NewTable />

      {/* <div className="bloc-content-row">
        <div className="liste-articles liste-titre">Titre</div>
        <div className="liste-articles liste-categorie">Catégorie</div>
        <div className="liste-articles liste-souscategorie">Sous-catégorie</div>
        <div className="liste-articles liste-telechargement">Nb. Tél</div>
        <div className="liste-articles liste-actions">Actions</div>
      </div> */}










    {/* <div className='container-card'> */}

      {/* <div className='header-card'>
        <div className='item-header-card'>Titre</div>
        div.contenu
        <div className='item-header-card'>Catégorie</div>
        <div className='item-header-card'>Sous catégorie</div>
        <div className='item-header-card'>Nb Tél</div>
        <div className='item-header-card'>Actions</div>
      </div>
      <div className='list-cards'>
        <div className='card'></div>
        <div className='card'> </div>
      </div> */}

</div>

  )
}
export default ListArticles;