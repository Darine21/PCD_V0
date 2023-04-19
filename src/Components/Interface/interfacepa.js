
import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import LO from '../../Asset/ess.png';
import A from '../../Asset/AGE.png';
import AC from '../../Asset/AC.png';
import PA from '../../Asset/PAA.png';
import M from '../../Asset/msg.png';
import C from '../../Asset/COM.png';
import D from '../../Asset/DO.png';
import { Link } from "react-router-dom";
import { BiCalendar } from "react-icons/bi";
import {BsWechat} from "react-icons/bs";
import{BsFillBellFill} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {AiOutlineFolderOpen} from "react-icons/ai";
import {BiHomeSmile} from "react-icons/bi";
import {AiOutlineDollarCircle} from "react-icons/ai";
function Interface() {
  const navigate = useNavigate();
     useEffect(() => {
    const fetchDoctor = async () => {
      let token = localStorage.getItem('Doctor token');
     
      if (token) {
        fetch('http://localhost:5000/authDoctor-endpoint', {
  method: 'GET', 
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => response.json())
.then(data => {
 
  
  console.log(data)
  
})
.catch(error => console.error(error));
      }
      else {
        navigate('/signin'); 
      }
    };
    fetchDoctor();
  }, []);
   
    
    return(
        
<>

<Navbar expend="lg">
  <Container>
  <Navbar.Brand   style={{fontSize:40,color:'hsla(30, 59%, 45%, 0.902)'} } href="#home"    >
    <img src={LO} />
     Doctor.Name</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{height: '300%' }}>
    <Nav className="ml-auto" >
      <NavLink className="active" href="#homee" style={{marginTop:"10px" , marginLeft:"50px"}}> <BiHomeSmile />Home</NavLink>
      <Nav.Link  as={Link} to="/agenda"className="in" href="#agenda" style={{marginTop:"10px" ,marginLeft:"50px"}}> <BiCalendar />Agenda</Nav.Link>
      <Nav.Link as={Link} to="/liste-patients" className="hw" href="#pa" style={{marginTop:"10px", marginLeft:"50px"}}><BsFillPeopleFill />Patients</Nav.Link>
      <Nav.Link  as={Link} to ="/msg" className="med" href="#msg" style={{marginTop:"10px" , marginLeft:"50px"}}> <BsWechat /> Messages </Nav.Link>
      <Nav.Link as={Link} to ="/tar"  className="comp" href="#comp" style={{marginTop:"10px" , marginLeft:"120px"}}><AiOutlineDollarCircle /> Accounting </Nav.Link>
      <Nav.Link as={Link} to ="/"  className="co" href="#com" style={{marginLeft:"50px", marginTop:"10px"}}><BsFillBellFill/> Notification </Nav.Link>
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
<button className="button1" style={{marginLeft:"50px" , marginTop:"10px"}}> <BiCalendar /> Agenda </button>
</Link>
<Link to={"/dossier"}>
<button className="button1" style={{marginLeft:"350px"}}><AiOutlineFolderOpen/> Open a file</button>
</Link>
</div>


</>
 

 
  
  
 
    )
}
export default Interface ;


