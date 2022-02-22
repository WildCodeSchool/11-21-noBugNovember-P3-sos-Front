import './CardsProjects.css';

const CardsProjects = ({
  id,
  named,
  released,
  rating,
  satured_color,
  dominant_color,
}) => {
  return (
    <div className='groupCards'>
      <div className='cardProjectContainer'>
        <h4 className='nameProject'>{named}</h4>
        <p className='pProject'>
          <ul>
            <li>Expert type: {released}</li>
            <li>Industry: {rating}</li>
            <li>Function: {id}</li>
            <li>Compagny: {released}</li>
            <li>Past Compagny: {satured_color}</li>
            <li>Languages: {dominant_color}</li>
            <li>Keywords: {named}</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default CardsProjects;
