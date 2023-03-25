import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';
function signup (){
    return(
    
       
        < div className="in">
            <h1 className="tiltle1">
               Connexion / Sign up 
            </h1> 
       
           <h2 className="é2">As begin</h2>
           <Link to={"/doctor"} >
        <button className="bbb">
         Doctor
        </button>
        </Link >
        <Link to={"/patient"}>
        <button className="pp">Patient</button>
        </Link>
        </div>
       
    
    );

    
}
export default signup ;
