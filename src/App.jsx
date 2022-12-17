import MessagePage from './components/messagePage';
import LandingPage from './components/landingPage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='login' element={<LoginPage/>}></Route>
            <Route path='register' element={<RegisterPage/>}></Route>
            <Route path='msgPage' element={<MessagePage/>}></Route>
          </Routes>
      </Router>    
    </>
  );
}

export default App;
