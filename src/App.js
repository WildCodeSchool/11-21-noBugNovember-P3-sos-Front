import logo from './logo.svg';
import './App.css';
import AdminHome from './screen/AdminHome';
import CardProjectsList from './components/CardProjectsList';
import Loader from './components/Loader';

function App() {
  return (
    <div className='App'>
      <AdminHome />
      <Loader />
    </div>
  );
}

export default App;
