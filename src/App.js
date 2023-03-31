import React, {Component, Fragment,} from 'react';
import Contact from './Components/Connexion1/Contact';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Sign from './Components/Sign/Signin';
import Signn from './Components/Sign/Signup';
import Home from './Pages/Home/Home';
import Formupatient from './Components/Formulaire/Formulairepat';
import Formmedcien  from'./Components/Formulaire/Formumedcien';
import Bloc_Doctor from './Components/Doctor/Bloc_Doctor.js';
import Interface from './Components/Interface/interfacepa';
import Agenda from './Components/Agenda/Agenda';
import Liste from './Components/Liste/Liste.js';
import Msg from './Components/Mesangerie/Msg';
import Visit from './Components/Dossier/Dossier';
import Tarif from './Components/Money/Money';
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
        <Route path="/interface" element={< Interface/>}/> 
        </Routes>
        <Routes>
        <Route path="/agenda" element={< Agenda/>}/> 
        </Routes>
        <Routes>
        <Route path="/liste-patients" element={< Liste/>}/> 
        </Routes>
        <Routes>
        <Route path="/msg" element={< Msg/>}/> 
        </Routes>
        <Routes>
        <Route path="/tar" element={< Tarif />}/> 
        </Routes>
        <Routes>
        <Route path="/dossier" element={< Visit/>}/> 
        </Routes>
        </BrowserRouter>
       
        </> 
      );
    }
}

export default App;
