import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { useContext } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';

function Signin() {
    const [userType, setUserType] = useState('patient');
    const [email, setEmail] = useState(''); 
     const [password, setPassword] = useState(''); 
      const navigate = useNavigate();  
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }

  // supposons que le bouton SignIn soit un élément de formulaire
// avec deux champs: email et password

const handleSignIn = async (e) => {
  e.preventDefault();
  
 // déterminer si l'utilisateur est un patient ou un médecin
    
 let isPatient;

if (userType === "patient") {
  isPatient = true;
} else {
  isPatient = false;
}


  // envoyer la requête de connexion appropriée en fonction du choix de l'utilisateur
  let response;
  if (isPatient) {
    response = await axios.post('http://localhost:5000/patient/signin', {
  email: email,password: password 
    });
    
    const data =  response.data;
     console.log(data.email)
    const token = data.token; 
    localStorage.setItem('token', token);
    localStorage.setItem('patient', data.patient);
    console.log(data.patient);
    const patient = jwt_decode(token); 
    console.log(typeof (patient));
    console.log("logged in successfully");navigate('/Paccount'); 
    
  } 
 else {
    response = await fetch('/Doctor/Signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    navigate('/interface');
  }

  // traiter la réponse
  
 
};

return( 
    
       <Form id="signin" className="f">
  <Card.Header className="bg-beige text-center">
          <h3 className="text-orange mb-0">Sign in</h3>
        </Card.Header>

    <Form.Check
      inline
      label="Patient"
      type="radio"
      value="patient"
      checked={userType === "patient"}
      onChange={handleUserTypeChange}
    />
    <Form.Check
      inline
      label="Doctor"
      type="radio"
      value="doctor"
      checked={userType === "doctor"}
      onChange={handleUserTypeChange}
    />
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSignIn}>
    connexion
  </Button>
              
</Form>

    
    );

    
}
export default Signin ;
