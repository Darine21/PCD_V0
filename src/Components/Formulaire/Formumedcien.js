import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Formulaire.css";
    function InscriptionMedecin() {
          const [nom, setNom] = useState('');
          const [prenom, setPrenom] = useState('');
          const [specialite, setSpecialite] = useState('');
          const [nombre, setNombre] = useState(0);
          const [Password, setPassword] = useState('');
          const [email, setemail] = useState('');
          const [poste, setposte] = useState('');
          const [numero, setnumero] = useState('');
          const handleSubmit = (event) => {
            event.preventDefault();
            // Code pour envoyer les données à un serveur ou les traiter localement
          };
          const [selectedOption, setSelectedOption] = useState('null');

          const handleSelect = (event) => {
            setSelectedOption(event.target.value);
          }
          const [selectedSpeciality, setSelectedSpeciality] = useState('null');

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };
  
          return (
           <div >
             <div >
             
                <h2>
                    Identification de la ressources
                </h2>
             </div>
           
             <div className='radio-buttons' >
            <input type="radio" value="Option 1" checked={selectedOption === 'Option 1'} onChange={handleSelect} className="aa"/>
              <label>Résident</label>

            <input type="radio" value="Option 2" checked={selectedOption === 'Option 2'} onChange={handleSelect}  />
            <label>Médcin de famille </label>

          <input type="radio" value="Option 3" checked={selectedOption === 'Option 3'} onChange={handleSelect}  />
           <label>Médcien spécialiste</label>
           <style>
        {`
          .radio-buttons input[type="radio"] {
            margin-right: 20px;
          }
        `}
      </style>
      <div>
        <h4 className='hh'>
        Authentication email:
        </h4>
        <label>
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Your email" />
      </label>
      
      <label className='tit'>

        <input type="number" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder=" Password" />
      </label>
        
        
        <h6 className='ee'>
            Family name 
        </h6>
        <label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Your family name" />
      </label>
      
      <label className='tit'>
        <h6 className='RR'>
            Name
        </h6>
       
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder=" Your name" />
      </label>
      <h6 className='ee'>
            Your phone
        </h6>
        <label>
        <input type="number" value={numero} onChange={(e) => setnumero(e.target.value)} placeholder="+216 ########" />
      </label>
      <label className='tit'>
        <h6 className='RR'>
            Poste
        </h6>
       
        <input type="number" value={poste} onChange={(e) => setposte(e.target.value)} placeholder=" Num poste" />
      </label>
      <label className='tit'>
        <h6 className='RR'>
            Fax
        </h6>
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder=" Your num for fax" />
      </label>
      <h6 className='ee'>
            Year(s) of experience  
        </h6>
          <input type="number" id="nombre" name="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <label className='tit'>
        <h6 className='RR'>
            Image for your dimploma
        </h6>
        <input type="file" id="mon-image" name="mon-image" accept="image/*" />
        </label>
        <h5 className='ee'>
            Langage supported :
        </h5>  
  <input type="checkbox" id="francais" name="langues" value="Français"/>
  <label for="francais">Français</label>
<div>
  <input type="checkbox" id="allemand" name="langues" value="Allemand"/>
  <label for="allemand">Allemand</label>
</div>
<div> 
  <input type="checkbox" id="italien" name="langues" value="Italien"/>
  <label for="italien">Italien</label>
</div>
<div>
  <input type="checkbox" id="portugais" name="langues" value="Portugais"/>
  <label for="portugais">Portugais</label>
</div>
<div>
  <input type="checkbox" id="mandarin" name="langues" value="Chinois (Mandarin)"/>
  <label for="mandarin">Chinois (Mandarin)</label>
</div>
<div>
  <input type="checkbox" id="cantonais" name="langues" value="Chinois (Cantonais)"/>
  <label for="cantonais">Chinois (Cantonais)</label>
</div>
<div>
  <input type="checkbox" id="japonais" name="langues" value="Japonais"/>
  <label for="japonais">Japonais</label>
</div>
<div>
  <input type="checkbox" id="coreen" name="langues" value="Coréen"/>
  <label for="coreen">Coréen</label>
</div>
<div>
  <input type="checkbox" id="arabe" name="langues" value="Arabe"/>
  <label for="arabe">Arabe</label>
</div>
<div>
  <input type="checkbox" id="russe" name="langues" value="Russe"/>
  <label for="russe">Russe</label>
</div>
<div>
  <input type="checkbox" id="hindi" name="langues" value="Hindi"/>
  <label for="hindi">Hindi</label>
</div>
<div>
  <input type="checkbox" id="ourdou" name="langues" value="Ourdou"/>
  <label for="ourdou">Ourdou</label>
</div>
<div>
  <input type="checkbox" id="bengali" name="langues" value="Bengali"/>
  <label for="bengali">Bengali</label>
</div>
<div>
  <input type="checkbox" id="swahili" name="langues" value="Swahili"/>
  <label for="swahili">Swahili</label>
</div>
<div>
  <input type="checkbox" id="autre" name="langues" value="Autre"/>
  <label for="autre">Autre</label>
</div>
<h4 className='ee'>
    Specialties :
</h4>
<div>
<label>
        <input type="radio" value="dermatologist" checked={selectedSpeciality === 'dermatologist'} onChange={handleSpecialityChange} />
        Dermatology
      </label>
      
      <label>
        <input type="radio" value="oncologist" checked={selectedSpeciality === 'oncologist'} onChange={handleSpecialityChange} />
        Oncology
      </label>
      
      <label>
        <input type="radio" value="suron" checked={selectedSpeciality === 'suron'} onChange={handleSpecialityChange} />
        Surgical
      </label>
      
      </div>
      <div>
      <label>
        <input type="radio" value="surgeon" checked={selectedSpeciality === 'surgeon'} onChange={handleSpecialityChange} />
        Plastic surgery
      </label>
      <label>
        <input type="radio" value="Der" checked={selectedSpeciality === 'Der'} onChange={handleSpecialityChange} />
        Dermatopathology
      </label>
      <label>
        <input type="radio" value="m" checked={selectedSpeciality === 'm'} onChange={handleSpecialityChange} />
      Mohs surgery
      </label>
      </div>
      <div>
        <label>
      <input type="radio" value="mo" checked={selectedSpeciality === 'mo'} onChange={handleSpecialityChange} />
      Radiation Oncology
      </label>
      <label>
      <input type="radio" value="med" checked={selectedSpeciality === 'med'} onChange={handleSpecialityChange} />
      Medical Oncology
      </label>
      <label>
      <input type="radio" value="Her" checked={selectedSpeciality === 'Her'} onChange={handleSpecialityChange} />
      Hematology-oncology
      </label>
      </div>
      <h4>
        Region where you partice your job :
      </h4>
      <div>
      <input type="checkbox" id="tunis" name="langues" value="Français"/>
  <label for="tunis">Tunis</label>

  <input type="checkbox" id="Ariana" name="langues" value="Allemand"/>
  <label for="Ariana">Ariana</label>
  <input type="checkbox" id="Ben Arous" name="langues" value="Italien"/>
  <label for="Ben Arous">Ben Arous</label>
</div>
<div>
  <input type="checkbox" id="Mannouba" name="langues" value="Portugais"/>
  <label for="Mannouba">Mannouba</label>
  <input type="checkbox" id="Nabeul" name="langues" value="Chinois (Mandarin)"/>
  <label for="Nabeul">Nabeul </label>

  <input type="checkbox" id="zag" name="langues" value="Chinois (Cantonais)"/>
  <label for="zag">Zaghouan</label>
</div>
<div>
  <input type="checkbox" id="bi" name="langues" value="Japonais"/>
  <label for="bi">Bizerte</label>

  <input type="checkbox" id="b" name="langues" value="Coréen"/>
  <label for="b">béja</label>

  <input type="checkbox" id="Jan" name="langues" value="Arabe"/>
  <label for="Jan">Jendouba</label>
</div>
<div>
  <input type="checkbox" id="k" name="langues" value="Russe"/>
  <label for="k">Kef</label>

  <input type="checkbox" id="s" name="langues" value="Hindi"/>
  <label for="s">Siliana</label>

  <input type="checkbox" id="ka" name="langues" value="Ourdou"/>
  <label for="ka">Kairouan</label>
</div>
<div>
  <input type="checkbox" id="kas" name="langues" value="Bengali"/>
  <label for="kas">Kasserine</label>

  <input type="checkbox" id="sidi" name="langues" value="Swahili"/>
  <label for="sidi">Sidi Bouzid</label>

  <input type="checkbox" id="S" name="langues" value="Autre"/>
  <label for="S">Sousse</label>
  </div>
  <div>
  <input type="checkbox" id="MO" name="langues" value="Autre"/>
  <label for="MO">Monastir</label>
  <input type="checkbox" id="Ma" name="langues" value="Autre"/>
  <label for="Ma">Mahdia</label>
  <input type="checkbox" id="Sf" name="langues" value="Autre"/>
  <label for="Sf">Sfax</label>
  </div>
  <div>
  <input type="checkbox" id="G" name="langues" value="Autre"/>
  <label for="G">Gafsa</label>
  <input type="checkbox" id="T" name="langues" value="Autre"/>
  <label for="T">Tozeur</label>
  <input type="checkbox" id="K2" name="langues" value="Autre"/>
  <label for="K2">Kébili</label>
  </div>
  <div>
  <input type="checkbox" id="GA" name="langues" value="Autre"/>
  <label for="GA">Gabés</label>
  <input type="checkbox" id="Med" name="langues" value="Autre"/>
  <label for="med">Mednine</label>
  <input type="checkbox" id="Tat" name="langues" value="Autre"/>
  <label for="Tat">Tataouine</label>

</div>
<button className='eee'>
Save and Continue Later
</button>
<button className='eee'> Submit registration</button>
      </div>

    </div>
    
      
         </div>
            
          );
        }
     export default InscriptionMedecin;