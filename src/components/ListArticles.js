import './Styles/ListArticles.css'
const ListArticles = ()=> {
  return (
    <div className='container-card'>
      <div className='header-card'>
        <div className='item-header-card'>Titre</div>
        <div className='item-header-card'>Catégorie</div>
        <div className='item-header-card'>Sous catégorie</div>
        <div className='item-header-card'>Nb Tél</div>
        <div className='item-header-card'>Actions</div>
      </div>
      <div className='list-cards'>
        <div className='card'></div>
        <div className='card'> </div>
      </div>
    </div>
  )
}
export default ListArticles;