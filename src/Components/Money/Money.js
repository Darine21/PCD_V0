import React from "react";
import { Link } from "react-router-dom";
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
function compt (){
    return( 

        <div>
            <h1 style={{textAlign:"center "}}>'Accounting page' </h1>
        <div   style={{backgroundColor:"#d3a573" , display:"flex"}}>
        <Nav className="ml-auto" >
        <NavLink className="ac" href="#home" >Home\</NavLink>
        <Nav.Link className="i" href="#info">Accounting</Nav.Link>
</Nav>
</div>
    <div  style={{display:"flex"}}>
        <button  className="button1" style={{ backgroundColor:"" , textAlign:"right" }}>Consultation fees</button>
        <button className="button1" style={{backgroundColor:"",  textAlign:"center"}}>Packs</button>
    </div>

</div>
    )

}
export default compt;