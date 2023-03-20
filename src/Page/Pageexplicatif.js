import React from "react";
import Logo from './../Asset/logo.png'

export default function Explication() {
    
    
          
    return (
        <div className='exp' id="title1">
            <h4> Description for our Solution</h4>
            <p>
                The "Our Solution" page contains two main things. Firstly, a user needs to add the patient detail under the "Fill Patient Detail" section for which the inference is performed.
                Then a user needs to upload the skin lesion image. The validation is performed on the client-side using JQuery, and it will not allow the end-user to submit the detail until all the information is valid.
                The validation is performed on the client-side to reduce the server load.
                Voici l'interface d'incription :
            </p>
            <img src={Logo} alt="login" width="200" height="200" /> {/* Ajout de l'image */}
        </div>
    );
}
