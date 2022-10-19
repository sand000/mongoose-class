const mongoose = require('mongoose');

const connection =  mongoose.connect("mongodb://127.0.0.1:27017/web20");

// schema
const studentSchema = new  mongoose.Schema({
    name:String,
    age:Number,
    course:String
})
// model - 
const studentModel = mongoose.model("student", studentSchema);

module.exports = {connection, studentModel};