import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";
import { saveAs } from 'file-saver';
import base64js from 'base64-js';
function ListePatients () {
    const [patients, setPatients] = useState([]);
  const doctor = localStorage.getItem('doctor');
  console.log(doctor); 

  useEffect(() => {
    axios.get(`http://localhost:5000/Listepatients/${doctor}`)
      .then(response => {
        setPatients(response.data);
        console.log(patients); 
      })
      .catch(error => {
        console.log(error);
      });
  }, [doctor]);

    return ( 

<div>
<Table striped bordered hover>
<thead>
      <tr>
      <th>FullName</th>
      <th>Phone </th>
      <th>Patient's pdf </th>
     
      </tr>

      </thead>
      <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
              <td>{patient.FullName}</td>
              <td>{patient.phone}</td>
              
              <td>
      <a href="#" onClick={() => {
 const file = new Blob([new Uint8Array(patient.pdf)], { type: "application/pdf" });
saveAs(file, "pancard.pdf") 
}}>
  {patient.FullName}.pdf
</a>






              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>


    )}
export default ListePatients ;
