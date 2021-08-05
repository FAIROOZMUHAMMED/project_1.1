const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ictakalumini'
,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
);
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    firstname:String,
    lastname:String,
    company:String,
    jobtitle:String,
    email : {type :String, unique:true },
    confirmpass:String
});

var Employerdata = mongoose.model('employerdata',EmployerSchema);

module.exports = Employerdata;