const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
} 

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

 // Middleware function that verifies the JWT token and extracts the user's ID
const authenticate = (req, res, next) => {
  // Get the JWT token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    // Return a 401 Unauthorized response if the token is missing
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the JWT token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patientId = decoded._id;

    // Use the user's ID to retrieve the corresponding user record from the database
    Patient.findById(patientId, (err, user) => {
      if (err) {
        // Return a 500 Internal Server Error response if there's an error
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (!patient) {
        // Return a 404 Not Found response if the user doesn't exist
        return res.status(404).json({ message: 'User not found' });
      }

      // Attach the user object to the request object for further processing
      req.patient = patient;
      next();
    });
  } catch (error) {
    // Return a 401 Unauthorized response if the token is invalid or has expired
    res.status(401).json({ message: 'Unauthorized' });
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
app.get('/', (req, res) => {
  res.json({ hello: "world" }); 
  
});
// Routes


app.post("/patient/signin", Patient.signin); 
app.post("/patient/signup", Patient.signup);
app.get('/isAuth', Patient.isAuth); 
app.get('/account', authenticate, async (req, res) => {
  try {
    // Retrieve the user record using the ID extracted from the JWT token
    const patient = await Patient.findById(req.patient_id);

    // Return the user's account information as a JSON response
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Start server
app.listen(process.env.PORT, () => {
    console.log(" server running on port 5000 ");
}); 
