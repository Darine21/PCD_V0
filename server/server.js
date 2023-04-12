const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
} 
const auth = require('./auth')
const Patient = require('./routes/patientRoutes') 
const Formulaire = require('./routes/formulaireRouter');
const Doctor= require('./routes/doctorRouter')
const dbConnect = require("./db/dbConnect");


const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.urlencoded({extended: true}));
dbConnect(); 
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) 

const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: 'mySessions',
})


const authentiDoctor = (req, res, next) => {
  // Get the JWT token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    // Return a 401 Unauthorized response if the token is missing
    return res.status(401).json({ message: 'Unauth' });
  }

  try {
    // Verify the JWT token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const doctorId = decoded._id;

    // Use the user's ID to retrieve the corresponding user record from the database
    Doctor.findById(doctorId, (err, doctor) => {
      if (err) {
        // Return a 500 Internal Server Error response if there's an error
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (!doctor) {
        // Return a 404 Not Found response if the user doesn't exist
        return res.status(404).json({ message: 'Doctor not found' });
      }

      // Attach the user object to the request object for further processing
      req.doctor = doctor;
      next();
    });
  } catch (error) {
    // Return a 401 Unauthorized response if the token is invalid or has expired
    res.status(401).json({ message: 'Unauth' });
  }
};

app.use(
  session({
    secret: 'a1s2d3f4g5h6',
    name: 'session-id', // cookies name to be put in "key" field in postman
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: false,
      secure: false, // to turn on just in production
    },
    resave: true,
    saveUninitialized: false,
  })
)


var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (_req, res) => {
  res.json({ hello: "world" }); 
  
});
const storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,'./uploads/');
  }, 
  filename:function(req,file,cb){
    const filename = `${file.originalname}`;
    cb(null,filename);
  }
});

const upload=multer({storage}).single('receipt');
// Routes

app.post("/upload", upload ,(req,res)=>{
  const { file } = req;
  res.send({
    file: file.originalname,
    path: file.path
  });
});

app.post("/patient/signin", Patient.signin); 
app.post("/patient/signup", Patient.signup);
app.get('/isAuth', Patient.isAuth); 
app.post("/doctor/signin", Doctor.login );
app.post("/doctor/signup", Doctor.signup);
app.get('/isAuthh', Doctor.isAuthh); 
app.get("/patient", Patient.get );
app.get("/patien/form",Formulaire.get);
app.post("/formajouter",upload,Formulaire.post);
app.post("/ajouterpatient",Patient.post);
app.get('/sendMail', Doctor.sendMail);
app.get('/resetPassword', Doctor.resetPassword);
app.get('/auth-endpoint' , auth , async (req, res) => { 
  try {
    const patient = await Patient.findById(req.patient._id); 
    res.json(patient); 
  } 
  catch(err) {  console.log(err) }
}); 




app.get('/count', authentiDoctor, async (req, res) => {
  try {
    // Retrieve the doctor record using the ID extracted from the JWT token
    const doctor = await Doctor.findById(req.doctor._id);

    // Return the doctor's account information as a JSON response
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(" server running on port 5000 ");
}); 
