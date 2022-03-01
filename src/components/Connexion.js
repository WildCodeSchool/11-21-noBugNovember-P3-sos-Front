import './Styles/Connexion.css'
import { Link } from 'react-router-dom'

const Connexion = ()=> {
    return (
        <>
        <h2 className='bjr-user'>Bonjour ,</h2>
        <div className="bloc-login">
            
            <form className="login-access">
                <h1>ACCES ADMIN</h1>               
                <input placeholder="Email" type='email' className="input-login-email button2"/>
                <input placeholder="Mot de passe" type='password' className="input-login-pass button2" />                
                <button className='button2 btnOrange'>Connexion</button>
                <Link to="/admin-controler" className="forgotten-password">mot de passe oublié ?</Link>
                {/* Link a mettre ici */}
</form> 
     </div>
    </>)
}
export default Connexion