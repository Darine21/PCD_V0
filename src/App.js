import React, {Component, Fragment,} from 'react';
import Contact from './Components/Connexion1/Contact';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sign from './Components/Sign/Signin';
import Signn from './Components/Sign/Signup';
import Home from './Pages/Home/Home'
 class App extends Component{
    render(){
      return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home/>}/> 
        </Routes>
        <Routes>
        <Route path="/contact" element={< Contact/>}/> 
        </Routes>
        <Routes>
        <Route path="/Signin" element={< Sign/>}/> 
        </Routes>
        <Routes>
        <Route path="/Signup" element={< Signn/>}/> 
        </Routes>
        </BrowserRouter>
       
        </> 
      );
    }
}

export default App;
