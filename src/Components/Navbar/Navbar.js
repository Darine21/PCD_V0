import React ,{useState}from "react";
import LOG from "../../Asset/loog1.png"
import Contact from '../Connexion1/Contact';
import { Link } from "react-router-dom";
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import './Nav.css';
function ColorSchemesExample() {
 

  return (
    <>

      <Navbar expend="lg">
        <Container>
        <Navbar.Brand   style={{fontSize:40,color:'hsla(30, 59%, 45%, 0.902)'} } href="#home"    >
          <img src={LOG} />
          Cancer-check-up </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{height: '300%' }}>
          <Nav className="ml-auto" >
            <NavLink className="active" href="#home" >Home</NavLink>
            <Nav.Link className="in" href="#info">Info</Nav.Link>
            <Nav.Link className="hw" href="#work">How it works</Nav.Link>
            <Nav.Link className="med" href="#medecin"> Our Doctors </Nav.Link>
            {/* <HashLink smooth to="#test">
               Link to Hash Fragment
            </HashLink> */}
        
            <Link to="/contact" className="buttons" >
            
              <button > CONNEXION   </button>
             
              
            </Link>
          </Nav>
         
        </Navbar.Collapse>
       
        </Container>
        
      

      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;

