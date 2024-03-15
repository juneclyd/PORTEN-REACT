import React from 'react';
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom';
import Switch from "react-switch";
import Home from './Components/Home'; 
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Like from './Components/Like';


function App() {
  return (
      <div className='app'>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Like' element={<Like/>}/>
              <Route element = {NotFound}/>
            </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
 