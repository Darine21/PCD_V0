
import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Navbar ,NavLink , Container , Collapse,NavDropdown, Nav  } from 'react-bootstrap';
import LO from '../../Asset/ess.png';
import "./interface.css";

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
  console.log(DoctorName)
  
})
.catch(error => console.error(error));
      }
      else {
        navigate('/signin'); 
      }
    };
    fetchDoctor();
  }, []);
   
const[DoctorName, setDoctorName]=useState('');
    return(
        
<>

<Navbar expend="lg">
  <Container  style={{fontfamily:"var(--bs-body-font-family)", padding:"15px" , marginLeft:"-20px"}}>
  <Navbar.Brand   style={{fontSize:40,color:'hsla(30, 59%, 45%, 0.902)'} } href="#home"    >
    <img src={LO} />
    Doctor.Name </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{height: "10px" }}>
    <Nav className="ml-auto" >
      <NavLink className="active" href="#homee" style={{marginTop:"10px" , marginLeft:"190px"}}> <BiHomeSmile />Home</NavLink>
      <Nav.Link  as={Link} to="/agenda"className="in" href="#agenda" style={{marginTop:"10px" ,marginLeft:"50px"}}> <BiCalendar />Agenda</Nav.Link>
      <Nav.Link as={Link} to="/liste-patients" className="hw" href="#pa" style={{marginTop:"10px", marginLeft:"50px"}}><BsFillPeopleFill />Patients</Nav.Link>
      <Nav.Link  as={Link} to ="/msg" className="med" href="#msg" style={{marginTop:"10px" , marginLeft:"50px"}}> <BsWechat /> Messages </Nav.Link>
      <Nav.Link as={Link} to ="/tar"  className="comp" href="#comp" style={{marginTop:"10px" , marginLeft:"130px"}}><AiOutlineDollarCircle /> Accounting </Nav.Link>
      <Nav.Link as={Link} to ="/"  className="co" href="#com" style={{marginLeft:"60px", marginTop:"10px" }}><BsFillBellFill/> Log out </Nav.Link>
      </Nav>
   
  </Navbar.Collapse>
 
  </Container>
</Navbar>
<div className='mede'>

              <div className="center" style={{marginTop:"-5px", }} >
                
                <h2 className="sub-title"  style={{ fontSize:"25px"}} >
                <p style={{color:"black" ,fontSize:"28px" ,marginTop:"95px"}}>"We take care of your healthy health "</p>
      <span style={{fontSize: "18px", fontWeight: "bold", color:"black" }}>Expert care for your skin's health and early detection of skin cancer . Welcome to our practice. 
      Providing compassionate care and expertise in skin cancer diagnosis and treatment</span>
      
                </h2>
                </div>
                
</div>
<div style={{ display:"flex"}} id='agenda'>
  <Link to={"/agenda"}>
<button className="button1" style={{marginLeft:"50px" , marginTop:"10px"}}> <BiCalendar style={{width:"50px" ,height:"50px", marginTop:"-20px"}} /> Agenda </button>
</Link>
<Link to={"/dossier"}>
<button className="button1" style={{marginLeft:"350px" , marginTop:"10px"}}><AiOutlineFolderOpen style={{width:"50px" ,height:"50px", marginTop:"-20px"}}/> Open a file</button>
</Link>
</div>


</>
 

 
  
  
 
    )
}
export default Interface ;


