const jwt = require('jsonwebtoken');
const Patient = require('./models/Patient')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patient = await Patient.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!patient) {
      throw new Error();
    }

    req.token = token;
    req.patient = patient;
    next();
  } catch (error) {
      console.log(error)
    res.status(401).send({ error: 'Authentication failed' });
  }
};

module.exports = auth;
