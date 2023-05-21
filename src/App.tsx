
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import pages
import SignIn from './Pages/SignIn';

// function w/ paths for routes
function App() {
    return (
        <>
        <Router>
       <Routes>
            
                <Route path='/signIn' element={<SignIn />} /> 
           
        </Routes>
        </Router>
        </>
    );
}

export default App;

