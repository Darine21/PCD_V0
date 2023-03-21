import React from "react";
import './Welcome.css'
const welcome =()=>{
    return(
        <header>
            <section id="home">

           
            <div className="contrainer">
              <div className="center" >
                <h1 className="title"> WELCOME </h1>
                <h2 className="sub-title">
                 Welcome to our skin cancer check-up website! Our goal is to provide you with the information and resources you need to stay informed and proactive about your skin health. 
                 Whether you're looking for advice on self-examination, or want to schedule an appointment with a dermatologist, we're here to help.
                 Thank you for visiting and taking the first step towards healthier, happier skin.    
                </h2>
                <button className="BUTTT">CHECK YOUR SKIN  !</button>
             </div>
            </div>
          </section>
        </header>
    )
}
export default welcome;