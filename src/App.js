import React,{useState,useEffect} from 'react';
import NavBar from './Components/MainHeader/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store';
import Login from './Components/Login/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn") == 1)
    {

    setIsLoggedIn(true)
    }
  })



  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
  
    localStorage.setItem("isLoggedIn",1);

    setIsLoggedIn(true);
  };
  return (
    <Router>
   <NavBar isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/store' element={<Store isLoggedIn={isLoggedIn}/>} />
      <Route path='/login' element={<Login onLogin ={loginHandler}/>} />
      {/* <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/sign-up' component={SignUp} /> */}
    </Routes>
  </Router>
    
   
    
  );
}

export default App;
