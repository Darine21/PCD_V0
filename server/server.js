const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
};
const auth = require('./auth'); 
const Patient1 = require('./models/Patient.js'); 
const Patient = require('./routes/patientRoutes'); 
const Formulaire = require('./routes/formulaireRouter');
const Doctor = require('./routes/doctorRouter'); 
const Doctor1 = require('./models/Doctor.js')
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

app.post("/doctor/signin", Doctor.login );
app.post("/doctor/signup", Doctor.signup);

app.get("/patient", Patient.get );
app.get("/patien/form",Formulaire.get);
app.post("/formajouter",upload,Formulaire.post);
app.post("/ajouterpatient",Patient.post);
app.get('/sendMail', Doctor.sendMail);
app.get('/resetPassword', Doctor.resetPassword);
app.get('/auth-endpoint', async (req, res) => {
  try {
    const token = req.header('Authorization');
    const cleanToken = token.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided');
    }
     

    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    
    const patient = await Patient1.findOne({ _id: decoded.id });

    if (!patient) {
      console.log('No patient found');
    }

    res.json(patient);

  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
});

app.get('/authDoctor-endpoint', async (req, res) => {
  try {
    const token = req.header('Authorization');
    const cleanToken = token.replace('Bearer ', '');

    if (!token) {
      throw new Error('No token provided');
    }
     

    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    
    const doctor = await Doctor1.findOne({ _id: decoded.id });

    if (!doctor) {
      console.log('No doctor found');
    }

    res.json();

  } catch (error) {
    console.log(error);
    res.status(401).send({ error: 'Authentication failed' });
  }
});




// Start server
app.listen(process.env.PORT, () => {
    console.log(" server running on port 5000 ");
}); 
