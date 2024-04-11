const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    age:{type:Number},
    city:{type:String}
});
const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;