import React ,{useState}from "react";
import LOG from "../../Asset/loog1.png"
import Contact from '../Connexion1/Contact';
import { Link } from "react-router-dom";
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {BiHomeSmile} from "react-icons/bi";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import {AiOutlineBulb} from "react-icons/ai";
import {AiOutlineUsergroupDelete} from "react-icons/ai";
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
            <NavLink className="active" href="#home" style={{marginTop:"-5px"}} > <BiHomeSmile/> Home</NavLink>
            <Nav.Link className="in" href="#info" style={{marginTop:"-5px"}} ><AiOutlineExclamationCircle/>Info</Nav.Link>
            <Nav.Link className="hw" href="#work" style={{marginTop:"-5px"}} > <AiOutlineBulb/>How it works</Nav.Link>
            <Nav.Link className="med" href="#medecin" style={{marginTop:"-5px"}} ><AiOutlineUsergroupDelete/> Our Doctors </Nav.Link>
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

