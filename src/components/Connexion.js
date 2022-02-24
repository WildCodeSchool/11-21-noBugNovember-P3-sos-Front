import './Styles/Connexion.css'
const Connexion = ()=> {
    return (
        <div className='connexion-container'>
          <h2 className='bjr-user'>Bonjour,</h2>
            <form className="connexion-container">                
                <input placeholder="Email" type='email'/>
                <input placeholder="Mot de passe" type='password' />                
            </form> 
            <button className='btnOrange'>Connexion</button>            
        </div>
    )
}
export default Connexion