const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken')
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
} 
const auth = require('./auth')
const Patient = require('./routes/patientRoutes') 


const dbConnect = require("./db/dbConnect");


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


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
// Routes


app.post("/patient/signin", Patient.signin); 
app.post("/patient/signup", Patient.signup);
app.get('/auth-endpoint' , auth , async (req, res) => { 
  try {
    const patient = await Patient.findById(req.patient._id); 
    res.json(patient); 
  } 
  catch(err) {  console.log(err) }
}); 




// Start server
app.listen(process.env.PORT, () => {
    console.log(" server running on port 5000 ");
}); 
