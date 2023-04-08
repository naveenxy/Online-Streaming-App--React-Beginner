import NavBar from './Components/MainHeader/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store';
function App() {
  return (
    <Router>
   <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store/>} />
      {/* <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/sign-up' component={SignUp} /> */}
    </Routes>
  </Router>
    
   
    
  );
}

export default App;
