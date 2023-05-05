import { Routes, Route } from 'react-router-dom';

//import pages
import SignIn from './Pages/SignIn';


function App() {
 return (

  <Routes>
      <Route path='/signIn' element={<SignIn />}/>
  </Routes>

 );
}




export default App;