import './Styles/Connexion.css'
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
                <div className="forgotten-password">mot de passe oublié ?</div>
                {/* Link a mettre ici */}
</form> 
     </div>
    </>)
}
export default Connexion