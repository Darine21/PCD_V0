import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Formulairepat.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
function InscriptionPatient() {
    const [familyName, setNo] = useState('');
    const [name, setPrenomm] = useState('');
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('');
    
  const [phone, setnumero] = useState('');
  const [birthdayDay, setBithdayday] = useState(''); 
  const [region, setRegion] = useState(''); 
  const [sex, setUserGenderChange] = useState('');

     const handleUserGenderChange = (e) => {
    setUserGenderChange(e.target.value);
  }

   
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.post('http://localhost:5000/patient/signup', {
    familyName,
  name,
  email,
  password,
  birthdayDay,
  region,
  sex,
  phone,
      });
        console.log(response);
      if (response.data) {
        toast.success('Account created successfully!');
        
      
      // Redirect to dashboard or login page
    }
  } catch (error) {
    console.log(error.response.data);
  }
  

 
}; 
    return(
        
        <form onSubmit={handleSubmit} >
<h1 className='in'> 
Patient Registration
</h1>
        <div className='chan'>
               <h6 className='ee'>
            Family name 
        </h6>
        <label>
        <input type="text" value={familyName} onChange={(e) => setNo(e.target.value)} placeholder="Your family name" />
      </label>
      
      <label className='tit'>
        <h6 className='RR'>
            Name
        </h6>
       
        <input type="text" value={name} onChange={(e) => setPrenomm(e.target.value)} placeholder=" Your name" />
      </label>
        </div>
        <div className='chan'>
        <h4 className='ee'>
         Email:
        </h4>
        <label>
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Your email" />
      </label>
      
      <label className='tit'>

        <input type="string" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Password" />
      </label>
        </div>
        <div className='chan'>
        <label for="birthday" className='e' style={{fontFamily:""}}>Birthday day :</label>
        <div>
            <input type="date" id="birthday" value={ birthdayDay} name="birthday" onChange={(e) => setBithdayday(e.target.value)}/>
        </div>
        </div>
        <div className='chan'> 
            <h6 className='cha'>
                Your Region :
            </h6>
            <select id="region" onChange={(e) => setRegion(e.target.value)} value={region}>
  <option value={"c"}> select your region </option>              
  <option value="ariana">Ariana</option>
  <option value="beja">Béja</option>
  <option value="benarous">Ben Arous</option>
  <option value="bizerte">Bizerte</option>
  <option value="gabes">Gabès</option>
  <option value="gafsa">Gafsa</option>
  <option value="jendouba">Jendouba</option>
  <option value="kairouan">Kairouan</option>
  <option value="kasserine">Kasserine</option>
  <option value="kebili">Kébili</option>
  <option value="kef">Le Kef</option>
  <option value="mahdia">Mahdia</option>
  <option value="manouba">La Manouba</option>
  <option value="medenine">Médenine</option>
  <option value="monastir">Monastir</option>
  <option value="nabeul">Nabeul</option>
  <option value="sfax">Sfax</option>
  <option value="sidi_bouzid">Sidi Bouzid</option>
  <option value="siliana">Siliana</option>
  <option value="sousse">Sousse</option>
  <option value="tataouine">Tataouine</option>
  <option value="tozeur">Tozeur</option>
  <option value="tunis">Tunis</option>
  <option value="zaghouan">Zaghouan</option>
</select>

        </div>
        

         <div>
  <input type="radio" id="Woman" name="sex"  value="Woman"
      
      onClick={handleUserGenderChange}></input>
  <label for="Woman">Women &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  </label>

  <input type="radio" id="Man" name="sex"  value="Man"
      
      onClick={handleUserGenderChange}></input>
  <label for="Man">Men</label>
</div>
        <div className='cha'>
        <h6 className='ee'>
            Your phone
        </h6>
        <label>
        <input type="number" value={phone} onChange={(e) => setnumero(e.target.value)} placeholder="+216 ########" />
      </label>
        </div>
        <Link to={"/contact"}>
        <button className='ch' type='submit' onClick={handleSubmit}>
            Save and Register 
          </button>
          </Link>
        </form>
    )

}
export default InscriptionPatient;