import './Styles/ListArticles.css'
// import iconemodifier from '../assets/icones/Edit.png'
// import iconesupprimer from '../assets/icones/Delete.png'
// import iconevisibilite from '../assets/icones/VisibleEye.png'

import NewTable from './NewTable';
import BarreRechercheArticles from './BarreRechercheArticles';

const ListArticles = ()=> {
  return (
<>
    <h2 className='bjr-user'>Bonjour [userName],</h2>
    <div className='bloc-content-column'>
      <h3 className="titreMenu">Liste des articles</h3>

<BarreRechercheArticles />
<NewTable />

</div>
</>
  )
}
export default ListArticles;