const mongoose = require('mongoose')

//create a document schema
var studentSchema = mongoose.Schema({
    studentId : Number,
    fistName: String,
    lastName: String,
    age: Number,
    dob: String,
    department: String
  });

  
//after creating schema we need a model for it
//create a model, because model will communicate to our mongodb

//which is nothing but an instance
var studentModel = mongoose.model("studentModel", studentSchema);
//mongoose.model() = what kind of model it is?
//mongoose.model("studentModel", studentSchema) = model name is = studentModel,
//and what is the schema = studentSchema, same as we created above.

module.exports = studentModel;