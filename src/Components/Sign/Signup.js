import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';
function signup (){
    return(
    <>
        
        < div className='containerrrrr' id="signup">
           
    
         <div>
           <Link to={"/doctor"} >
        <button style={{
            marginRight:"50px" , fontStyle: "italic" , color:"black"
          }} >
         Doctor
        </button>
                    </Link >
                    
        <Link to={"/patient"}>
        <button  style={{fontStyle: "italic" , color:"black"}}>Patient</button>
            </Link>
           </div> 
            </div>
            
       </>
    
    );

    
}
export default signup ;
