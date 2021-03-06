import './Styles/CardArticle.css'

const CardArticle = (props) => {
  return (
    <div>
      <div className='cardHolder'>
        <div
          className={`cardDetails ${
            props.id % 2 === 0 ? 'leftAlignCard' : 'rightAlignCard'
          }`}
        >
          <div
            className={`imgCard ${
              props.id % 2 === 0 ? 'leftAlignImg' : 'rightAlignImg'
            }`}
          >
            <img src={props.image} alt={props.titre} />
          </div>
          <div className='holderContent'>
            <h2>{props.titre}</h2>
            <p>{props.intro}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardArticle
