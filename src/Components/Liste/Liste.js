import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import axios from "axios";
const ListePatients = (props) => {
  const [Data, setData] = useState([])
  const getallpatient  = async()=> {
    const res =await axios.get("http://localhost:5000/patient");
    setData(res.data);
  }
  useEffect(()=>{
    getallpatient();
  },[])

    return ( 

<div>
<Table striped bordered hover>
<thead>
      <tr>
      <th>Name: {props.name}</th>
      <th>Phone : {props.age}</th>
     
      <th>Your pdf : {props.gender}</th>
     
      </tr>

      </thead>
      <tbody>
        {Data.map((items)=> 
        <tr>
          <td> 
          </td>
          <td></td>
          <td></td>
        </tr>
        )}
        
      </tbody>
      </Table>
     
    </div>


    )}
export default ListePatients ;
