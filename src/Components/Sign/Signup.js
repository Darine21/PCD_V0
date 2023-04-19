import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';
function signup (){
    return(
    
       
        < div class="form-item" id="signup">
            <h1 className="tiltle1">
                Sign up As 
            </h1> 
       
         
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
