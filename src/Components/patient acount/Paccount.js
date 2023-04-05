import { useState } from 'react';
import React from 'react';
import { Navigate,  useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import { useEffect } from 'react';
import axios from 'axios';


function Paccount() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [anatomicalSite, setAnatomicalSite] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate(); 

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleFileChange = (event) => {
    
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/signin')
  };
 
 
  const handleReset = () => {
    setName('');
    setAge('');
    setGender('male');
    setAnatomicalSite('');
    setResult('');
    }; 
    
    useEffect(() => {
    const fetchPatient = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
      if (token) {
        console.log('okkk'); 
        try {
          const response = await axios.get('http://localhost:5000/auth-endpoint', {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response);

        } catch (error) {
          console.error(error);
          
        }
      }
      else {
        navigate('/signin'); 
      }
    };
    fetchPatient();
  }, []);
   
  

  return (
    <Container className="py-4">
      
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Choose a Doctor</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Label>Doctor</Form.Label>
                  <Form.Select value={doctor} onChange={handleDoctorChange}>
                    <option>Select a Doctor</option>
                    <option>Dr. John Smith</option>
                    <option>Dr. Sarah Johnson</option>
                    <option>Dr. Michael Lee</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={date} onChange={handleDateChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Time</Form.Label>
                  <Form.Control type="time" value={time} onChange={handleTimeChange} />
                </Form.Group>
                <Button type="submit" variant="primary">Book Appointment</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Check for Cancer</h5>
            </Card.Header>
            <Card.Body>
                          <Form onSubmit={handleFormSubmit}>
                              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required value={name} onChange={(e) => setName(e.target.value)} />
                              </Form.Group>
                                 <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" required value={age} onChange={(e) => setAge(e.target.value)}  />
                              </Form.Group>
                              
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select required value={gender} onChange={(e) => setGender(e.target.value)} >
                  <option value="">Choose gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                              </Form.Group>
                                <Form.Group controlId="formSite">
                                  <Form.Label>Anatomical site</Form.Label> 
                                  <Form.Control type="text" placeholder="Anatomical site" required value={anatomicalSite} onChange={(e) => setAnatomicalSite(e.target.value)} />
                                  </Form.Group>
                              <Form.Group> 
                                  
                  <Form.Label>Upload a Photo</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
                              <Button type="submit" variant="primary">Get Result</Button>
                              <Button variant="secondary" className="ml-2" onClick={handleReset}>
                  Reset
                </Button>
              </Form>
            </Card.Body>
            {file && (
              <Card.Footer>
                <Button onClick={() => {}}>Generate PDF</Button>
              </Card.Footer>
            )}
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button onClick={handleLogoutClick} variant="danger">Log Out</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Paccount ;
