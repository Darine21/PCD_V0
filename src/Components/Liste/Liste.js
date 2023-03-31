import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

const ListePatients = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    date_naissance: "",
    mutuelle: "",
    telephone: "",
    action:"",
  });

  const addPatient = (e) => {
    e.preventDefault();
    setPatients([...patients, newPatient]);
    setNewPatient({
      nom: "",
      prenom: "",
      sexe: "",
      date_naissance: "",
      mutuelle: "",
      telephone: "",
      action:"",
    });
  };

  return (
    <div id="pa">
      <Form onSubmit={addPatient}>
        
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Sexe</th>
          <th>Date de naissance</th>
          <th>Mutuelle</th>
          <th>Téléphone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>{patient.nom}</td>
            <td>{patient.prenom}</td>
            <td>{patient.sexe}</td>
            <td>{patient.date_naissance}</td>
            <td>{patient.mutuelle}</td>
            <td>{patient.telephone}</td>
            <td>{patient.action}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}
export default ListePatients ;
