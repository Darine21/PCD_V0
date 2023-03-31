import React, {Component, Fragment,} from 'react';
import Contact from './Components/Connexion1/Contact';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sign from './Components/Sign/Signin';
import Signn from './Components/Sign/Signup';
import Home from './Pages/Home/Home';
import Formupatient from './Components/Formulaire/Formulairepat';
import Formmedcien from './Components/Formulaire/Formumedcien';
import Paccount from './Components/patient acount/Paccount';
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
        <Routes>
        <Route path="/doctor" element={< Formmedcien/>}/> 
        </Routes>
        <Routes>
        <Route path="/patient" element={< Formupatient/>}/> 
            </Routes> 
          <Routes>
               <Route exact path="/Paccount" element={<Paccount/>} />
          </Routes>
            
        </BrowserRouter>
       
        </> 
      );
    }
}

export default App;
