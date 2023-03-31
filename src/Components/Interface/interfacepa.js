import React ,{useState,useRef} from "react";
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import LO from '../../Asset/ess.png';
import A from '../../Asset/AGE.png';
import AC from '../../Asset/AC.png';
import PA from '../../Asset/PAA.png';
import M from '../../Asset/msg.png';
import C from '../../Asset/COM.png';
import D from '../../Asset/DO.png';
import { Link } from "react-router-dom";

function Interface (){
   
    
    return(
        
<>

<Navbar expend="lg">
  <Container>
  <Navbar.Brand   style={{fontSize:40,color:'hsla(30, 59%, 45%, 0.902)'} } href="#home"    >
    <img src={LO} />
    Doctor-check-up </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{height: '300%' }}>
    <Nav className="ml-auto" >
      <NavLink className="active" href="#homee" style={{marginTop:"6px"}}> <img src={AC} />Home</NavLink>
      <Nav.Link  as={Link} to="/agenda"className="in" href="#agenda" style={{marginTop:"3px"}}> <img src={A} />Agenda</Nav.Link>
      <Nav.Link as={Link} to="/liste-patients" className="hw" href="#pa" style={{marginTop:"1px"}}><img src={PA} />Patients</Nav.Link>
      <Nav.Link  as={Link} to ="/msg" className="med" href="#msg" style={{marginTop:"10px"}}> <img src={M} /> Messages </Nav.Link>
      <Nav.Link as={Link} to ="/tar"  className="comp" href="#comp" style={{marginLeft:"70px"}}><img src={C} /> Accounting </Nav.Link>
      </Nav>
   
  </Navbar.Collapse>
 
  </Container>
</Navbar>

<div  className="bor" style={{backgroundColor:"#d3a573"
}}>
    <h2 style={{color:"rgb(111, 111, 113", marginLeft:"100px"}}>
        Welcome!
    </h2>
</div>
<div style={{ display:"flex"}}>
  <Link to={"/agenda"}>
<button className="button1" style={{marginLeft:"50px"}}> Agenda </button>
</Link>
<Link to={"/dossier"}>
<button className="button1" style={{marginLeft:"350px"}}> Open a file</button>
</Link>
</div>


</>
 

 
  
  
 
    )
}
export default Interface ;


