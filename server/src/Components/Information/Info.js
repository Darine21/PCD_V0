
import React from "react";
import './Info.css';
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <>
      <section id="info"
        className="info" style={{marginTop:"-45px"}}>
        <div className="container">
            <div className="col-md-6 col-lg-5">

          <h2 className="lead" style={{marginTop:233, color:"black" }}>
           <p>Skin cancer is a prevalent type of cancer that can manifest in a variety of ways on the skin, making early detection and treatment crucial. 
            If you notice any unusual changes, such as small growths, discoloration, or sores that persist or enlarge over time, it is essential to have them evaluated by a medical professional. 
            In some cases, complex surgical treatments may be required, and it is recommended to consult a plastic surgeon for such cases.
            </p>  
              <Link to={"/sensabilisation"}> <button style={{ alignItems:"center" ,  marginTop: "30px"}} className="but">Learn more </button> </Link>
                
       
            </h2>
            </div>
            
           
          </div>
        
      </section>
    </>
  );
}