import React, {Component, Fragment,} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Welcome from '../../Components/Welcome/Welcome';
import Information from '../../Components/Information/Info';
import Footere from '../../Components/Footere/Footer';
import Bloc_Doctor from '../../Components/Doctor/Bloc_Doctor.js';
import Bar from '../../Components/Navvv/Bar';
import Howit from '../../Components/Howit/Howit';
import Sensabilisation from '../../Components/sen/ex';
import Sensabilisation2 from '../../Components/Sensabilisation/Sensabilisation';
 class Home extends Component{
    render(){
      return (
        <>
    < Navbar/>   
    < Welcome/>   
    < Information/>
    < Howit/>   
    < Bar/>  
    < Bloc_Doctor/>
    < Footere/>
    <Sensabilisation/>
    <Sensabilisation2/>
    
        </> 
      );
    }
}

export default Home;
