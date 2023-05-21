import logo from '../assets/logo.png';
import '../style/Pages/SignIn.css';

/*
Function for sign in screen : 
print logo of laboratory 
*/

function SignIn() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} />
      </div>
    <div className='signIn'>
      <h1>Connexion</h1>
    </div>
    </div>
  );
}

export default SignIn;