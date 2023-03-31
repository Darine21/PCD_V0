import React from "react";
import { Link } from "react-router-dom";
import './Signin.css';
function signin (){
    return(
    
       
    <form className="f">
        < div className="in">
            <h1 className="tiltle">
               Connexion / Sign in 
            </h1> 
        <div className="form-control">
            <input className="aa" placeholder="Your email"/>
            
        </div>
        <div  className="form-control">
            <input className="aa" placeholder="Your password"/>
            
        </div>
        <Link to={"/interface"}>
        < button className="bo" >
         sublimt
        </button>
        </Link>
        </div>
        </form>
    
    );

    
}
export default signin ;
