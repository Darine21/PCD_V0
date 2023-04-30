const { Schema, model } = require('mongoose');


const FormSchema = new Schema({
  email:{type:String , required: true},
  age: {type:Number, required:true},
  gender:{type:String , required:true},
  anatomicalSile: { type:String, required: true },
  Isthespotpainful:{type:String , required: true},
  Howlonghasthespotbeenpresent:{type:String , required: true},
  receipt: { type:String}
  
  
  // mypdf:{type:String,required:true}
});

const Formulaire = model('Formulaire', FormSchema);
module.exports = Formulaire;