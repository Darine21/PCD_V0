import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
function Signin() {
    const [userType, setUserType] = useState('patient');
    const [email, setEmail] = useState(''); 
     const [password, setPassword] = useState(''); 
      const navigate = useNavigate();  // initial user type

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  }

  // supposons que le bouton SignIn soit un élément de formulaire
// avec deux champs: email et password

const handleSignIn = async (e) => {
  e.preventDefault();
  
    console.log(email); 
    console.log(password); 

  // déterminer si l'utilisateur est un patient ou un médecin
    
 let isPatient;

if (userType === "patient") {
  isPatient = true;
} else {
  isPatient = false;
}

console.log(isPatient);


  // envoyer la requête de connexion appropriée en fonction du choix de l'utilisateur
  let response;
  if (isPatient) {
    response = await fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    navigate('/Paccount');
    console.log("logged in successufly "); 
  } 
  else {
    response = await fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    navigate('/interface');
  }

  // traiter la réponse
  const data = await response.json();
  if (response.ok) {
    // connexion réussie, rediriger l'utilisateur
    window.location.href = data.redirectUrl;
  } else {
    // afficher un message d'erreur
    alert(data.message);
  }
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
