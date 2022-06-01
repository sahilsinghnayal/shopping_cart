import React from 'react';
import {  Route,  BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import Home from './Component/Home';
import Navbarcmp from './Component/Navbarcmp';


function App() {
  return (<> 
    <Router> 
      
     <Navbarcmp/>
      <Routes>
    
     <Route path="/" element={<Home/>} />
     <Route path="/cart" element={<Cart/>} />
     
     </Routes>
     </Router>
    </>
  );
}

export default App;
