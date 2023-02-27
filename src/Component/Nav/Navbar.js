import React from "react";

import {Navbar , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import './Nav.css';
import Image from '../../Asset/a.jpg';
import Logo from '../../Asset/logo (1).png'
function ColorSchemesExample() {
  return (

      <Navbar expend="lg">
        <Container>
        <Navbar.Brand   style={{fontSize:40,color:'hsla(30, 59%, 45%, 0.902)'} } href="#home"    >
          Cancer-check-up </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{height: '300%' }}>
          <Nav className="ml-auto" >
            <Nav.Link className="active" href="#home" >Homee</Nav.Link>
            <Nav.Link className="in" href="#info">Info</Nav.Link>
            <Nav.Link className="hw" href="#work">How it works</Nav.Link>
            <Nav.Link className="med" href="#medecin"> Our Doctors </Nav.Link>
            {/* <HashLink smooth to="#test">
               Link to Hash Fragment
            </HashLink> */}
        
            <Nav.Link className="buttons" href="#contact">
            
              <button> CONNEXION </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;

