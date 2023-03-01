import React, {Component, Fragment,} from 'react';
import Navbar from './Component/Nav/Navbar';
import './App.css'
import Welcome from './Component2/Welcome';
import Information from './Information/Info';
import Footere from './Footere/Footer';
import Bloc_Doctor from './Doctor/Bloc_Doctor.js';
import Bar from './Navvv/Bar'
import Howit from './Howit/Howit'
 class App extends Component{
    render(){
      return (
        <Fragment>
        < Navbar/>
        <Welcome/>
        <Information />
        <Bar/>
        <Bloc_Doctor/>
        <Howit/>
        <Footere/>
        
        </Fragment>  
      );
    }
}

export default App;
