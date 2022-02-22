import CardProjectsList from './CardProjectsList';
import './Loader.css';

function Loader() {
  return (
    <div className='loader'>
      <div className='urgent'>
        <details>
          <summary>URGENT</summary>
          <CardProjectsList />
        </details>
        <hr />
      </div>

      <div className='tbeConfirmed'>
        <details>
          <summary>TO BE CONFIRMED BY OUR CLIENT</summary>
          <CardProjectsList />
        </details>
        <hr />
      </div>

      <div className='completed'>
        <details>
          <summary>COMPLETED</summary>
          <CardProjectsList />
        </details>
        <hr />
      </div>
    </div>
  );
}

export default Loader;
