import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Listepatient from '../Liste/Liste';
import axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function Paccount() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [anatomicalSite, setAnatomicalSite] = useState('');
  const [result, setResult] = useState('');
  const [redirectTo, setRedirectTo] = useState(null);
  const [patients, setPatients] = useState([]);
  const [phone, setphone] = useState([]);
  const [names, setnames] = useState([]);
  const [description, setDescription] = useState([]);
  const navigate = useNavigate();
  const[image,setimage]=useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
   
  }

 

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };
  const handlephoneChange = (event) => {
    setphone(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
   
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleNamesChange = (event) => {
    setnames(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleBooking = () => {
    const name_user = localStorage.getItem("email");
    const FormData = {
      name,
      doctor,
      age,
      anatomicalSite,
      description,
      gender,
      phone
    };
    console.log(FormData);
    setResult(JSON.stringify(FormData)); // afficher les informations du patient dans la console
    setRedirectTo('/liste-patients');
  
    if( doctor&& age&& anatomicalSite && date&& time)
    {
    const user=localStorage.getItem('user') ; 
    if (user && user.email) {
    let formData= new FormData();
    formData.append("img",image);
    formData.append("myFile","http://localhost:5000/upload/"+image.name);
    formData.append("Name_medcien",doctor);
    formData.append("age",age);
    formData.append("anatomicalSile",anatomicalSite);
    formData.append("gender" , gender);
    formData.append("phone", phone);
    formData.append("email",user.email);
    formData.append("description", description);


    try {

      const  data  = axios.post(`http://localhost:3000/upload/+image.name`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      });

    } catch (error) {
     
    }}
  }
  };

  const handleLogoutClick = () => {
      navigate('/');  
  };
  const handleSiteChange = (event) => {
    setAnatomicalSite(event.target.value);
  };
 
  const handleReset = () => {
    setName('');
    setAge('');
    setGender('');
    setAnatomicalSite('');
    setResult('');
    setFile('');
    setphone('');
    }; 
   
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Paccount');
        console.log(response.data);
      } catch (error) {
       console.log("errrooorr")
      }
    };

    fetchData();
  }, []);
 


  const generatePDF = (item) => {
    const API_ENPOINT = process.env.API_ENPOINT ||"http://localhost:5000/upload";
    const documentDefinition = {
      
      content: [
        { text: 'Patient Information' },
        { text: `Name: ${names}` },
        { text: `Age: ${age}` },
        { text: `Gender: ${gender}` },
        { text: `Anatomical Site: ${anatomicalSite}` },
        { text: `phone: ${phone}`},
        { text: `Description: ${description}` },
        { image: `${API_ENPOINT}/${item.receipt}`}
      ],
    
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };
    try {
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      pdfDocGenerator.download();
      console.log("ee");
    } catch (error) {
      console.error('Error generating PDF: ', error);
    }
  };


    // Mettre à jour l'état du composant parent avec les informations saisies par l'utilisateur
    // const patientData = {
    //   doctor,
    //   age,
    //   gender,
    //   anatomicalSite,
    //   date,
    //   time,
    //   phone};
 
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
                  <Form.Label>Your phone</Form.Label>
                  <Form.Control type="NUMBER" value={phone}  />
                </Form.Group>
                <Form.Group>     
                <Form.Label>Upload your PDF </Form.Label>
                 <Form.Control type="file" onChange={handleFileChange} />
                 </Form.Group>
                <Link to={"/liste-patients"}>
                <Button type="submit" variant="primary" onClick={handleBooking}  >Book Appointment </Button>
                </Link>
               


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
                <Form.Control type="text" placeholder=" Your name" required value={names} onChange={handleNamesChange}  />
                              </Form.Group>
                  
                                 <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder=" Your age" required value={age} onChange={handleAgeChange}  />
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
                             <Form.Group >
                              <Form.Label>Description your skin</Form.Label> 
                              <Form.Control type="text" placeholder="description your skin " required value={description} onChange={(e) => setDescription(e.target.value)} />
                             </Form.Group>          
                             
                   <Form.Group>
                  <Form.Label>Upload a Photo</Form.Label>
                  <Form.Control type="file" name='receipt' onChange={handleFileChange} />
                </Form.Group>
                              <Button type="submit" variant="primary">Get Result</Button>
                              <Button variant="secondary" className="ml-2" onClick={handleReset}>
                  Reset
                </Button>
              </Form>
            </Card.Body>
            {image && (
              <Card.Footer>
              <Button onClick={generatePDF}>Generate PDF</Button>
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